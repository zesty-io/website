export async function githubFetch({
  organization,
  projectNumber,
  discussions = 10,
  columns = 10,
  cards = 10,
  repository = 'manager-ui',
  endpoint = 'https://api.github.com/graphql',
} = {}) {
  const token = process.env.GITHUB_AUTH;
  if (!token) {
    return {
      data: null,
      errors: [
        { message: 'githubFetch: missing GITHUB_AUTH environment token.' },
      ],
    };
  }

  if (!organization || typeof projectNumber === 'undefined') {
    return {
      data: null,
      errors: [
        {
          message:
            'githubFetch: organization and projectNumber are required parameters.',
        },
      ],
    };
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `bearer ${token}`,
  };

  const query = `
    query GitHubRoadmap(
      $organization: String!
      $repository: String!
      $discussionCount: Int!
      $projectNumber: Int!
      $cardCount: Int!
    ) {
      organization(login: $organization) {
        repository(name: $repository) {
          discussions(last: $discussionCount) {
            edges {
              node {
                category {
                  name
                  emojiHTML
                }
              }
            }
            nodes {
              category {
                name
                emojiHTML
              }
              labels(last: 10) {
                nodes {
                  name
                  color
                  url
                }
              }
              upvoteCount
              title
              url
            }
          }
        }
        project(number: $projectNumber) {
          name
          columns(last: 10) {
            nodes {
              name
              cards(last: $cardCount) {
                totalCount
                nodes {
                  id
                  note
                  url
                }
              }
            }
          }
        }
        projectV2(number: $projectNumber) {
          title
          fields(first: 50) {
            nodes {
              __typename
              ... on ProjectV2FieldCommon {
                id
                name
              }
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  id
                  name
                  color
                }
              }
            }
          }
          items(first: $cardCount) {
            nodes {
              id
              isArchived
              content {
                __typename
                ... on DraftIssue {
                  title
                  body
                  bodyHTML
                }
                ... on Issue {
                  title
                  url
                  state
                  body
                  bodyHTML
                  labels(first: 10) {
                    nodes {
                      name
                      color
                      url
                    }
                  }
                }
                ... on PullRequest {
                  title
                  url
                  state
                  bodyHTML
                }
              }
              fieldValues(first: 20) {
                nodes {
                  __typename
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    id
                    name
                    color
                    optionId
                    field {
                      ... on ProjectV2FieldCommon {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const parsePositiveInt = (value, fallback) => {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed) || parsed < 0) {
      return fallback;
    }
    return parsed;
  };

  const parsedProjectNumber = Number.parseInt(projectNumber, 10);

  if (Number.isNaN(parsedProjectNumber)) {
    return {
      data: null,
      errors: [
        {
          message: 'githubFetch: projectNumber must be a valid number.',
        },
      ],
    };
  }

  const discussionCountParsed = parsePositiveInt(discussions, 10);
  const cardCountParsed = parsePositiveInt(cards, 10);
  const columnCountParsed = parsePositiveInt(columns, 10);
  const effectiveItemCount =
    cardCountParsed * Math.max(columnCountParsed || 1, 1);

  const variables = {
    organization,
    repository,
    discussionCount: discussionCountParsed,
    projectNumber: parsedProjectNumber,
    cardCount: effectiveItemCount,
  };

  console.log('githubFetch: requesting roadmap data', {
    organization,
    repository,
    projectNumber: variables.projectNumber,
    discussions: discussionCountParsed,
    columns: columnCountParsed,
    cardsPerColumn: cardCountParsed,
    cardsRequested: effectiveItemCount,
  });

  const buildProjectColumnsFromV2 = (projectV2Data) => {
    if (!projectV2Data) {
      return null;
    }

    const fieldNodes = projectV2Data?.fields?.nodes ?? [];
    const singleSelectFields = fieldNodes.filter(
      (field) => field?.__typename === 'ProjectV2SingleSelectField',
    );

    const statusField =
      singleSelectFields.find(
        (field) => field?.name?.toLowerCase() === 'status',
      ) ?? singleSelectFields[0];

    const projectTitle = projectV2Data?.title ?? 'Project';
    const columnsList =
      statusField?.options?.map((option) => ({
        id: option?.id,
        name: option?.name,
        color: option?.color,
        cards: [],
      })) ?? [];

    const columnLookup = new Map(
      columnsList
        .filter((column) => column.id)
        .map((column) => [column.id, column]),
    );

    const fallbackColumn =
      statusField || columnsList.length
        ? {
            id: 'unassigned',
            name: 'Unassigned',
            color: 'GRAY',
            cards: [],
          }
        : {
            id: 'backlog',
            name: projectTitle,
            color: 'BLUE',
            cards: [],
          };

    const assignCardToColumn = (columnId, card) => {
      const column = (columnId && columnLookup.get(columnId)) || fallbackColumn;
      column.cards.push(card);
    };

    const items = projectV2Data?.items?.nodes ?? [];

    items.forEach((item) => {
      const fieldValues = item?.fieldValues?.nodes ?? [];
      const matchingValue = fieldValues.find(
        (value) =>
          value?.__typename === 'ProjectV2ItemFieldSingleSelectValue' &&
          value?.field?.id === statusField?.id,
      );

      const optionId = matchingValue?.optionId;
      const content = item?.content;
      const contentType = content?.__typename;

      const card = {
        id: item?.id,
        note: null,
        url: null,
        state: content?.state ?? null,
        isArchived: Boolean(item?.isArchived),
        content: {
          title: null,
          bodyHTML: null,
          labels:
            contentType === 'Issue' ? content?.labels?.nodes ?? [] : undefined,
        },
      };

      if (contentType === 'Issue') {
        card.content.title = content?.title ?? null;
        card.content.bodyHTML = content?.bodyHTML ?? null;
        card.url = content?.url ?? null;
      } else if (contentType === 'DraftIssue') {
        card.content.title = content?.title ?? null;
        card.content.bodyHTML = content?.bodyHTML ?? null;
        card.note = content?.body ?? null;
      } else if (contentType === 'PullRequest') {
        card.content.title = content?.title ?? null;
        card.content.bodyHTML = content?.bodyHTML ?? null;
        card.url = content?.url ?? null;
      } else {
        card.content.title = content?.title ?? null;
        card.content.bodyHTML = content?.bodyHTML ?? null;
      }

      if (card.content.title || card.note) {
        assignCardToColumn(optionId, card);
      }
    });

    const columnsWithCards = columnsList.map((column) => ({
      ...column,
      cards: { nodes: column.cards },
    }));

    if (fallbackColumn.cards.length) {
      columnsWithCards.push({
        ...fallbackColumn,
        cards: { nodes: fallbackColumn.cards },
      });
    }

    return columnsWithCards;
  };

  try {
    const githubResponse = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    const result = await githubResponse.json();

    console.log('githubFetch: response status', {
      ok: githubResponse.ok,
      status: githubResponse.status,
      errorMessages: result?.errors?.map((err) => err.message) ?? null,
    });

    if (!githubResponse.ok) {
      console.log('githubFetch: non-ok response payload', result);
      return {
        data: result.data ?? null,
        errors: result.errors ?? [
          {
            message: `githubFetch: request failed with status ${githubResponse.status}`,
          },
        ],
      };
    }

    const projectColumnsFromV2 = buildProjectColumnsFromV2(
      result?.data?.organization?.projectV2,
    );

    if (projectColumnsFromV2?.length && result?.data?.organization) {
      const projectName =
        result?.data?.organization?.projectV2?.title ??
        result?.data?.organization?.project?.name ??
        'Project';

      result.data.organization.project = {
        name: projectName,
        columns: {
          nodes: projectColumnsFromV2,
        },
      };
    }

    console.log('githubFetch: data sample', {
      discussionsFetched:
        result?.data?.organization?.repository?.discussions?.nodes?.length ??
        null,
      projectColumns:
        result?.data?.organization?.project?.columns?.nodes?.length ?? null,
      projectV2Columns: projectColumnsFromV2?.length ?? null,
    });

    return {
      data: result.data ?? null,
      errors: result.errors ?? null,
    };
  } catch (error) {
    console.log('githubFetch: request failed', error);
    return {
      data: null,
      errors: [{ message: `githubFetch: ${error.message}` }],
    };
  }
}

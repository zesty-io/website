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
      $columnCount: Int!
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
          columns(last: $columnCount) {
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

  const variables = {
    organization,
    repository,
    discussionCount: parsePositiveInt(discussions, 10),
    projectNumber: parsedProjectNumber,
    columnCount: parsePositiveInt(columns, 10),
    cardCount: parsePositiveInt(cards, 10),
  };

  console.log('githubFetch: requesting roadmap data', {
    organization,
    repository,
    projectNumber: variables.projectNumber,
    discussions: variables.discussionCount,
    columns: variables.columnCount,
    cards: variables.cardCount,
  });

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

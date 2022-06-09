export async function githubFetch(settings){
    const TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH;
    const ENDPOINT = 'https://api.github.com/graphql';

    const HEADERS = {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + TOKEN,
    };

   

    const body = {
      query: `
      {
        organization(login: ${settings.organization}) {
          repository(name: "manager-ui") {
            discussions(last: ${settings.discussions}) {
              edges {
                node {
                  category {
                    name,
                    emojiHTML
                  }
                }
              }
              nodes {
                category {
                  name
                  emojiHTML
                }
                labels(last:10) {
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
          project(number: ${settings.projectNumber}) {
            name
            columns(last: ${settings.columns}) {
              nodes {
                name,
                cards(last: ${settings.cards} ) {
                  totalCount
                  nodes {
                    id,
                    note,
                    url
                  }
                }
              }
            }
          }
        }
      }    
      `,
    };

    const githubResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    return await githubResponse.json();

}
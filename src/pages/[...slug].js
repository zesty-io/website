import { React, useEffect } from 'react';

import { fetchPage } from 'lib/api';
import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { getCookie, setCookies } from 'cookies-next';

export default function Slug(props) {
  console.log(props);
  // capture information about the url and request
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // referrer, stored in a cookie so its not lost as a user browses
    let refCookie = getCookie('referrer');
    if (undefined == refCookie) setCookies('referrer', document.referrer);

    // utm query params
    if (params.utm_campaign) setCookies('utm_campaign', params.utm_campaign);
    if (params.utm_term) setCookies('utm_term', params.utm_term);
    if (params.utm_source) setCookies('utm_source', params.utm_source);
    if (params.utm_medium) setCookies('utm_medium', params.utm_medium);

    // persona
    if (params.persona) setCookies('persona', params.persona);
  }, []);

  return (
    <Main
      model={props.meta.model_alternate_name}
      nav={props.navigationTree}
      customRouting={props.navigationCustom}
      url={props.meta.web.uri}
    >
      <ZestyView content={props} />
    </Main>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data = await fetchPage(ctx.resolvedUrl);

  /**
   * This section holds data settings for fetching Github Data
   */
  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH;
  const ENDPOINT = 'https://api.github.com/graphql';

  const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + TOKEN,
  };

  const settings = {
    organization: `"Zesty-io"`,
    projectNumber: data.project_number,
    columns: data.max_column,
    cards: data.max_card,
    discussions: data.max_discussion,
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

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const gitHubData = await res.json();
  data.github_data = gitHubData;

  // generate a status 404 page
  if (data.error) return { notFound: true };

  res.setHeader(
    'edge-cache-tag',
    `${process.env.zesty.instance_zuid}, ${data.meta.zuid}`
  )

  // Pass data to the page via props
  return { props: data };
}

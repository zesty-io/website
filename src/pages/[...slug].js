import { React, useEffect } from 'react';

import { fetchPage } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';
import { getCookie, setCookies } from 'cookies-next';

import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { useTheme } from '@emotion/react';

export default function Slug(props) {
  const theme = useTheme();
  // capture information about the url and request
  useEffect(() => {
    const params = new Proxy(
      new URLSearchParams(window.location.search.toLowerCase()),
      {
        get: (searchParams, prop) => searchParams.get(prop),
      },
    );
    // referrer, stored in a cookie so its not lost as a user browses
    let refCookie = getCookie('referrer');
    if (undefined == refCookie) setCookies('referrer', document.referrer);

    // utm query params
    if (params.utm_campaign) setCookies('utm_campaign', params.utm_campaign);
    if (params.utm_term) setCookies('utm_term', params.utm_term);
    if (params.utm_source) setCookies('utm_source', params.utm_source);
    if (params.utm_medium) setCookies('utm_medium', params.utm_medium);
    //google click id  https://support.google.com/searchads/answer/7342044?hl=en
    if (params.gclid) setCookies('gclid', params.gclid);

    // persona
    if (params.persona) setCookies('persona', params.persona);
  }, []);

  // for homepage navigation
  // const isDarkMode = theme.palette.mode === 'dark';
  let bgcolor = 'transparent';
  // if (props?.meta?.web?.uri === '/') {
  //   bgcolor = isDarkMode ? 'transparent' : theme.palette.common.white;
  // }

  return (
    <>
      <Main
        model={props.meta.model_alternate_name}
        nav={props.navigationTree}
        customRouting={props.navigationCustom}
        url={props.meta.web.uri}
        bgcolor={bgcolor}
      >
        <ZestyView content={props} />
      </Main>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  // attempt to get page data relative to zesty
  let data = await fetchPage(req.url);

  // This section holds data settings for fetching Github Data
  if (req.url == '/roadmap/' && process.env.NEXT_PUBLIC_GITHUB_AUTH) {
    data.github_data = await githubFetch({
      organization: `"Zesty-io"`,
      projectNumber: data.project_number,
      columns: data.max_column,
      cards: data.max_card,
      discussions: data.max_discussion,
    });
  }

  // generate a status 404 page
  if (data.error) return { notFound: true };

  // Pass data to the page via props
  return { props: data };
}

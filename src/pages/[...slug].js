import { React, useEffect } from 'react';

import { fetchPage } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';

import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { getCookie, setCookies } from 'cookies-next';
import { useTheme } from '@emotion/react';
import { useZestyStore } from 'store';

export default function Slug(props) {
  const setZestyProductionMode = useZestyStore(
    (state) => state.setZestyProductionMode,
  );
  const theme = useTheme();
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

  // for homepage navigation
  // const isDarkMode = theme.palette.mode === 'dark';
  let bgcolor = 'transparent';
  // if (props?.meta?.web?.uri === '/') {
  //   bgcolor = isDarkMode ? 'transparent' : theme.palette.common.white;
  // }

  useEffect(() => {
    if (props) {
      setZestyProductionMode(props.zestyProductionMode);
    }
  }, [props]);

  return (
    <Main
      model={props.meta.model_alternate_name}
      nav={props.navigationTree}
      customRouting={props.navigationCustom}
      url={props.meta.web.uri}
      bgcolor={bgcolor}
    >
      <ZestyView content={props} />
    </Main>
  );
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  // does not display with npm run dev
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // attempt to get page data relative to zesty
  const data = await fetchPage(req.url);

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

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
  const data = await fetchPage(ctx.resolvedUrl);

  // generate a status 404 page
  if (data.error) return { notFound: true };

  // Pass data to the page via props
  return { props: data };
}

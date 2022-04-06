import { React, useEffect} from 'react';

import { fetchPage } from 'lib/api';
import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { getCookie, setCookies } from 'cookies-next';


export default function Slug(props) {
  useEffect(() => {
    let refCookie = getCookie('referrer');
    if(undefined == refCookie) setCookies('referrer', document.referrer);
  }, [])
  
  return (
    <Main model={props.meta.model_alternate_name} nav={props.navigationTree} customRouting={props.navigationCustom } url={props.meta.web.uri}>
        <ZestyView content={props} />
    </Main>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {

  const data = await fetchPage(ctx.resolvedUrl);

  // generate a status 404 page
  if (data.error) return { notFound: true }

  // Pass data to the page via props
  return { props: data };
}

import React from 'react';

import { fetchPage } from '../lib/api';
import { ZestyView } from '../lib/ZestyView';
import Main from '../layouts/Main';

export default function Slug(props) {
  return (
    <Main routing={props.navigationTree}>
        <ZestyView content={props} />
    </Main>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  const data = await fetchPage(ctx.resolvedUrl);

  // Pass data to the page via props
  return { props: data };
}

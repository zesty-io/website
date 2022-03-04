import React from 'react';

import { fetchPage } from '../lib/api';
import { ZestyView } from '../lib/ZestyView';

export default function Slug(props) {
  return <ZestyView content={props} />;
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  const data = await fetchPage(ctx.resolvedUrl);

  // Pass data to the page via props
  return { props: data };
}

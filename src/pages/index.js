import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps(ctx) {
  const data = await fetchPage(ctx.resolvedUrl);

  // Pass data to the page via props
  return { props: data };
}

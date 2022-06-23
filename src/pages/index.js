import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

console.log('test');
// This gets called on every request
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  const data = await fetchPage(req.url);

  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  // Pass data to the page via props
  return { props: data };
}

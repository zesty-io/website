import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  res.setHeader('Cache-Control', 'public, max-age=60, must-revalidate');
  res.setHeader('Surrogate-Control', 'max-age=60');

  const data = await fetchPage(req.url);

  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  // Pass data to the page via props
  return { props: data };
}

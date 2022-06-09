
   
import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps({req,res}) {

  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600')

  const data = await fetchPage(req.url);

  // Pass data to the page via props
  return { props: data };
}

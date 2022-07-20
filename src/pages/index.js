import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  // issue:  multiple call of getServersideprops
  const data = await fetchPage(req.url);

  if (req?.headers?.cookies?.include('APP_SID')) {
    data.zestyUser = true;
    // does not display with npm run dev
    res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  } else {
    data.zestyUser = false;
    // does not display with npm run dev
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=3600',
    );
  }

  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  // Pass data to the page via props
  return { props: data };
}

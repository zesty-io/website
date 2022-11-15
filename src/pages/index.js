import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';
import { getIsAuthenticated } from 'utils';

function IndexPage(content) {
  return <Slug {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps({ req, res, resolvedUrl }) {
  // needs to add this here, because the [...slug].js in pages don't get triggered in homepage path /
  // in able to use zesty.isAuthenticated to swap layout in /
  const isAuthenticated = getIsAuthenticated(res);

  // issue:  multiple call of getServersideprops
  let data = await fetchPage(resolvedUrl);

  data = {
    ...data,
    zesty: {
      isAuthenticated,
    },
  };

  // logic needed to prevent caching in homepage for zesty users
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

  // its usage is for marketplace
  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  // Pass data to the page via props
  return { props: { ...data } };
}

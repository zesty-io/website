import React from 'react';
import ZestyLoader from './[...slug]';

function IndexPage(content) {
  return <ZestyLoader {...content} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from Zesty.io toJSON API
  const res = await fetch(`${process.env.zesty.stage}/?toJSON`);
  const data = await res.json();

  // Pass data to the page via props
  return { props:  data  }
}

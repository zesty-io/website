import React, { lazy, useEffect, useState } from 'react';
import ZestyLoader from './[...slug]'



function IndexPage(content) {
  return <ZestyLoader {...content} />;
};

export default IndexPage;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from Zesty.io toJSON API
  const res = await fetch(`https://www.zesty.io/?toJSON`)
  const data = await res.json()

  // Pass data to the page via props
  return { props:  data  }
}

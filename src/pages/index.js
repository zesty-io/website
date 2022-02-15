import React from 'react';
import IndexView from 'views/IndexView';

function IndexPage(content) {
  return <div dangerouslySetInnerHTML={{__html:content.title}}></div>;
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

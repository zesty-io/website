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

 // access the headless url map
  // https://www.zesty.io/-/headless/routing.json
  let routeData = {}
  try {
    const routes = await fetch('https://www.zesty.io/-/headless/routing.json');
    routeData = await routes.json();
    let reducedData = []
    routeData.forEach(async route => {
      if(!route.uri.match(/mindshare/)){
        let tempRoute = {
          href: route.uri,
          title: route.title
        };
        reducedData.push(tempRoute)
      }
    
    }) 
    data.routing = reducedData
  } catch (err){
    console.log(err)
  }

  // Pass data to the page via props
  return { props: data };
}

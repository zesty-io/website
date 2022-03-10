
   
import React from 'react';
import Slug from './[...slug]';
import { fetchPage } from '../lib/api';

<<<<<<< HEAD
const IndexPage = () => {
  return <IndexView />;
};

export default IndexPage;
=======
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
>>>>>>> 5fe74f7c10eed789039eaf73ec31aa60c72cf7de

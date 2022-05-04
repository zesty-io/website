import React from 'react';
import Docs from './[...slug]';
import { docsLookup } from 'components/docs/docsLookup';

function DocsIndex(content) {
  return <Docs {...content} />;
}

export default DocsIndex;

// This gets called on every request
export async function getServerSideProps(ctx) {
  return docsLookup(ctx) 
}
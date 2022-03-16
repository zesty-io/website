/**
 * Component which dynamically selects a views/zesty component based on the URL
 */
import React from 'react';
import * as Zesty from '../views/zesty';
import ZestyHead from '../components/ZestyHead';

import ErrorPage from '../pages/_error';
import { ZestyExplorer } from './ZestyExplorer';

export function ZestyView(props) {
  if (props.content.error) {
    return <ErrorPage statusCode={404} />;
  }

  const Component = Zesty[props.content.meta.model_alternate_name];
  return (
    <>
      <ZestyHead content={props.content} />
      <Component content={props.content} />

      {true && <ZestyExplorer content={props.content} />}
    </>
  );
}

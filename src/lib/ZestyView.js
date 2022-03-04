/**
 * Component which dynamically selects view
 */
import React from 'react';
import * as Zesty from '../views/zesty';
import ZestyHead from '../components/ZestyHead';

import Custom404 from '../pages/404';

export function ZestyView(props) {
  if (props.content.error) {
    return <Custom404 error={props.content} />;
  }

  const Component = Zesty[props.content.meta.model_alternate_name];
  return (
    <>
      <ZestyHead content={props.content} />
      <Zesty.Header/>
      <Component content={props.content} />
      <Zesty.Footer/>
    </>
  );
}

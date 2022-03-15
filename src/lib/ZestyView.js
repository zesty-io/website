/**
 * Component which dynamically selects view
 */
import React from 'react';
import * as Zesty from '../views/zesty';
import ZestyHead from '../components/ZestyHead';

import Custom404 from '../pages/404';
import { ZestyExplorer } from './ZestyExplorer';

export function ZestyView(props) {
  // const [modal, setModal] = React.useState(true);
  if (props.content.error) {
    return <Custom404 error={props.content} />;
  }

  const Component = Zesty[props.content.meta.model_alternate_name];
  console.log(process.env, 'env');
  return (
    <>
      <ZestyHead content={props.content} />
      <Component content={props.content} />

      {true && <ZestyExplorer content={props.content} />}
    </>
  );
}

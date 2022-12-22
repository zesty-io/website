/**
 * Component which dynamically selects a views/zesty component based on the URL
 */
import React from 'react';
import * as Zesty from '../views/zesty';
import ErrorPage from '../pages/_error';

export function ZestyView(props) {
  if (props.content.error) {
    return <ErrorPage statusCode={404} />;
  }

  // get data in initial load
  const Component =
    Zesty[props.content.meta.model_alternate_name] ||
    Zesty['DefaultPageComponent'];

  // outside the component near imports
  const initLiveEditor = async (data) => {
    const { ZestyLiveEditor } = await import('@zesty-io/live-editor');
    ZestyLiveEditor(data);
  };

  // inside the component's function just before the return statement
  React.useEffect(() => {
    if (props.content.zestyProductionMode !== true) {
      initLiveEditor(props.content);
    }
  }, []);
  return (
    <>
      <Component content={props.content} />
    </>
  );
}

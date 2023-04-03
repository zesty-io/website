/**
 * Component which dynamically selects a views/zesty component based on the URL
 */
import React from 'react';
import * as Zesty from '../views/zesty';
import ErrorPage from '../pages/_error';
import AutoLayoutComponent from '../views/zesty/AutoLayoutComponent';

export function ZestyView(props) {
  if (props.content.error) {
    return <ErrorPage statusCode={404} />;
  }

  /**
   * @description check if layout is active and has content in the cms
   * @returns boolean
   */
  const useAutoLayoutCheck = () => {
    // Layout is not active
    if (!props.content.meta.layout) return false;

    // Layout is active but no json object
    if (props.content.meta.layout?.json === null) return false;

    // Layout is active but no components selected
    if (
      JSON.stringify(
        props.content.meta.layout?.json['layout:root:column:0']?.children,
      ) === '{}'
    )
      return false;

    // return only true if the layout is active and has components
    return true;
  };

  /**
   * 1.) If layouts has content inside the cms always default to autolayout component
   * 2.) If layouts don't have content inside cms it renders the component from zesty > view
   * npm run sync must be run! otherwise it default back to auto layout component
   */

  const Component = useAutoLayoutCheck()
    ? AutoLayoutComponent
    : Zesty[props.content.meta.model_alternate_name];

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

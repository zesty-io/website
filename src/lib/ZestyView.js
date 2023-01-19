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

  /**
   * @description check if layout is active and has content in the cms
   * @returns boolean
   */
  const hasLayoutContent = () => {
    if (!props.content.meta.layout) return false;
    if (
      JSON.stringify(
        props.content.meta.layout?.json['layout:root:column:0']?.children,
      ) === '{}'
    )
      return false;
    return true;
  };

  /**
   * 1.) If layouts has content inside the cms always default to autolayout component
   * 2.) If layouts don't have content inside cms it renders the component from zesty > view
   * npm run sync must be run! otherwise it default back to auto layout component
   */
  const Component = hasLayoutContent()
    ? Zesty['AutoLayoutComponent']
    : Zesty[props.content.meta.model_alternate_name] ||
      Zesty['AutoLayoutComponent'];

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

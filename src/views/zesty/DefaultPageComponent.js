import React from 'react';
import { AutoLayout } from '@zesty-io/react-autolayout';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';

function DefaultPageComponent({ content }) {
  return (
    <>
      <AutoLayout
        content={content}
        components={{
          component: ComponentSelector,
        }}
      />
    </>
  );
}

export default DefaultPageComponent;

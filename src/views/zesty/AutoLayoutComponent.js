import React from 'react';
import { AutoLayout } from '../../../../react-autolayout/dist/AutoLayout';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';

function AutoLayoutComponent({ content }) {
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

export default AutoLayoutComponent;

import React from 'react';
import { AutoLayout } from '@zesty-io/react-autolayout';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';
import { Columns, RichText } from 'blocks/layoutsBlocks';
import { Text } from 'blocks/layoutsBlocks';

function AutoLayoutComponent({ content }) {
  console.log(content);
  return (
    <AutoLayout
      content={content}
      components={{
        component: ComponentSelector,
        row: Columns,
        text: Text,
        wysiwyg_basic: RichText,
      }}
    />
  );
}

export default AutoLayoutComponent;

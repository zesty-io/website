import React from 'react';
import { AutoLayout } from '@zesty-io/react-autolayout';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';
import { Row, Images, RichText, Text, Column } from 'blocks/layoutsBlocks';

import revampTheme from 'theme/revampTheme';
import { ThemeProvider, useTheme } from '@emotion/react';

function AutoLayoutComponent({ content }) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <AutoLayout
        content={content}
        components={{
          component: ComponentSelector,
          row: Row,
          column: Column,
          text: Text,
          wysiwyg_basic: RichText,
          images: Images,
        }}
      />
    </ThemeProvider>
  );
}

export default AutoLayoutComponent;

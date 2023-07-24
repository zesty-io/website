import { Box } from '@mui/material';
import React from 'react';
import ModalImage from 'react-modal-image';

const MDLargeImage = ({ node }) => {
  return (
    <Box px={5} data-testid="md-large-image">
      <ModalImage
        small={node.properties.src}
        large={node.properties.src}
        alt={node.properties.alt}
        title={node.properties.title}
      />
    </Box>
  );
};

const MDSmallImage = ({ node }) => {
  return (
    <Box
      data-testid="md-small-image"
      ml={3}
      mr={2}
      maxWidth={'200px'}
      sx={{
        float: 'right',
      }}
    >
      <ModalImage
        small={node.properties.src}
        large={node.properties.src}
        alt={node.properties.alt}
        title={node.properties.title}
      />
    </Box>
  );
};

export const MDImage = ({ node }) => {
  if (node.properties.title) {
    return <MDLargeImage node={node} />;
  } else {
    return <MDSmallImage node={node} />;
  }
};

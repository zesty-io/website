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

const MDSmallImage = ({ node, floatRight, maxWidth = `200px` }) => {
  return (
    <Box
      data-testid="md-small-image"
      ml={3}
      mr={2}
      maxWidth={maxWidth}
      sx={{
        float: floatRight ? 'right' : 'center',
        display: 'flex',
        justifyItems: 'center',
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

export const MDImage = ({ node, isDocs = false, floatRight = false }) => {
  const isSmall = node?.properties?.alt?.includes('small');
  const isLarge = node?.properties?.alt?.includes('large');
  const isVideo = node.properties.src.includes('youtube');

  if (isDocs) {
    if (isSmall) {
      return <MDSmallImage node={node} floatRight={true} />;
    }
    if (isLarge) {
      return <MDSmallImage node={node} floatRight={false} maxWidth={`100%`} />;
    }
    if (isVideo) {
      return <img src={node.properties.src}></img>;
    }
  }

  if (node.properties.title) {
    return <MDLargeImage node={node} />;
  } else {
    return <MDSmallImage node={node} floatRight={floatRight} />;
  }
};

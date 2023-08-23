import { Box, Stack } from '@mui/material';
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

const DocsImage = ({ node }) => {
  const smallImage = node.properties.alt.includes('-sm');
  // todo
  // const mediumImage = node.properties.alt.includes('-md');
  // const largeImage = node.properties.alt.includes('-lg');
  return (
    <Box
      data-testid="md-small-image"
      ml={3}
      mr={2}
      sx={{
        display: 'flex',
        justifyItems: smallImage ? 'left' : 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        width={smallImage ? 200 : '100%'}
        mx={smallImage ? 0 : 'auto'}
        sx={{
          display: 'flex',
          justifyItems: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ModalImage
          style={{ width: 10 }}
          small={node.properties.src}
          large={node.properties.src}
          alt={node.properties.alt}
          title={node.properties.title}
        />
      </Stack>
    </Box>
  );
};

const MDSmallImage = ({ node, floatRight, maxWidth = `200px` }) => {
  return (
    <Box
      data-testid="md-small-image"
      ml={3}
      mr={2}
      sx={{
        float: floatRight ? 'right' : 'center',
        display: 'flex',
        justifyItems: 'center',
      }}
    >
      <Stack maxWidth={maxWidth}>
        <ModalImage
          style={{ width: 10 }}
          small={node.properties.src}
          large={node.properties.src}
          alt={node.properties.alt}
          title={node.properties.title}
        />
      </Stack>
    </Box>
  );
};

export const MDImage = ({ node, isDocs = false, floatRight = false }) => {
  const isVideo = node.properties.src.includes('youtube');

  if (isDocs) {
    return <DocsImage node={node} />;
  }

  if (isVideo) {
    return <img src={node.properties.src}></img>;
  }
  if (node.properties.title) {
    return <MDLargeImage node={node} />;
  } else {
    return <MDSmallImage node={node} floatRight={floatRight} />;
  }
};

import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import ModalImage from 'react-modal-image';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { transformText } from 'utils/product';

const LinkComponent = ({ node }) => {
  return (
    <Link
      sx={{ textDecoration: 'none' }}
      href={node.children[0].properties.href}
      title={node.children[0].children[0].value}
    >
      <Box
        p={3}
        my={1}
        mb={3}
        sx={{
          border: `1px solid #ccc`,
          borderRadius: '4px',
          display: 'flex',
          '&:hover': {
            background: '#ccc',
          },
        }}
      >
        <Stack
          direction={'row'}
          width={1}
          alignItems={'stretch'}
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} gap={2}>
            <FileOpenIcon
              sx={{
                transform: 'scaleX(-1)',
              }}
            />
            <Typography color="black">
              {node.children[0].children[0].value}
            </Typography>
          </Stack>
          <ArrowForwardIosIcon sx={{ color: 'grey' }} />
        </Stack>
      </Box>
    </Link>
  );
};

const MDLargeImage = ({ node }) => {
  return (
    <Box px={5}>
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

const MDImage = ({ node }) => {
  if (node.properties.title) {
    return <MDLargeImage node={node} />;
  } else {
    return <MDSmallImage node={node} />;
  }
};

const MDBlockquote = ({ node }) => {
  return (
    <Box
      sx={{
        mx: 5,
        background: '#e7e7e7',
        p: 2,
        borderLeft: '2px #ccc solid',
        mb: 3,
      }}
    >
      <Typography>{node.children[1].children[0].value}</Typography>
    </Box>
  );
};

const MDH1 = ({ node }) => {
  const id = transformText(node.children[0].value);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.5}>
      <Typography id={id} mt={2} fontWeight={800} variant="h4" component={'h1'}>
        {node.children[0].value}
      </Typography>
      <Link
        sx={{
          pt: 2,
          fontSize: 24,
          opacity: 0,
          color: '#FF5D0A',
          '&:hover': {
            opacity: 1,
          },
        }}
        href={`#${id}`}
      >
        #
      </Link>
    </Box>
  );
};

const MDH2 = ({ node }) => {
  const id = transformText(node.children[0].value);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.5}>
      <Typography variant="h5" component={'h2'} id={id}>
        {node.children[0].value}
      </Typography>
      <Link
        sx={{
          fontSize: 24,
          opacity: 0,
          color: '#FF5D0A',
          '&:hover': {
            opacity: 1,
          },
        }}
        href={`#${id}`}
      >
        #
      </Link>
    </Box>
  );
};

const MDH3 = ({ node }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        component={'h3'}
        id={node.children[0].value
          ?.replace(/[^\w\s]/gi, '')
          ?.replace(/\s+/g, '-')
          ?.toLowerCase()}
      >
        {node.children[0].value}
      </Typography>
    </Box>
  );
};

const MDParagraph = ({ node, children, mainKeywords, productGlossary }) => {
  const keywords = mainKeywords;
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

  const res = children.map((e) => {
    if (e.type === 'a') {
      const linkHtml = `<a href="${e.props.href}" title="${e.props.children[0]}">${e.props.children[0]}</a>`;
      return linkHtml;
    }

    if (typeof e === 'string') {
      return e.replace(keywordRegex, (match) => {
        const obj = productGlossary.find((x) =>
          x.target_words.includes(match.toLowerCase()),
        );
        return `<a href="${obj?.url}" class="zesty-tooltip" title="${obj?.description}" >${match}</a>`;
      });
    }
  });

  if (node.children.length === 1 && node.children[0].tagName === 'a') {
    return <LinkComponent node={node} />;
  }

  return (
    <p
      dangerouslySetInnerHTML={{
        __html: res.join(''),
      }}
    />
  );
};

// Main //
export const ZestyMarkdownParser = ({
  markdown,
  mainKeywords,
  productGlossary,
}) => {
  const components = {
    p: (props) => (
      <MDParagraph
        {...props}
        mainKeywords={mainKeywords}
        productGlossary={productGlossary}
      />
    ),
    img: MDImage,
    blockquote: MDBlockquote,
    h1: MDH1,
    h2: MDH2,
    h3: MDH3,
  };
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
};

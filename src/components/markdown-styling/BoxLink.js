import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import ModalImage from 'react-modal-image';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export const BoxLink = ({ markdown, mainKeywords, productGlossary }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ node, children }) {
          const keywords = mainKeywords;
          const keywordRegex = new RegExp(
            `\\b(${keywords.join('|')})\\b`,
            'gi',
          );

          const res = children.map((e) => {
            // inside the p tag this will
            // render the a tag in MD as it is
            if (e.type === 'a') {
              const linkHtml = `<a href="${e.props.href}" title="${e.props.children[0]}">${e.props.children[0]}</a>`;

              return linkHtml;
            }
            // inside the p tag
            // this will find and replace the keywords to a link tag
            if (typeof e === 'string') {
              return e.replace(keywordRegex, (match) => {
                const obj = productGlossary.find((x) =>
                  x.target_words.includes(match.toLowerCase()),
                );
                return `<a href="${obj?.url}" class="zesty-tooltip" title="${obj?.description}" >${match}</a>`;
              });
            }
          });

          // render link tags thats outside of p tags
          if (node.children.length === 1 && node.children[0].tagName === 'a') {
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
          }

          return (
            <p
              dangerouslySetInnerHTML={{
                __html: res.join(''),
              }}
            />
          );
        },
        img({ node }) {
          if (node.properties.title) {
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
          }
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
        },
        blockquote({ node }) {
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
        },
        h1({ node }) {
          return (
            <Box sx={{}}>
              <Typography
                mt={2}
                fontWeight={800}
                variant="h4"
                component={'h1'}
                id={node.children[0].value
                  ?.replace(/[^\w\s]/gi, '')
                  ?.replace(/\s+/g, '-')
                  ?.toLowerCase()}
              >
                {node.children[0].value}
              </Typography>
            </Box>
          );
        },
        h2({ node }) {
          return (
            <Box sx={{}}>
              <Typography
                variant="h5"
                component={'h2'}
                id={node.children[0].value
                  ?.replace(/[^\w\s]/gi, '')
                  ?.replace(/\s+/g, '-')
                  ?.toLowerCase()}
              >
                {node.children[0].value}
              </Typography>
            </Box>
          );
        },
        h3({ node }) {
          return (
            <Box sx={{}}>
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
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

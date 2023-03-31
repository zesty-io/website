/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: BlogTest 
 * Name: blogtest 
 * Model ZUID: 6-c6c8869acf-gpdw9j
 * File Created On: Wed Mar 29 2023 12:58:00 GMT+0800 (Taipei Standard Time)
 * 
 * Model Fields:
 * 
  * article (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c6c8869acf-gpdw9j
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  List,
  ListItem,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import BlogHero from 'revamp/ui/BlogHero';
import revampTheme from 'theme/revampTheme';

function Blogtest({ content }) {
  const [newContent, setNewContent] = useState(content.article);

  useEffect(() => {
    function decode(str) {
      let txt = document.createElement('textarea');
      txt.innerHTML = str;
      return txt.value;
    }
    setNewContent(decode(newContent));
  }, []);

  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      <Stack>
        <BlogHero
          author={content.author}
          authorImage={content.author_image?.data?.[0]?.url}
          heading={content.heading}
          overline={content.overline}
          supportingText={content.supporting_text}
        />
        <Stack
          sx={(theme) => ({
            mb: 6,
            [theme.breakpoints.up('lg')]: {
              width: '800px',
              mx: 'auto',
            },
          })}
        >
          <MuiMarkdown
            options={{
              overrides: {
                p: {
                  component: Typography,
                  props: {
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: 'text.secondary',
                    mt: '20px',
                    px: 2,
                    sx: (theme) => ({
                      [theme.breakpoints.up('xs')]: {
                        '&:has(img)': {
                          mt: '0',
                          px: 0,
                          width: '100%',
                        },
                      },
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h1: {
                  component: Typography,
                  props: {
                    component: 'h1',
                    variant: 'h1',
                    mt: 6,
                    color: 'text.primary',
                    fontWeight: 800,
                    px: 2,
                    letterSpacing: '-0.02em',
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h2',
                    mt: 6,
                    color: 'text.primary',
                    fontWeight: 800,
                    px: 2,
                    letterSpacing: '-0.02em',
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h3: {
                  component: Typography,
                  props: {
                    component: 'h3',
                    variant: 'h3',
                    mt: 6,
                    color: 'text.primary',
                    fontWeight: 800,
                    px: 2,
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h4: {
                  component: Typography,
                  props: {
                    component: 'h4',
                    variant: 'h4',
                    mt: '20px',
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                    px: 2,
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h5: {
                  component: Typography,
                  props: {
                    component: 'h5',
                    variant: 'h5',
                    mt: '20px',
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                    px: 2,
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                h6: {
                  component: Typography,
                  props: {
                    component: 'h6',
                    variant: 'h6',
                    mt: '20px',
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                    px: 2,
                    sx: (theme) => ({
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                img: {
                  props: {
                    width: '100%',
                    style: {
                      marginTop: '48px',
                    },
                  },
                },
                ul: {
                  component: List,
                  props: {
                    sx: (theme) => ({
                      [theme.breakpoints.up('xs')]: {
                        color: 'text.secondary',
                        listStyleType: 'disc',
                        fontSize: '18px',
                        lineHeight: '28px',
                        fontWeight: 500,
                        pl: 2,
                        '& .MuiListItem-root': {
                          display: 'list-item',
                        },
                        mx: 2,
                      },
                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                        px: 0,
                      },
                    }),
                  },
                },
                li: {
                  component: ListItem,
                  props: {
                    p: 0,
                    sx: {
                      mx: 2,
                    },
                  },
                },
                blockquote: {
                  component: Stack,
                  props: {
                    px: 2,
                    sx: (theme) => ({
                      mt: '20px',
                      borderLeft: `4px solid ${theme.palette.primary.main}`,

                      [theme.breakpoints.up('tablet')]: {
                        width: '640px',
                        mx: 'auto',
                      },
                      '&:has(h4)': {
                        '& > h4': {
                          mt: 0,
                        },
                      },
                    }),
                  },
                },
              },
            }}
          >
            {newContent}
          </MuiMarkdown>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default Blogtest;

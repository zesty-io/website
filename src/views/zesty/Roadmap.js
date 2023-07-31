/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: roadmap 
 * Name: roadmap 
 * Model ZUID: 6-c4e2bb9798-4twn5z
 * File Created On: Tue May 31 2022 23:39:21 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * roadmap (link)
 * test (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c4e2bb9798-4twn5z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import { Card, Modal } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import CloseIcon from '@mui/icons-material/Close';
function Roadmap({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const iconColor = ['action', 'info', 'success'];

  console.log(content.github_data);

  // Hold Discussions data
  const discussions =
    content?.github_data?.data?.organization.repository.discussions.nodes;

  // Hold Categories pulled from github active discussions
  const categories = Array.from(
    new Set(
      content?.github_data?.data?.organization.repository.discussions.edges.map(
        (category) => category.node.category.name,
      ),
    ),
  );

  // Hold category icons from github categories
  const categoryIcons = Array.from(
    new Set(
      content?.github_data?.data?.organization.repository.discussions.edges.map(
        (category) => category.node.category.emojiHTML,
      ),
    ),
  );

  // Hold content for projects cards
  const projectData = content?.github_data?.data?.organization.project.columns;

  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState();

  const modalHandler = (item) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveCard(item);
    }
  };

  console.log(activeCard);
  return (
    <>
      <Container sx={{ py: 10 }}>
        {/* Roadmap Header Title */}

        <Box
          sx={{
            display: 'block',
          }}
        >
          <Typography variant="h5" component="h1">
            {content.roadmap_title}
          </Typography>

          <div
            dangerouslySetInnerHTML={{
              __html: content.roadmap_description,
            }}
          />
        </Box>

        {/* Kanban Columns */}

        <Grid sx={{ mt: 6 }} container spacing={2}>
          {projectData?.nodes.map((column, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircleIcon color={iconColor[idx]} />
                <Typography variant="h6" component="h2">
                  {column.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: 2,
                  background: theme.palette.background.level2,
                  height: 700,
                  overflowY: 'scroll',
                  mt: 2,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  scrollbarWidth: 'thin', // For Firefox
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent', // Hide the scrollbar track
                  },
                  ' ::-webkit-scrollbar-thumb': {
                    background: theme.palette.zesty.zestyLightText,
                    borderRadius: '3px',
                  },
                }}
                variant="outlined"
              >
                {column.cards.nodes.map((item) => {
                  return (
                    <>
                      {/*
                       * Hide all archived cards and redacted
                       * Or if the card don't have content or title
                       */}
                      {!item.isArchived &&
                        item.state !== 'REDACTED' &&
                        (item.note || item.content?.title) && (
                          <Card
                            onClick={() =>
                              item?.content?.title && modalHandler(item)
                            }
                            key={item.id}
                            sx={{
                              overflow: 'unset',
                              cursor: item?.content?.title && 'pointer',

                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                            }}
                          >
                            <Typography>
                              {item?.note || item?.content?.title}
                            </Typography>
                          </Card>
                        )}
                    </>
                  );
                })}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Discussion Header Title */}

        <Box
          sx={{
            mt: 6,
            display: isMobile ? 'block' : 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" component="h1">
            {content.discussion_title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Button
              sx={{ mt: isMobile ? 2 : 0 }}
              component={'a'}
              target="_blank"
              href={content.feedback_link}
              variant="contained"
              color="success"
              size="large"
            >
              Give Feedback
            </Button>

            <Button
              target="_blank"
              sx={{ mt: isMobile ? 2 : 0 }}
              component={'a'}
              href={content.open_discussion_link}
              variant="outline"
              size="large"
            >
              Open Discussion Board
            </Button>
          </Box>
        </Box>

        <div
          dangerouslySetInnerHTML={{
            __html: content.discussion_description,
          }}
        />

        {/* Discussion Cards */}

        <Grid sx={{ mt: 6 }} container spacing={2}>
          {categories.map((category, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {categoryIcons && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: categoryIcons[idx],
                    }}
                  />
                )}
                <Typography variant="h6" component="h2">
                  {category}
                </Typography>
              </Box>
              <CardContent
                sx={{
                  borderRadius: 1,
                  background: theme.palette.background.level2,
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
                variant="outlined"
              >
                {discussions.map((discussion, idx) => {
                  if (discussion.category.name === category) {
                    return (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            p: 4,
                            maxWidth: 25,
                            height: 50,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: theme.palette.common.white,
                          }}
                        >
                          <ArrowDropUpIcon
                            sx={{ color: theme.palette.common.black }}
                            fontSize="large"
                          />
                          <Typography
                            sx={{ color: theme.palette.common.black }}
                            component="p"
                          >
                            {discussion.upvoteCount}
                          </Typography>
                        </Box>
                        <Box>
                          <Link
                            underline="hover"
                            color="inherit"
                            target="_blank"
                            href={discussion.url}
                          >
                            {discussion.title}
                          </Link>
                          <Box
                            sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}
                          >
                            {discussion.labels.nodes.map((label, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  borderRadius: 50,
                                  px: 1,
                                  color: `#${label.color}`,
                                  fontSize: 10,
                                  border: `1px solid #${label.color}`,
                                  display: 'block',
                                  width: 'max-content',
                                }}
                                component="span"
                              >
                                <Link
                                  sx={{ fontWeight: 'bold' }}
                                  underline="none"
                                  color="inherit"
                                  target="_blank"
                                  href={label.url}
                                >
                                  {label.name}
                                </Link>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    );
                  }
                })}
              </CardContent>
            </Grid>
          ))}
        </Grid>

        <Modal open={isOpen} onClose={modalHandler}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              outline: 'none',
              bgcolor: '#fff',
              boxShadow: 24,
              p: 2,
              width: isMobile ? 360 : isMedium ? 500 : 700,
              borderRadius: 2,
              minHeight: 400,
              maxHeight: 800,
              overflowY: 'scroll',
              scrollbarWidth: 'thin', // For Firefox
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent', // Hide the scrollbar track
              },
              ' ::-webkit-scrollbar-thumb': {
                background: theme.palette.zesty.zestyLightText,
                borderRadius: '3px',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="h2">
                {activeCard?.content?.title}
              </Typography>

              <CloseIcon
                onClick={() => setIsOpen(false)}
                sx={{ cursor: 'pointer' }}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <MuiMarkdown
                options={{
                  overrides: {
                    a: {
                      component: Typography,
                      props: {
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    li: {
                      component: Box,
                      props: {
                        component: 'li',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    h3: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        sx: {
                          fontWeight: 'bold',
                          color: theme.palette.zesty.zestyZambezi,
                          pb: 2,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          pb: 2,
                        },
                      },
                    },
                    img: {
                      component: Box,
                      props: {
                        component: 'img',
                        sx: {
                          borderRadius: 2,
                          width: '100%',
                        },
                      },
                    },
                  },
                }}
              >
                {activeCard?.content?.bodyHTML}
              </MuiMarkdown>
            </Box>
          </Box>
        </Modal>
      </Container>
    </>
  );
}

export default Roadmap;

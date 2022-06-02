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

import React, { useEffect, useState } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';

function Roadmap({ content }) {
  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH;
  const ENDPOINT = 'https://api.github.com/graphql';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconColor = ['action', 'info', 'success'];

  const [discussions, setDiscussions] = useState();
  const [categoryIcons, setCategoryIcons] = useState();
  const [categories, setCategories] = useState();
  const [projectData, setProjectData] = useState();

  const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + TOKEN,
  };

  /* GraphQL query to request project cards and details. */

  const settings = {
    organization: `"Zesty-io"`,
    projectNumber: content.project_number,
    columns: content.max_column,
    cards: content.max_card,
  };

  const body = {
    query: `
    {
      organization(login: ${settings.organization}) {
        repository(name: "manager-ui") {
          discussions(last: 10) {
            edges {
              node {
                category {
                  name,
                  emojiHTML
                }
              }
            }
            nodes {
              category {
                name
                emojiHTML
              }
              labels(last:10) {
                nodes {
                  name
                  color
                  url
                }
              }
              upvoteCount
              title
              url
            }
          }
        }
        project(number: ${settings.projectNumber}) {
          name
          columns(last: ${settings.columns}) {
            nodes {
              name,
              cards(last: ${settings.cards} ) {
                totalCount
                nodes {
                  id,
                  note,
                  url
                }
              }
            }
          }
        }
      }
    }    
    `,
  };

  /**
   * @description  Custom function to fetch data from Github Endpoints
   * @Set  Sets returns data to specified state
   * @states [Category, ProjectData, Discussion]
   */
  const getApiData = async () => {
    const { data } = await fetch(ENDPOINT, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));

    /* Setting the state of the discussions variable to the data returned from the API call. */
    setDiscussions(data.organization.repository.discussions.nodes);

    /* A custom function that is used to remove duplicate categories from the data returned from
    the API call. */
    setCategories(
      Array.from(
        new Set(
          data.organization.repository.discussions.edges.map(
            (category) => category.node.category.name,
          ),
        ),
      ),
    );
    setCategoryIcons(
      Array.from(
        new Set(
          data.organization.repository.discussions.edges.map(
            (category) => category.node.category.emojiHTML,
          ),
        ),
      ),
    );

    /* Setting the state of the projectData variable to the data returned from the API call. */
    setProjectData(data.organization.project.columns);
  };

  console.log('projectData', projectData);
  console.log('discussion', discussions);
  console.log('categories', categories);
  console.log('icons', categoryIcons);

  /* Using the useEffect hook to call the getApiData function when the component mounts. */
  useEffect(() => {
    getApiData();
  }, []);

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

        {/* Kanban Cards */}

        {projectData ? (
          <Grid sx={{ mt: 6 }} container spacing={2}>
            {projectData?.nodes.map((board, idx) => (
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircleIcon color={iconColor[idx]} />
                  <Typography variant="h6" component="h2">
                    {board.name}
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    minHeight: 500,
                    borderRadius: 1,
                    background: theme.palette.background.level2,
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                  variant="outlined"
                >
                  {board.cards.nodes.map((item) => (
                    <Box>
                      <Link
                        underline="hover"
                        color="inherit"
                        target="_blank"
                        href={item.url}
                      >
                        {item.note}
                      </Link>
                    </Box>
                  ))}
                </CardContent>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ display: 'flex', mt: 6 }}>
            <CircularProgress color="action" />
          </Box>
        )}

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
          {categories?.map((category, idx) => (
            <Grid item xs={12} md={4}>
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
                  minHeight: 500,
                  borderRadius: 1,
                  background: theme.palette.background.level2,
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
                variant="outlined"
              >
                {discussions.map((discussion) => {
                  if (discussion.category.name === category) {
                    return (
                      <Box
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
                            {discussion.labels.nodes.map((label) => (
                              <Box
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
      </Container>
    </>
  );
}

export default Roadmap;

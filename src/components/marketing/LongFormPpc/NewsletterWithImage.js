// MUI Imports
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Container,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';

const NewsletterWithImage = ({ image, header, testimonial }) => {
  const theme = useTheme();
  const testimonials = testimonial || FillerContent.testimonialCard;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box marginBottom={3}>
              <Grid item xs={12}>
                <MuiMarkdown
                  style={{ width: '100%' }}
                  options={{
                    overrides: {
                      h2: {
                        component: Typography,
                        props: {
                          variant: 'h4',
                          component: 'h2',
                          sx: {
                            color: theme.palette.common.white,
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                          },
                        },
                      },
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                          component: 'p',
                          sx: { color: theme.palette.common.white },
                        },
                      },
                      ul: {
                        component: Typography,
                        props: {
                          component: 'ul',
                          sx: {
                            paddingLeft: 2,
                            mt: 3,
                            color: theme.palette.common.white,
                          },
                        },
                      },
                    },
                  }}
                >
                  {header}
                </MuiMarkdown>
              </Grid>
            </Box>
            <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
              <Grid container spacing={4}>
                {testimonials.map((item, i) => (
                  <Grid item xs={12} key={i}>
                    <Box
                      width={1}
                      height={1}
                      component={Card}
                      display={'flex'}
                      flexDirection={'column'}
                      boxShadow={1}
                      bgcolor={i === 1 ? 'primary.main' : 'none'}
                    >
                      <CardContent
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Box marginBottom={1}>
                          <Box display={'flex'} justifyContent={'flex-start'}>
                            {[1, 2, 3, 4, 5].map((item) => (
                              <Box
                                key={item}
                                color={theme.palette.secondary.main}
                              >
                                <svg
                                  width={18}
                                  height={18}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Typography
                          color={
                            i === 1
                              ? theme.palette.common.white
                              : 'text.secondary'
                          }
                        >
                          {item.review || item.feedback}
                        </Typography>
                      </CardContent>
                      <Box flexGrow={1} />
                      <CardActions sx={{ paddingBottom: 2 }}>
                        <ListItem
                          component="div"
                          disableGutters
                          sx={{ padding: 0 }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              src={
                                (item.reviewer_headshot?.data &&
                                  item.reviewer_headshot?.data[0]?.url) ||
                                item.avatar
                              }
                            />
                          </ListItemAvatar>
                          <ListItemText
                            sx={{ margin: 0 }}
                            primary={item.reviewer_title || item.name}
                            secondary={item.company || item.title}
                            primaryTypographyProps={{
                              color:
                                i === 1
                                  ? theme.palette.common.white
                                  : 'text.primary',
                            }}
                            secondaryTypographyProps={{
                              color:
                                i === 1
                                  ? theme.palette.common.white
                                  : 'text.secondary',
                            }}
                          />
                        </ListItem>
                      </CardActions>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={
              image || 'https://assets.maccarianagency.com/backgrounds/img4.jpg'
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsletterWithImage;

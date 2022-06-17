// MUI Imports
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Articles = ({ theme, isMobile, content, isDarkMode, FillerContent }) => {
  const articles = [...content.articles.data];

  return (
    <Box sx={{ pt: 10 }} component="section">
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 216,
              height: 2,
              background: theme.palette.zesty.zestyOrange,
            }}
          />
          <Typography
            sx={{ fontWeight: 'bold', color: theme.palette.zesty.zestyZambezi }}
            variant="h3"
            component="h2"
          >
            Industry Insights
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: 216,
              height: 2,
              background: theme.palette.zesty.zestyOrange,
            }}
          />
        </Box>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {articles.map((item) => (
            <Grid item xs={12} sm={6} lg={4}>
              <Box
                sx={{
                  backgroundImage: `url(${item.hero_image?.data[0].url})`,
                  position: 'relative',
                  height: '100%',
                  minHeight: 475,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top',
                  backgroundSize: 'cover',
                }}
              >
                <Box
                  sx={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(109, 46, 0, 0.44)',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      p: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: 1.2,
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                      }}
                      variant="h5"
                      component="h3"
                    >
                      {item.title || FillerContent.description}
                    </Typography>

                    <Typography
                      sx={{
                        lineHeight: 1.2,
                        color: theme.palette.common.white,
                        fontWeight: 'medium',
                      }}
                      variant="Subtitle1"
                      component="p"
                    >
                      {item.description || FillerContent.description}
                    </Typography>

                    <Link
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: theme.palette.zesty.zestyTealWhite,
                        fontWeight: 'bold',
                      }}
                      href={item.meta.web.uri || FillerContent.href}
                    >
                      Learn More <ArrowRightAltIcon />
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      py: 1,
                      px: 4,
                      borderTop: `2px solid ${theme.palette.common.white}`,
                      background: 'rgba(0, 0, 0, 0.35)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component="a"
                        sx={{ textDecoration: 'none' }}
                        href={
                          item.author.data[0].meta.web.uri || FillerContent.href
                        }
                      >
                        <Box
                          sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                        >
                          <Box
                            component="img"
                            sx={{ width: 40, height: 40, borderRadius: '50%' }}
                            src={
                              item.author.data[0].headshot.data[0].url ||
                              FillerContent.logos[0].url
                            }
                          />
                          <Typography
                            variant="subtitle1"
                            component="span"
                            sx={{
                              color: theme.palette.common.white,
                              fontWeight: 'bold',
                            }}
                          >
                            {item.author.data[0].name ||
                              FillerContent.authors[0].name}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: theme.palette.common.white,
                            fontWeight: 'bold',
                          }}
                        >
                          {item.date || FillerContent.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles;

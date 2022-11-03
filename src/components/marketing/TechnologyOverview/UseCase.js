// MUI Imports
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

// Local  Assets Imports
import connectionSmall from '../../../../public/assets/images/headless-cms/connection-small.svg';
import connection from '../../../../public/assets/images/headless-cms/connection.svg';
import connectionMobile from '../../../../public/assets/images/headless-cms/connection-mobile.svg';

const UseCase = ({
  theme,
  isMobile,
  // isDarkMode,
  content,
  FillerContent,
}) => {
  return (
    <Box sx={{ pb: 10, mb: -20 }} component="section">
      <Container>
        {/* Features Cards Start */}
        <Box sx={{ pb: 10 }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: theme.palette.zesty.zestyZambezi,
            }}
            variant={'h4'}
            component={'h3'}
          >
            {content.use_case_header || FillerContent.description}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: theme.palette.zesty.zestyZambezi,
              mt: 2,
            }}
            variant={'h6'}
            component={'p'}
          >
            {content.use_cases_text || FillerContent.description}
          </Typography>
        </Box>
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {content.use_cases_tiles.data.map((item, idx) => (
            <Grid item sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: useMediaQuery(theme.breakpoints.between('xs', 545))
                    ? 155
                    : 233,
                  minHeight: 190,
                  margin: 'auto',
                }}
              >
                <CardContent>
                  <Box
                    component={'img'}
                    alt="usecase icons"
                    style={{ display: 'block', margin: 'auto' }}
                    src={item.use_case_icon?.data[0].url}
                  />
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: isMobile ? 16 : 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mt: 2,
                      color: theme.palette.zesty.zestyZambezi,
                    }}
                  >
                    {item.use_case_title || FillerContent.description}
                  </Typography>
                </CardContent>
              </Card>
              <Box
                sx={{
                  pt: 2,
                  display:
                    idx === 2 || idx === 3
                      ? 'none'
                      : isMobile
                      ? 'block'
                      : 'none',
                }}
              >
                <Box
                  component="img"
                  alt=""
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '100%',
                    maxWidth: 17,
                  }}
                  src={connectionSmall.src}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Connections */}
        <Box sx={{ pt: 2 }}>
          <Box
            component="img"
            alt=""
            style={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: isMobile ? 250 : 999,
            }}
            src={isMobile ? connectionMobile.src : connection.src}
          />
        </Box>

        {/* Image One */}
        {/* <Box>
          <Box
            component="img"
            alt="use case graphic"
            style={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: isMobile ? '100%' : 824,
            }}
            src={content.use_cases_graphic.data[0].url}
          />
        </Box> */}

        {/* Headless CMS Explained Start */}
      </Container>

      <Box sx={{ background: theme.palette.zesty.zestyWhite, py: 15 }}>
        <Container>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: 'h2',
                      props: {
                        style: {
                          fontSize: isMobile ? 18 : 32,
                          color: theme.palette.zesty.zestyZambezi,
                          textAlign: 'center',
                        },
                      },
                    },
                    p: {
                      component: 'p',
                      props: {
                        style: {
                          textAlign: 'center',
                          color: theme.palette.zesty.zestyZambezi,
                          mt: 4,
                          fontSize: isMobile ? 16 : 20,
                        },
                      },
                    },
                  },
                }}
              >
                {content.headless_cms_explained || FillerContent.description}
              </MuiMarkdown>
            </Box>

            {/* Image Two */}
            <Box sx={{ mt: 4 }}>
              <Box
                component="img"
                alt="headless cms explained"
                style={{
                  display: 'block',
                  margin: 'auto',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : 824,
                }}
                src={
                  content.headless_cms_explained_image.data[0].url ||
                  FillerContent.photos[0].src
                }
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UseCase;

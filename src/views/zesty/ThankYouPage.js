/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Thank You page 
 * Name: thank_you_page 
 * Model ZUID: 6-cef69cdc8d-06vzcd
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title_h1 (text)
 * description (textarea)
 * image (images)
 * related_articles (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-cef69cdc8d-06vzcd
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import FillerContent from 'components/globals/FillerContent';
import { alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import {
  useMediaQuery,
  Container,
  Box,
  Typography,
  Grid,
  Link,
  Button,
} from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ThankYouPage({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isMobile,
    isDarkMode,
    content,
  };
  return (
    <>
      <Box component="section" sx={{ py: 10 }}>
        <SimpleHeroWithCta
          title={content.title_h1 || FillerContent.header}
          description={content.description || FillerContent.description}
          primaryCta={content.cta_button_text || FillerContent.cta}
          primaryCtaButtonLink={content.cta_button_link || FillerContent.href}
        />
        <Articles {...pageData} />
      </Box>

      {/* End of Zesty.io output example */}
    </>
  );
}

const SimpleHeroWithCta = ({
  title,
  subtitle,
  description,
  primaryCta,
  primaryCtaButtonLink,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      style={{ marginTop: isMobile ? '0rem' : '1rem', marginBottom: '1rem' }}
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '20%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box paddingTop={isMobile ? 0 : 1} position={'relative'} zIndex={2}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          marginBottom={4}
        >
          <Typography
            variant="p"
            component={'h1'}
            color="text.primary"
            align={'center'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontSize: isMobile ? '35px' : '48px',
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="p"
            component="h2"
            color="text.secondary"
            sx={{
              fontSize: '20px',
              fontWeight: 400,
            }}
            align={'center'}
          >
            {description}
          </Typography>
          {router.asPath.includes('/ppc/thank-you/') ? (
            <></>
          ) : (
            <Button
              component="a"
              href={primaryCtaButtonLink}
              sx={{ mt: 2 }}
              color="secondary"
              variant="contained"
            >
              {primaryCta}
            </Button>
          )}
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Container>
  );
};

const Articles = ({ content, theme }) => {
  const articles = [...content.related_articles.data];

  return (
    <Box sx={{ pt: 5 }} component="section">
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
                      {item.title}
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
                      {item.description}
                    </Typography>

                    <Link
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: theme.palette.zesty.zestyTealWhite,
                        fontWeight: 'bold',
                      }}
                      href={item.meta.web?.uri || FillerContent.href}
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
                          item.author?.data[0].meta.web.uri ||
                          FillerContent.href
                        }
                      >
                        <Box
                          sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                        >
                          <Box
                            component="img"
                            sx={{ width: 40, height: 40, borderRadius: '50%' }}
                            src={
                              item.author?.data[0].headshot.data[0].url ||
                              FillerContent.photos[0].src
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
                            {item.author?.data[0].name ||
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
                          {item.date}
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

export default ThankYouPage;

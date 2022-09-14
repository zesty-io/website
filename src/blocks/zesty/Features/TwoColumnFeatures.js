/**
 * MUI Imports
 */
import {
  Box,
  Card,
  Typography,
  useMediaQuery,
  Grid,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'mui-markdown';
/**
 * Helpers Imports
 */
import * as helper from 'utils';
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Import
 */
import ZestyImage from 'blocks/zesty/Image/ZestyImage';
import Container from 'blocks/container/Container';
/**
 *
 * @param {array} data - array items that is needed to loop through cards
 * @param {string} features_header - string header text
 * @param {number} header_size - header size
 * @param {string} textHighlight - text you want to highlight on header
 * @param {string} cta_text - Call to action text
 * @param {string} cta_url - call to action url
 */

const TwoColumnFeatures = ({
  data,
  features_header,
  header_size = 48,
  textHighlight = '',
  cta_text = '',
  cta_url = '',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDarkMode = theme.palette.mode === 'dark';

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(features_header);

  if (!isRichText) {
    features_header = `<h2>${features_header || FillerContent.header}</h2>`;
  }
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
      }}
    >
      <Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            py: 10,
            px: 4,
            background: theme.palette.zesty.zestyBackgroundBlue,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
              lg={3}
              xl={4}
            >
              <Box sx={{ pl: 5 }}>
                <MuiMarkdown
                  overrides={{
                    h2: {
                      component: Typography,
                      props: {
                        variant: 'p',
                        component: 'h2',
                        sx: {
                          textAlign: isLarge ? 'center' : 'left',
                          fontSize: isMobile ? 24 : header_size,
                          color: isDarkMode
                            ? theme.palette.zesty.zestyDarkBlue
                            : theme.palette.zesty.zestyDarkText,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h6',
                        component: 'p',
                        sx: {
                          textAlign: isLarge ? 'center' : 'left',
                          color: isDarkMode
                            ? theme.palette.zesty.zestyDarkBlue
                            : theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    span: {
                      component: Typography,
                      props: {
                        variant: 'p',
                        component: 'span',
                        sx: {
                          textAlign: isLarge ? 'center' : 'left',
                          fontSize: 'inherit',
                          color: theme.palette.zesty.zestyOrange,
                        },
                      },
                    },
                  }}
                >
                  {features_header.replace(
                    textHighlight,
                    `<span>${textHighlight}</span>`,
                  )}
                </MuiMarkdown>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isLarge ? 'center' : 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  {cta_text && (
                    <Button
                      href={cta_url || FillerContent.href}
                      target="_blank"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{
                        mt: 2,
                        width: '100%',
                        maxWidth: 250,
                      }}
                    >
                      {cta_text || FillerContent.cta}
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={9} xl={8}>
              <Box
                sx={{
                  mt: isLarge ? 5 : 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 5,
                  justifyContent: 'center',
                }}
              >
                {data.map((e, i) => {
                  return (
                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: 355,
                        minHeight: 275,
                        padding: '3rem 2rem',
                        background: theme.palette.common.white,
                        py: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ minHeight: 200, height: '100%' }}>
                        <ZestyImage
                          loading="lazy"
                          width={67}
                          height={60}
                          src={e?.icon_image}
                          alt={e.feature_name}
                        />
                        <Typography
                          component={'p'}
                          variant={'p'}
                          sx={{
                            py: 2,
                            color: theme.palette.zesty.zestyOrange,
                            textAlign: 'left',
                            fontSize: '20px',
                          }}
                        >
                          {e?.feature_name || FillerContent.header}
                        </Typography>
                        <Typography
                          component={'h2'}
                          variant={'p'}
                          sx={{
                            color: isDarkMode
                              ? theme.palette.zesty.zestyDarkBlue
                              : theme.palette.secondary.darkCharcoal,
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: 'light',
                          }}
                        >
                          {e?.content || FillerContent.description}
                        </Typography>
                      </Box>
                    </Card>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TwoColumnFeatures;

// MUI Imports
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FillerContent from 'components/globals/FillerContent';
import ZestyImage from 'blocks/Image/ZestyImage';

const TechStack = ({
  headerColor,
  headerFontWeight = 500,
  text_content,
  logos,
  cta_text,
  cta_link,
  textHighlight,
  background,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(text_content);

  if (!isRichText) {
    text_content = `<h2>${text_content}</h2>`;
  }

  return (
    <Box component="section" sx={{ px: 4 }}>
      <Box
        sx={{
          background: background
            ? background
            : theme.palette.zesty.zestySeaShell,
          borderRadius: 10,
          py: 15,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h2',
                        sx: {
                          fontWeight: headerFontWeight,
                          color: headerColor
                            ? headerColor
                            : theme.palette.zesty.zestyOrange,
                        },
                      },
                    },
                    h3: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h3',
                        sx: {
                          mt: 2,
                          fontWeight: 'bold',
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    h4: {
                      component: Typography,
                      props: {
                        variant: 'h3',
                        component: 'h2',
                        sx: {
                          fontWeight: 700,
                          color: theme.palette.zesty.zestyOrange,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h6',
                        component: 'p',
                        sx: {
                          mt: 2,
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                  },
                }}
              >
                {text_content.replace(
                  textHighlight,
                  `<span>${textHighlight}</span>`,
                )}
              </MuiMarkdown>

              <Box sx={{ width: '100%', mt: 4 }}>
                {cta_link && (
                  <Button
                    component={'a'}
                    target="_blank"
                    fullWidth={isMobile}
                    variant="contained"
                    href={cta_link || FillerContent.href}
                    sx={{
                      background: theme.palette.zesty.zestyOrange,
                      color: theme.palette.common.white,
                      px: 6,
                    }}
                    size="large"
                  >
                    {cta_text || FillerContent.cta}
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
            >
              <Box
                sx={{
                  mt: isMobile ? 4 : 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    height: 88,
                    width: 230,
                    display: isMobile ? 'none' : 'block',
                  }}
                />
                {logos?.map((item, idx) => {
                  return (
                    <>
                      <ZestyImage
                        key={idx}
                        width={88}
                        height={88}
                        style={{ height: 88, width: 'auto' }}
                        alt="integration logo's"
                        src={item.logo?.data[0].url}
                      />
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TechStack;

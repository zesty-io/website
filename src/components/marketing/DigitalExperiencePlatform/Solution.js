/**
 * MUI Imports
 */
import { Box, Container, Grid, Typography, Card, Link } from '@mui/material';
import ZoomMui from '@mui/material/Zoom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MuiMarkdown from 'markdown-to-jsx';

/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Helpers Imports
 */
import ZestyImage from 'blocks/Image/ZestyImage';

const Solution = ({ content, theme, isMobile, FillerContent }) => {
  const [active, setactive] = useState(0);
  const headerRegex = /\>(.*?)\</;

  const cardData = [
    {
      id: 0,
      name: 'personalize',
      icon:
        content.solutions_icon_1?.data[0]?.url || FillerContent.logos[0].url,
      text: content.solution_1_description || FillerContent.description,
      subText:
        content.solution_1_description?.match(headerRegex)[1] ||
        FillerContent.description,
      img:
        content.solution_1_graphic.data[0]?.url || FillerContent.logos[0].url,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 1,
      name: 'ecom',
      icon:
        content.solutions_icon_2?.data[0]?.url || FillerContent.logos[0].url,
      text: content.solution_2_description || FillerContent.description,
      subText:
        content.solution_2_description?.match(headerRegex)[1] ||
        FillerContent.description,
      img:
        content.solution_2_graphic?.data[0]?.url || FillerContent.logos[0].url,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 2,
      name: 'distribution',
      icon:
        content.solutions_icon_3?.data[0]?.url || FillerContent.logos[0].url,
      text: content.solution_3_description || FillerContent.description,
      subText:
        content.solution_3_description?.match(headerRegex)[1] ||
        FillerContent.description,
      img:
        content.solution_3_graphic.data[0]?.url || FillerContent.logos[0].url,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 3,
      name: 'innovate',
      icon: content.solutions_icon_4.data[0]?.url || FillerContent.logos[0].url,
      text: content.solution_4_description || FillerContent.description,
      subText:
        content.solution_4_description?.match(headerRegex)[1] ||
        FillerContent.description,
      img:
        content.solution_4_graphic.data[0]?.url || FillerContent.logos[0].url,
      ctaName: 'Learn More',
      href: '',
    },
  ];

  const imgWidth = isMobile ? 300 : 500;
  return (
    <Box paddingY={1}>
      <Container>
        <Box paddingBottom={isMobile ? 10 : 10} sx={{}}>
          <MuiMarkdown
            options={{
              overrides: {
                span: {
                  component: Typography,
                  props: {
                    component: 'span',
                    sx: {
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      color: theme.palette.zesty.zestyOrange,
                    },
                  },
                },
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      mt: 5,
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    },
                  },
                },
              },
            }}
          >
            {content.solutions_h2 || FillerContent.description}
          </MuiMarkdown>
        </Box>

        <Box>
          <Grid container spacing={5}>
            <Grid item sm={12} md={6}>
              <Box>
                <Box>
                  <ZoomMui
                    in={active === 0}
                    style={{ display: active === 0 ? 'block' : 'none' }}
                  >
                    <Box
                      src={
                        content[`solution_1_graphic`].data[0].url ||
                        FillerContent.logos[0].url
                      }
                      alt=""
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                    />
                  </ZoomMui>
                  <ZoomMui
                    in={active === 1}
                    style={{ display: active === 1 ? 'block' : 'none' }}
                  >
                    <Box
                      width={imgWidth}
                      src={
                        content[`solution_2_graphic`].data[0].url ||
                        FillerContent.logos[0].url
                      }
                      alt=""
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                    />
                  </ZoomMui>
                  <ZoomMui
                    in={active === 2}
                    style={{ display: active === 2 ? 'block' : 'none' }}
                  >
                    <Box
                      width={imgWidth}
                      src={
                        content[`solution_3_graphic`].data[0].url ||
                        FillerContent.logos[0].url
                      }
                      alt=""
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                    />
                  </ZoomMui>
                  <ZoomMui
                    in={active === 3}
                    style={{ display: active === 3 ? 'block' : 'none' }}
                  >
                    <Box
                      width={imgWidth}
                      src={
                        content[`solution_4_graphic`].data[0].url ||
                        FillerContent.logos[0].url
                      }
                      alt=""
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                    />
                  </ZoomMui>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={12} md={6}>
              <Box>
                <Box>
                  {cardData.map((e, i) => {
                    return i === active ? (
                      <CustomCard key={i} data={e} theme={theme} />
                    ) : (
                      <Box
                        key={i}
                        onClick={() => setactive(i)}
                        paddingY={2}
                        paddingLeft={4}
                        sx={{
                          borderBottom: `1px solid ${theme.palette.secondary.whiteSmoke}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          cursor: 'pointer',
                        }}
                      >
                        <ZestyImage
                          src={e.icon}
                          alt=""
                          width={50}
                          height={50}
                          style={{ filter: 'grayscale(100%)' }}
                        />
                        <Typography
                          component={'p'}
                          variant={'p'}
                          sx={{
                            color: theme.palette.secondary.darkCharcoal,
                            fontWeight: 'light',
                            textAlign: 'left',
                          }}
                          dangerouslySetInnerHTML={{
                            __html: e.subText,
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ py: 10 }}>
          <Grid item xs={12} md={9}>
            <Box sx={{ width: '100%', maxWidth: 1000, margin: 'auto' }}>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h4',
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyZambezi,
                        textAlign: 'center',
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        color: theme.palette.zesty.zestyZambezi,
                        textAlign: 'center',
                        mt: 2,
                      },
                    },
                  },
                }}
              >
                {content.about_zesty_dxp || FillerContent.rich_text}
              </MuiMarkdown>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const CustomCard = ({ data, theme }) => {
  return (
    <Card
      sx={{
        marginTop: '1rem',
        padding: '3rem 1rem',
        display: 'flex',
        alignItems: 'flex-start',
        borderTop: `6px solid ${theme.palette.zesty.zestyTealWhite}`,
      }}
    >
      <Box paddingX={2} paddingTop={2}>
        <img src={data.icon} alt="" width={50} />
      </Box>
      <Box>
        <MuiMarkdown
          options={{
            overrides: {
              h3: {
                component: Typography,
                props: {
                  component: 'h3',
                  variant: 'h6',
                  sx: {
                    color: theme.palette.zesty.zestyOrange,
                    fontWeight: 'bold',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'body1',
                },
              },
            },
          }}
        >
          {data.text}
        </MuiMarkdown>

        {data.href && (
          <Link
            href={data.href}
            underline="always"
            paddingTop={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontWeight: 'bold',
            }}
          >
            {data.ctaName} <ArrowRightAltIcon />
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default Solution;

/**
 * MUI Imports
 */

import { Box, Container, Typography, Grid } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'mui-markdown';

const Middle = ({ content, theme, isMobile, isTablet, FillerContent }) => {
  const FillerImage =
    content.middle_solution_1_graphic?.data[0]?.url ||
    FillerContent.dashboard_image;
  const bracketImg =
    content.dxp_background_images?.data[0]?.url ||
    FillerContent.dashboard_image;
  const arr = [
    {
      text: content.middle_solution_1_description,
      img:
        content.middle_solution_1_graphic &&
        content.middle_solution_1_graphic.data[0].url,
      strToChange: 'Personalized experience',
      reverse: false,
      theme: theme,
    },
    {
      text: content.middle_solution_2_description,
      img:
        (content.middle_solution_2_graphic &&
          content.middle_solution_2_graphic?.data[0]?.url) ||
        FillerImage,
      strToChange: 'Commerce experience',
      reverse: true,
      theme: theme,
    },
    {
      text: content.middle_solution_3_description,
      img:
        (content.middle_solution_3_graphic &&
          content.middle_solution_3_graphic.data[0]?.url) ||
        FillerImage,
      strToChange: 'Content Experience',
      reverse: false,
      theme: theme,
    },
    {
      text: content.middle_solution_4_description,
      img:
        (content.middle_solution_4_graphic &&
          content.middle_solution_4_graphic.data[0]?.url) ||
        FillerImage,
      strToChange: 'Enterprise Experience',
      reverse: true,
      theme: theme,
    },
  ];
  return (
    <Box
      paddingY={isMobile ? 2 : 10}
      sx={{
        backgroundColor: theme.palette.zesty.zestyDarkBlue,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          zIndex: '100',
          position: 'absolute',
          left: '15%',
          top: 0,
          display: isMobile ? 'flex' : 'none',
          width: 'calc(50vw - 15%)',
          height: '50px',
          position: 'absolute',
          borderRight: `1px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRadius: '0 0 0px 0',
        }}
      />
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: '5%',
          top: '50px',
          display: isMobile ? 'flex' : 'none',
          width: 'calc(50vw - 5%)',
          height: '100%',
          position: 'absolute',
          border: `1px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRight: 0,
          borderRadius: '50px 0 0 0',
        }}
      />
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          top: 0,
          display: isMobile ? 'none' : 'flex',
          transform: 'rotate(180deg)',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Box
        sx={{
          background: theme.palette.zesty.zestyBackgroundBlue,
          height: isTablet ? 0 : 1600,
          display: isMobile ? 'none' : 'block',
          width: '2px',
          position: 'absolute',
          left: isTablet ? '5%' : '50%',
          bottom: '0',
        }}
      />
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 8 : 10}
            paddingBottom={isMobile ? 0 : 10}
            sx={{
              zIndex: 1,
              color: theme.palette.common.white,
              textAlign: 'center',
              fontSize: isMobile ? '28px' : '48px',
              position: 'relative',
              zIndex: '1000',
              textTransform: 'capitalize',
            }}
          >
            {content.middle_solutions_header || FillerContent.header}
          </Typography>
        </Box>
        {arr?.map((e, i) => {
          return (
            <RevealComponent
              isMobile={isMobile}
              index={i}
              text={e.text}
              img={e.img}
              reverse={e.reverse}
              theme={e.theme}
              isTablet={isTablet}
            />
          );
        })}
      </Container>
    </Box>
  );
};

const RevealComponent = ({
  text = '',
  img = FillerContent.dashboard_image || FillerContent.logos[0].url,
  reverse = false,
  theme,
  index,
  isMobile,
  isTablet,
}) => {
  return (
    <Box
      paddingY={1}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
        position: 'relative',
        zIndex: '1000',
        gap: isMobile ? '4rem' : '0',
      }}
    >
      <Grid container spacing={4}>
        <Grid
          sx={{ display: 'flex' }}
          order={{ md: index === 1 || index === 3 ? 2 : 1 }}
          item
          sm={12}
          md={6}
        >
          {index !== 3 && (
            <Box
              sx={{
                background: theme.palette.zesty.zestyBackgroundBlue,
                height: isMobile ? '15px' : '20px',
                width: isMobile ? '15px' : '20px',
                borderRadius: '50%',
                position: 'absolute',
                left: isMobile ? '1.8%' : '50.1%',
                bottom: isMobile ? '45%' : '0',
                transform: 'translate(-50%,-50%)',
                display: isMobile ? '' : isTablet ? 'none' : '',
              }}
            />
          )}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            data-aos="zoom-out-left"
          >
            <Box>
              <MuiMarkdown
                overrides={{
                  h3: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h3',
                      sx: {
                        background: theme.palette.zesty.zestyOrangeLinear,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        ml: isMobile ? 5 : 0,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'p',
                      sx: {
                        ml: isMobile ? 5 : 0,
                        color: theme.palette.common.white,
                        lineHeight: 1,
                        marginTop: 2,
                        textAlign: 'left',
                        fontSize: isMobile ? 25 : 32,
                      },
                    },
                  },
                }}
              >
                {text}
              </MuiMarkdown>

              {/* <Link
            href="#"
            underline="always"
            paddingLeft={isMobile ? 2 : 0}
            sx={{
              position: 'absolute',
              top: isMobile ? '11rem' : '22rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontWeight: 'bold',
            }}
          >
            Learn More <ArrowRightAltIcon />
          </Link> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          order={{ md: index === 1 || index === 3 ? 1 : 2 }}
          item
          sm={12}
          md={6}
        >
          <Box data-aos="zoom-out-right">
            <Box
              component="img"
              src={img}
              sx={{
                maxWidth: isMobile ? 350 : 700,
                width: '100%',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Middle;

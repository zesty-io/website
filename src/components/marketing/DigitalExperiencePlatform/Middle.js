/**
 * MUI Imports
 */

import { Box, Container, Link, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

const Middle = ({ content, theme, isMobile }) => {
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
          borderRight: `2px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRadius: '0 0 45px 0',
        }}
      ></Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: '5%',
          top: '50px',
          display: isMobile ? 'flex' : 'none',
          width: 'calc(50vw - 15%)',
          height: '100%',
          position: 'absolute',
          border: `1px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRight: 0,
          borderRadius: '50px 0 0 0',
        }}
      ></Box>
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
          zIndex: '10',
          background: theme.palette.zesty.zestyBackgroundBlue,
          height: isMobile ? '0' : '260vh',
          width: '2px',
          position: 'absolute',
          left: isMobile ? '5%' : '50%',
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
              color: theme.palette.common.white,
              textAlign: 'center',
              fontSize: isMobile ? '28px' : '48px',
              position: 'relative',
              zIndex: '1000',
              textTransform: 'capitalize',
            }}
          >
            {content.middle_solutions_header}
          </Typography>
        </Box>
        {arr?.map((e, i) => {
          return (
            <RevealComponent
              isMobile={isMobile}
              data={e}
              index={i}
              text={e.text}
              img={e.img}
              strToChange={e.strToChange}
              reverse={e.reverse}
              theme={e.theme}
            />
          );
        })}
      </Container>
    </Box>
  );
};

const RevealComponent = ({
  text = '',
  img = FillerContent.dashboard_image,
  strToChange = '',
  reverse = false,
  theme,
  strColor = theme.palette.zesty.zestyOrange,
  data,
  index,
  isMobile,
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
      {index !== 3 && (
        <Box
          sx={{
            zIndex: '10',
            background: theme.palette.zesty.zestyBackgroundBlue,
            height: isMobile ? '15px' : '20px',
            width: isMobile ? '15px' : '20px',
            borderRadius: '50%',
            position: 'absolute',
            left: isMobile ? '1.8%' : '50.1%',
            bottom: isMobile ? '45%' : '0',
            transform: 'translate(-50%,-50%)',
          }}
        />
      )}

      <div data-aos="zoom-out-left">
        <Box sx={{ position: 'relative' }}>
          <Typography
            component={'h3'}
            variant={'p'}
            paddingLeft={isMobile ? 2 : 0}
            paddingTop={isMobile ? 2 : 10}
            paddingBottom={isMobile ? 6 : 10}
            sx={{
              color: theme.palette.common.white,
              textAlign: 'left',
              fontSize: isMobile ? '1rem' : '1.5rem',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(text, strToChange, strColor),
            }}
          />
          <Link
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
          </Link>
        </Box>
      </div>
      <div data-aos="zoom-out-right">
        <img src={img} width={isMobile ? 350 : 700} />
      </div>
    </Box>
  );
};

export default Middle;

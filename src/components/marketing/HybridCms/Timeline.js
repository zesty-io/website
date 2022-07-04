/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Button,
  Card,
  cardClasses,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/**
 * Static Imports
 */
import chevron_left from '../../../../public/assets/images/headless-cms/chevron-left.svg';
import chevron_right from '../../../../public/assets/images/headless-cms/chevron-right.svg';
import curve from '../../../../public/assets/images/headless-cms/curve.svg';
import curve_dark from '../../../../public/assets/images/headless-cms/curve-dark.svg';
import curve_mobile from '../../../../public/assets/images/headless-cms/curve-mobile.svg';
import s_curve from '../../../../public/assets/images/headless-cms/sCurve.svg';

/**
 * Helper Imports
 */

import * as helper from 'utils';

const Timeline = ({ content, theme, isMobile, isDarkMode, FillerContent }) => {
  const bgTriangleLeft = chevron_left.src;
  const bgTriangleRight = chevron_right.src;

  const arr = [
    {
      text: content.hybrid_cms_feature_1 || FillerContent.header,
      img:
        content.hybrid_cms_feature_1_image.data[0].url ||
        FillerContent.photos[0].src,
      strToChange: 'Multi-Channel Content Management',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_2 || FillerContent.header,
      img:
        content.hybrid_cms_feature_2_image.data[0].url ||
        FillerContent.photos[0].src,
      strToChange: 'Visual Publishing',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_3 || FillerContent.header,
      img:
        content.hybrid_cms_feature_3_image.data[0].url ||
        FillerContent.photos[0].url,
      strToChange: 'LowCode Interface',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_4 || FillerContent.header,
      img:
        content.hybrid_cms_feature_4_image.data[0].url ||
        FillerContent.photos[0].src,
      strToChange: 'Easy Tech Stack Integration',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_5 || FillerContent.header,
      img:
        content.hybrid_cms_feature_5_image.data[0].url ||
        FillerContent.photos[0].src,
      strToChange: 'Organized Workflows &amp; Team Management',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_6,
      img:
        content.hybrid_cms_feature_6_image &&
        content.hybrid_cms_feature_6_image.data[0].url,
      strToChange: 'Strong Security',
      reverse: false,
      theme: theme,
    },
  ];
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        mt: 14,
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden',
      }}
      component="section"
    >
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={bgTriangleRight}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={bgTriangleLeft}
      />
      <Container>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            ml: isMobile ? 4.9 : 4.2,
          }}
          component="img"
          src={
            isMobile
              ? curve_mobile.src
              : isDarkMode
              ? curve_dark.src
              : curve.src
          }
        />
        <Box sx={{ color: 'white' }}>
          <Box sx={{ position: 'relative' }} component="ul">
            {/* Content One */}
            <Box
              sx={{
                py: isMobile ? 3 : 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 400,
                listStyleType: 'none',
                borderTopLeftRadius: 155,
                position: 'relative',
              }}
              component="li"
            >
              <Box sx={{ ml: 4, mt: isMobile ? 0 : 15 }}>
                <Typography
                  paddingTop={isMobile ? 2 : 10}
                  paddingBottom={isMobile ? 0 : 10}
                  paddingRight={isMobile ? 0 : 40}
                  paddingLeft={isMobile ? 0 : 6}
                  sx={{
                    color: theme.palette.common.white,
                    textAlign: isMobile ? 'center' : 'left',
                    fontSize: isMobile ? '1rem' : '1.5rem',
                    position: 'relative',
                    zIndex: '1000',
                    textTransform: 'capitalize',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.hybrid_cms_features_header ||
                        FillerContent.header,
                      'Hybrid CMS Features',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                ></Typography>
              </Box>
            </Box>
            {arr.map((e, i) => {
              return (
                <RevealCompo
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;

const RevealCompo = ({
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
      sx={{
        py: isMobile ? 3 : 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 400,
        listStyleType: 'none',
        borderLeft: `2px solid ${
          isMobile ? theme.palette.zesty.zestyBlue2 : theme.palette.common.white
        }`,
        position: 'relative',
        '&:before': {
          content: '""',
          width: 15,
          height: 15,
          background: theme.palette.zesty.whiteGray,
          border: `2px solid ${
            isMobile
              ? theme.palette.zesty.zestyBlue2
              : theme.palette.common.white
          }`,
          zIndex: 2,
          borderRadius: '50%',
          position: 'absolute',
          left: -8,
          top: isMobile ? '32%' : '22%',
        },
      }}
      component="li"
    >
      <Grid container spacing={2}>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          item
          sm={12}
          md={6}
        >
          <Box sx={{ ml: 4 }}>
            <Typography
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
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxWidth: isMobile ? '100%' : 501,
              height: isMobile ? '100%' : 356,
            }}
            src={img}
            component="img"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

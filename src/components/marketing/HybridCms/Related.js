/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';

/**
 * Static Imports
 * */
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bottomBg from '../../../../public/assets/images/dxp_bottom_bg.svg';

/**
 * Helper Imports
 */

import * as helper from 'utils';

function makeDate(date) {
  var d = new Date(date);
  var options = {
    year: 'numeric',
    month: 'long',
  };
  var n = d.toLocaleDateString('en-US', options);

  var replace = n.replace(new RegExp(',', 'g'), ' ');
  return replace;
}

const Related = ({ content, theme, isMobile, FillerContent }) => {
  const arr = content?.related_content_articles?.data;
  const bgImage = bottomBg.src;
  return (
    <Box paddingBottom={10} sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '10',
          right: 0,
          bottom: 0,
          width: isMobile ? '200px' : '400px',
        }}
      >
        <img
          src={bgImage}
          alt="image"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: isMobile ? '1rem' : '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '15rem',
              height: '1px',
              background: theme.palette.zesty.zestyOrange,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: isMobile ? '1.2rem' : '1.6rem',
              color: theme.palette.zesty.zestyZambezi,
              textAlign: isMobile ? 'center' : 'center',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.related_content_header || FillerContent.header,
                'Hybrid CMS',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
          <Box
            sx={{
              width: '15rem',
              height: '1px',
              background: theme.palette.zesty.zestyOrange,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0 1rem',
          }}
        >
          {arr.map((e) => {
            return (
              <ArticleCard
                FillerContent={FillerContent}
                data={e}
                isMobile={isMobile}
                theme={theme}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ padding: '.6rem 4rem' }}
          >
            {content.related_content_cta_button || FillerContent.description}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Related;

const ArticleCard = ({ data, isMobile, theme, FillerContent }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: '50',
        backgroundImage: `url("${
          data.hero_image.data[0].url || FillerContent.photos[0].src
        }")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '30rem',
        width: '22rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
      }}
    >
      <Box
        paddingBottom={4}
        paddingX={2}
        sx={{
          borderBottom: `1px solid ${theme.palette.common.white}`,
          display: 'flex',
          background: ' rgba(0, 0, 0, 0.2)',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '1.2rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'left' : 'left',
              fontWeight: 'bold',
            }}
          >
            {data.title || FillerContent.header}
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'left' : 'left',
              height: '6rem',
              // fontWeight: 'medium',
            }}
          >
            {data.description || FillerContent.description}
          </Typography>
          <Link
            href="#"
            underline="always"
            sx={{
              top: isMobile ? '10rem' : '10rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontSize: '.8rem',
              fontWeight: 'bold',
            }}
          >
            Learn More <ArrowRightAltIcon />
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          background: ' rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
        }}
        paddingX={2}
        paddingY={1}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', flex: 1, gap: '.5rem' }}
        >
          <Box
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={
                data.author.data[0].headshot.data[0].url ||
                FillerContent.photos[0].src
              }
              alt="author"
              height={50}
              width={50}
            />
          </Box>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'center' : 'left',
              fontWeight: 500,
            }}
          >
            {data.author.data[0].name || FillerContent.authors[0].name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'center' : 'left',
              fontWeight: 500,
            }}
          >
            {makeDate(data.date)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';

const reconstructImages = (images = []) => {
  return [
    {
      group: [
        {
          cover: (images && images[0]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[0]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[1]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[1]?.url) || FillerContent.dashboard_image,
        },
      ],
    },
    {
      group: [
        {
          cover: (images && images[2]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[2]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[3]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[3]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[4]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[4]?.url) || FillerContent.dashboard_image,
        },
      ],
    },
    {
      group: [
        {
          cover: (images && images[5]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[5]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[6]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[6]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[2]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[2]?.url) || FillerContent.dashboard_image,
        },
        {
          cover: (images && images[1]?.url) || FillerContent.dashboard_image,
          coverDark:
            (images && images[1]?.url) || FillerContent.dashboard_image,
        },
      ],
    },
  ];
};

const FullScreenHeroWithPromoImagesAndTypedText = ({
  title,
  description,
  h1_title,
  cta_left_text='',
  cta_right_text,
  cta_right_url='',
  images,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  // split the title from api by br tag for styling purposes
  const newTitle = title.split('<br/>');
  const title0 = newTitle && newTitle[0];
  const title1 = newTitle && newTitle[1];
  const title2 = newTitle && newTitle[2];

  // images to be map
  const imageList = reconstructImages(images);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0,
          )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
          backgroundRepeat: 'repeat-x',
          position: 'relative',
        }}
      >
        <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
          <Container>
            <Box maxWidth={{ xs: 1, sm: '50%' }}>
              <Typography
                component={'h1'}
                variant="p"
                color={
                  isDarkMode
                    ? theme.palette.zesty.zestyWhite
                    : theme.palette.zesty.zestyGrey
                }
                sx={{ fontWeight: 400, fontSize: '20px' }}
                gutterBottom
              >
                {h1_title}
              </Typography>
              <Box display={'flex'} gap={2} sx={{ margin: 0 }}>
                <Typography
                  component={'h3'}
                  variant="p"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: isMobile ? '45px' : '60px',
                  }}
                >
                  {title0}
                </Typography>
                <Typography
                  component={'h3'}
                  variant="p"
                  color={theme.palette.zesty.zestyOrange}
                  gutterBottom
                  sx={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: isMobile ? '45px' : '60px',
                  }}
                >
                  {title1}
                </Typography>
              </Box>

              <Typography
                component={'h3'}
                variant="p"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  lineHeight: '3.5rem',
                  fontSize: isMobile ? '45px' : '60px',
                }}
              >
                {title2}
              </Typography>
              <Typography
                component={'h2'}
                variant="p"
                color="text.secondary"
                sx={{ fontWeight: 400, fontSize: '20px' }}
              >
                {description || FillerContent.description}
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginTop={4}
              >
                <TryFreeButton
                  component={'a'}
                  variant="contained"
                  size="large"
                  fullWidth={isMd ? false : true}
                  text={cta_left_text || 'Try Free'}
                />
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  width={{ xs: '100%', md: 'auto', sm:'auto' }}
                >
                  <Button
                    component={'a'}
                    href={cta_right_url || FillerContent.href}
                    variant="text"
                    color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                  >
                    {cta_right_text || 'Contact Us'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
          <Box
            sx={{
              transform: 'rotate(-20deg)',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Box
              display={'flex'}
              width={'50rem'}
              left={'50%'}
              top={0}
              position={'absolute'}
              sx={{ transform: 'translate3d(20%, -50%, 0)' }}
            >
              {imageList?.map((item, i) => (
                <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                  {item.group.map((g, j) => (
                    <Box
                      key={j}
                      padding={1}
                      bgcolor={'background.paper'}
                      borderRadius={2}
                      boxShadow={3}
                      marginTop={2}
                    >
                      <Box
                        component={'img'}
                        src={
                          theme.palette.mode === 'dark' ? g.coverDark : g.cover
                        }
                        height={1}
                        width={1}
                        maxWidth={320}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
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
      </Box>
    </Box>
  );
};

export default FullScreenHeroWithPromoImagesAndTypedText;

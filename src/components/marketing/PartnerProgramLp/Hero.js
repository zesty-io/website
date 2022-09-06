import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';

const Hero = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <MuiMarkdown
          overrides={{
            span: {
              component: Typography,
              props: {
                component: 'span',
                sx: {
                  fontSize: 'inherit',
                  color: theme.palette.zesty.zestyOrange,
                  fontWeight: 'inherit',
                  textDecoration: 'underline',
                },
              },
            },
            h1: {
              component: Typography,
              props: {
                variant: 'h2',
                component: 'h1',
                sx: {
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 'bold',
                },
              },
            },
            p: {
              component: Typography,
              props: {
                variant: 'h6',
                component: 'p',
                sx: {
                  color: theme.palette.zesty.zestyZambezi,
                  lineHeight: 1.2,
                  mt: 2,
                },
              },
            },
          }}
        >
          {content.header_text || FillerContent.description}
        </MuiMarkdown>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
            <TryFreeButton
              text={content.button_text || FillerContent.cta}
              fullWidth={isMobile}
              variant="contained"
              size="large"
            />
            <Button
              href={
                content.watch_demo_cta_button_link?.data[0].meta.web.uri ||
                FillerContent.href
              }
              component="a"
              fullWidth={isMobile}
              endIcon={<ArrowRightAltIcon />}
              sx={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: theme.palette.zesty.zestyOrange,
                px: 6,
                my: isMobile && 3,
              }}
              size="large"
            >
              {content.watch_demo_cta_button || FillerContent.cta}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          effect="blur"
          src={
            content.header_graphic?.data[0].url || FillerContent.photos[0].src
          }
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Container>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
          minHeight={{ md: 400 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(Hero);

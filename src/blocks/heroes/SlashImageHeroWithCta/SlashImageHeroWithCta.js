import React from 'react';

/**
 * MUI Imports
 */
import { Box, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import Container from 'blocks/container/Container';
import { useTheme } from '@mui/material/styles';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';

const Hero = ({
  title,
  description,
  cta_left,
  cta_right,
  cta_right_url,
  mainImage,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(title);

  const LeftSide = () => (
    <Box sx={{ py: 10, px: 2 }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
        marginBottom={2}
      >
        {isRichText ? (
          <MuiMarkdown
            options={{
              overrides: {
                span: {
                  component: Typography,
                  props: {
                    component: 'span',
                    sx: {
                      fontSize: 'inherit',
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'inherit',
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
              },
            }}
          >
            {title || FillerContent.description}
          </MuiMarkdown>
        ) : (
          <>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                lineHeight: 1.2,
              }}
            >
              {description}
            </Typography>
          </>
        )}

        <Stack
          sx={{
            display: 'flex',
            flexDirection: isSmall ? 'column' : 'row',
            gap: 2,
          }}
        >
          {cta_left === 'Become a partner' ? (
            <Button
              href="#form"
              component="a"
              variant="contained"
              color="secondary"
            >
              {cta_left || FillerContent.cta}
            </Button>
          ) : (
            <TryFreeButton
              text={cta_left}
              variant="contained"
              size="large"
              color="secondary"
            ></TryFreeButton>
          )}

          {cta_right && (
            <DemoCta
              sx={{ color: theme.palette.zesty.zestyOrange }}
              text={cta_right || FillerContent.cta}
              href={cta_right_url || FillerContent.href}
            />
          )}
        </Stack>
      </Box>
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          py: 5,
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <ZestyImage
          alt="hero image"
          loading="eager"
          style={{
            maxWidth: '100%',
            width: '100%',
            maxHeight: '100%',
            height: 'auto',
            position: 'relative',
          }}
          width={1000}
          src={mainImage}
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

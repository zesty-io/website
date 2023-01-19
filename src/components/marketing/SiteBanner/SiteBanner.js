import React, { useEffect, useState } from 'react';
import useFetch from 'components/hooks/useFetch';
import MuiMarkdown from 'markdown-to-jsx';
import { Stack, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FillerContent from 'components/globals/FillerContent';
import CloseIcon from '@mui/icons-material/Close';
import { getCookie, setCookie } from 'cookies-next';

const SiteBanner = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDismissed, setIsDismissed] = useState(
    getCookie('SITE_BANNER_DISMISSED'),
  );
  const [bannerContent, setBannerContent] = useState([]);

  let zestyURL = process.env.zesty.production
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const { data: response } = useFetch(
    '/-/instant/7-b2aebef2c6-cf7jms.json',
    zestyURL,
  );

  useEffect(() => {
    setBannerContent(response);
  }, [response]);

  // Dismissed banner on click and set session cookie
  const CloseButtonHandler = () => {
    setCookie('SITE_BANNER_DISMISSED', true);
    setIsDismissed(true);
  };

  return (
    <>
      {bannerContent.length != 0 && !isDismissed && (
        <Stack
          px={{ xs: 2 }}
          py={1.5}
          mb={1}
          justifyContent={'center'}
          justifyItems="center"
          textAlign={'center'}
          alignItems="center"
          sx={{
            background: theme.palette.zesty?.zestyBanner,
            position: 'relative',
            zIndex: theme.zIndex.banner,
          }}
          direction={isMobile ? 'column' : 'row'}
        >
          <Box
            onClick={() => CloseButtonHandler()}
            sx={{
              position: 'absolute',
              right: 10,
              top: isMobile ? 5 : '25%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <CloseIcon sx={{ color: theme.palette.common.white }} />
          </Box>
          <Stack
            sx={{
              background: theme.palette.zesty?.zestyOrange,
              borderRadius: '5px',
              px: 1,
              mr: 1,
            }}
          >
            <Typography variant="caption" color={'white'}>
              NEW
            </Typography>
          </Stack>
          {bannerContent.length != 0 && (
            <MuiMarkdown
              options={{
                overrides: {
                  p: {
                    component: Typography,
                    props: {
                      mt: isMobile ? 1 : 0,
                      variant: 'body1',
                      color: theme.palette.common.white,
                    },
                  },
                  a: {
                    component: Typography,
                    props: {
                      component: 'a',
                      variant: 'body1',
                      color: theme.palette.common.white,
                    },
                  },
                },
              }}
            >
              {bannerContent?.data[0]?.content?.banner_content ||
                FillerContent.description}
            </MuiMarkdown>
          )}
          {children}
        </Stack>
      )}
    </>
  );
};

export default SiteBanner;

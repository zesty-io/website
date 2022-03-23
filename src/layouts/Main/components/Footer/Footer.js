import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({customRouting,colorInvert = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { mode } = theme.palette;
  const backgroundColor = colorInvert ? theme.palette.zesty.zestyDarkBlue : theme.palette.zesty.zestyWhiteBlue;
  return (
    <Box sx={{ background: backgroundColor, paddingTop: '10px' }}>
      <Container paddingY={4}>
        <Grid
          container
          marginTop={3}
          spacing={2}
          alignItems={{ xs: 'center', sm: 'center', md: 'initial' }}
          flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
        >
          <Grid item xs={2}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={1}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box
                component={'img'}
                src={
                  mode === 'light' && !colorInvert
                    ? '/assets/zesty-logo.png'
                    : '/assets/zesty-logo-inverted.png'
                }
                height={1}
                width={1}
                sx={{ transform: isMobile ? 'scale(1.8)' : 'scale(1)' }}
              />
            </Box>
            <Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Box
              display={'flex'}
              justifyContent={'space-evenly'}
              alignItems={'top'}
              width={1}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              {customRouting.map((route) => (
                <Grid key={route.zuid}>
                  {route.parentZUID == null && route.children.length > 0 && (
                    <Grid item marginLeft={4}>
                      <Typography
                        marginBottom={1}
                        variant={'h6'}
                        text-transform="capitalize"
                      >
                        {route.title}
                      </Typography>
                      {route.children
                        .sort((a, b) => a.sort - b.sort)
                        .map((childLink) => (
                          <Box key={route.zuid} marginBottom={1}>
                            <Link
                              title={childLink.title}
                              href={childLink.url}
                              component="a"
                              underline="hover"
                              color="text.primary"
                            >
                              {childLink.title}{' '}
                            </Link>
                          </Box>
                        ))}
                    </Grid>
                  )}
                </Grid>
              ))}
            </Box>
          </Grid>

          <Grid item marginTop={2} paddingBottom={2} xs={12} align={'center'}>
            <Container>
              <Typography
                marginBottom={1}
                variant={'h6'}
                text-transform="capitalize"
              >
                Connect with us
              </Typography>
              <Box
                component="a"
                href="https://www.facebook.com/zestyio"
                color="text.primary"
                marginRight={2}
              >
                <FacebookIcon />
              </Box>
              <Box
                component="a"
                href="https://www.linkedin.com/company/zesty-io/mycompany/"
                color="text.primary"
                marginRight={2}
              >
                <LinkedInIcon />
              </Box>
              <Box
                component="a"
                href="https://twitter.com/zestyio"
                color="text.primary"

              >
                <TwitterIcon />
              </Box>
            </Container>
          </Grid>
          <Grid item marginTop={4} paddingBottom={10} xs={12}>
            <Typography
              align={'center'}
              variant={'caption'}
              color="text.secondary"
              component={'p'}
              paddingBottom={'16px'}
            >
              This website and application uses cookies, and also collects some
              information using Google Analytics. Please review our{' '}
              <Link
                underline="none"
                color="text.primary"
                href="/legal/privacy-policy/"
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                underline="none"
                color="text.primary"
                href="/legal/end-user-license-agreement/"
              >
                Terms of Use agreements
              </Link>
              .
            </Typography>
            <Typography
              align={'center'}
              variant={'subtitle2'}
              color="text.secondary"
              gutterBottom
            >
              &copy; Zesty.io Platform, Inc. All Rights Reserved.
              <Typography marginLeft={1} variant="string" marginRight={1}>
                |
              </Typography>
              <Link underline="none" href="/sitemap.xml">
                Sitemap
              </Link>
              <Typography marginLeft={1} variant="string" marginRight={1}>
                |
              </Typography>
              <Link underline="none" href="/legal/privacy-policy/">
                Privacy
              </Link>
              <Typography marginLeft={1} variant="string" marginRight={1}>
                |
              </Typography>
              <Link underline="none" href="/legal/end-user-license-agreement/">
                Terms
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

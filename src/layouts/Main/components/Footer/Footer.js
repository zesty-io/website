import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ customRouting, colorInvert = false }) => {
  const router = useRouter();

  //check if page is from ppc for hiding of footer and nav
  const isPpcShortPage = router.asPath.includes('ppc');
  const isCapterraPage = router.asPath.includes('/capterra');
  const isDxpTemplatePage = router.asPath.includes('/dxp-rfp-template/');
  // override over invert based on pages that we know have a dark image heading

  const hideNav = isPpcShortPage || isCapterraPage || isDxpTemplatePage;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { mode } = theme.palette;
  const backgroundColor =
    mode === 'light' && !colorInvert
      ? theme.palette.zesty?.zestyWhiteBlue
      : theme.palette.zesty?.zestyDarkBlue;

  return (
    <Box
      component="footer"
      display={hideNav ? 'none' : 'flex'}
      sx={{
        background: backgroundColor,
        display: router?.query?.slug?.[0] === 'login' && 'none',
      }}
    >
      <Container sx={{ paddingY: 2 }}>
        <Grid
          container
          marginTop={3}
          spacing={2}
          alignItems={{ xs: 'center', sm: 'center', md: 'initial' }}
          flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
        >
          <Grid item xs={6} md={2}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              width={1}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <img
                width={150}
                height={150}
                alt="zesty.io logo"
                src={
                  mode === 'light' && !colorInvert
                    ? 'https://brand.zesty.io/zesty-io-logo-vertical.svg'
                    : 'https://brand.zesty.io/zesty-io-logo-vertical-light-color.svg'
                }
                style={{
                  marginLeft: isMobile ? 2 : 0,
                }}
              />
            </Box>
            <Grid item marginTop={3} paddingBottom={2} xs={12} align={'center'}>
              <Container>
                <Box
                  aria-label="twitter"
                  component="a"
                  href="https://twitter.com/zestyio"
                  color="#1DA1F2"
                  target="_blank"
                  marginRight={1}
                >
                  <TwitterIcon />
                </Box>
                <Box
                  component="a"
                  aria-label="youtube"
                  href="https://www.youtube.com/c/Zestyio"
                  color="#FF0000"
                  target="_blank"
                  marginRight={1}
                >
                  <YouTubeIcon />
                </Box>
                <Box
                  aria-label="facebook"
                  component="a"
                  href="https://www.facebook.com/zestyio"
                  color="#4267B2"
                  marginRight={1}
                  target="_blank"
                >
                  <FacebookIcon />
                </Box>
                <Box
                  aria-label="linkedin"
                  component="a"
                  href="https://www.linkedin.com/company/zesty-io/"
                  color="#0e76a8"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Box>
              </Container>
            </Grid>
            <Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid
              display={'flex'}
              alignItems={'top'}
              container
              sx={{
                marginLeft: isMobile ? 0 : 4,
                marginTop: isMobile ? 0 : 4,
              }}
            >
              {customRouting.map((route, index) => (
                <React.Fragment key={index}>
                  {route.parentZUID == null && route.children.length > 0 && (
                    <Grid
                      item
                      key={`${route.zuid}-footer`}
                      marginBottom={1}
                      md={4}
                      xs={12}
                      sm={12}
                    >
                      <Typography
                        marginBottom={1}
                        variant={'p'}
                        sx={{
                          textAlign: isMobile ? 'center' : 'left',
                          display: 'block',
                        }}
                      >
                        {route.title}
                      </Typography>
                      {route.children
                        .sort((a, b) => a.sort - b.sort)
                        .map((childLink) => (
                          <Box
                            key={`${childLink.zuid}-footer`}
                            marginBottom={1}
                            sx={{
                              textAlign: isMobile ? 'center' : 'left',
                            }}
                          >
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
                </React.Fragment>
              ))}
            </Grid>
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
              component="p"
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

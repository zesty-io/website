import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'markdown-to-jsx';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useEffect, useState } from 'react';

const Hero = ({
  overline = '',
  description,
  heroImage = 'https://kfg6bckb.media.zestyio.com/Hero-Image-2.webp',
  primaryCta = 'Talk to Us',
  primaryCtaLink = '/demo?ab=light',
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    const regex = /<li>(.*?)<\/li>/g;
    const liTextArray = [];

    // Use a loop to iterate through matches and extract the li text content
    let match;
    while ((match = regex.exec(description)) !== null) {
      liTextArray.push(match[1]);
    }

    setHeroList([...liTextArray]);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        px={{ xs: 2, tablet: 4, lg: 14 }}
        spacing={{ lg: 8 }}
        position="relative"
        maxWidth={1500}
      >
        <Grid
          item
          xs={12}
          lg={6}
          mb={4}
          sx={(theme) => ({
            [theme.breakpoints.up('xl')]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          })}
        >
          <Stack py={{ lg: '92px' }}>
            <Typography
              color="primary"
              variant="overline"
              sx={{ fontWeight: '600', fontSize: '14px' }}
            >
              {overline}
            </Typography>
            <Stack mb={4}>
              <MuiMarkdown
                options={{
                  overrides: {
                    h1: {
                      component: Typography,
                      props: {
                        fontSize: '44px',
                        lineHeight: '48px',
                        letterSpacing: '-0.02em',
                        fontWeight: '800',
                        color: 'text.primary',
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'text.secondary',
                        mt: '20px',
                      },
                    },
                    li: {
                      props: {
                        style: {
                          display: 'none',
                        },
                      },
                    },
                  },
                }}
              >
                {description}
              </MuiMarkdown>

              <Stack rowGap="8px" mt={2}>
                {heroList?.length !== 0 &&
                  heroList.map((item, index) => {
                    return (
                      <Stack key={index} direction="row" columnGap="12px">
                        <CheckRoundedIcon color="primary" />
                        <Typography fontWeight={400} color="text.secondary">
                          {item}
                        </Typography>
                      </Stack>
                    );
                  })}
              </Stack>
            </Stack>

            <Stack
              spacing="12px"
              mb={4}
              direction={{
                xs: 'column',
                tablet: 'row',
              }}
            >
              <Button
                href={primaryCtaLink}
                variant="contained"
                color="primary"
                size={isLg ? 'extraLarge' : 'large'}
                title={primaryCta}
              >
                Get Started
              </Button>
              {secondaryCtaText && (
                <Button
                  href={secondaryCtaLink}
                  variant="outlined"
                  color="primary"
                  size={isLg ? 'extraLarge' : 'large'}
                  title={secondaryCtaText}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ position: 'relative', zIndex: 1 }}>
          <img
            loading="eager"
            src={heroImage}
            width="100%"
            height="100%"
            alt="Zesty Image"
            style={{ objectFit: 'contain ' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

/**
 * MUI Imports
 */
import { Box, Typography, Grid, Stack } from '@mui/material';

/**
 * Components Imports
 */
import DemoCta from 'components/cta/DemoCta';
import TryFreeButton from 'components/cta/TryFreeButton';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const Hero = ({
  eyebrow,
  header,
  mainImage,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  isDarkMode,
  theme,
  isSmall,
  isMedium,
}) => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: 700,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 10,
      }}
    >
      <Box
        sx={{
          height: ' 100%',
          width: '100%',
          maxWidth: 1500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          px: 4,
        }}
      >
        <Grid container spacing={3.5} sx={{ mt: isSmall ? 3 : 0 }}>
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
            <Typography
              component={'h1'}
              variant="p"
              color={
                isDarkMode
                  ? theme.palette.zesty.zestyWhite
                  : theme.palette.zesty.zestyGrey
              }
              gutterBottom
              sx={{ fontWeight: 400, fontSize: '20px' }}
            >
              {eyebrow}
            </Typography>
            <MuiMarkdown
              options={{
                overrides: {
                  h1: {
                    component: Typography,
                    props: {
                      component: 'h1',
                      variant: 'h3',
                      sx: {
                        color: theme.palette.zesty.zestyDarkText,
                        fontWeight: 800,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        mt: 4,
                        color: theme.palette.text.secondary,
                      },
                    },
                  },
                },
              }}
            >
              {header}
            </MuiMarkdown>
            <Stack
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: isMedium ? 'column' : 'row',
                gap: 2,
              }}
            >
              <TryFreeButton
                text={primaryCta}
                variant="contained"
                fullWidth={isMedium}
              />
              <DemoCta
                icon={false}
                sx={{
                  fontWeight: 800,
                }}
                target="_self"
                variant="outlined"
                color="secondary"
                text={secondaryCta}
                href={secondaryCtaLink}
              />
            </Stack>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <ZestyImage
                alt="hero image"
                loading="eager"
                style={{ width: '100%', maxWidth: '878.67', height: 'auto' }}
                width={878.67}
                height={478.93}
                src={mainImage}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;

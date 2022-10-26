/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';

/**
 * Components Imports
 */
import DemoCta from 'components/cta/DemoCta';
import MuiMarkdown from 'mui-markdown';
import ZestyImage from 'blocks/Image/ZestyImage';

const Hero = ({
  header,
  mainImage,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
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
            <MuiMarkdown
              overrides={{
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
              }}
            >
              {header}
            </MuiMarkdown>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: isMedium ? 'column' : 'row',
                gap: 2,
              }}
            >
              <DemoCta
                icon={false}
                sx={{
                  background: theme.palette.zesty.zestyOrange,
                  color: theme.palette.common.white,
                  '&:hover': {
                    background: theme.palette.zesty.zestyRed,
                  },
                }}
                target="_self"
                text={primaryCta}
                href={primaryCtaLink}
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
            </Box>
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

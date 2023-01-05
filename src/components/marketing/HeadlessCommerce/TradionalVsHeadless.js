/**
 * MUI Imports
 */
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components Import

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import DemoCta from 'components/cta/DemoCta';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TradionalVsHeadless = ({
  header,
  primaryCtaText,
  primaryCtaLink,
  traditionalImage,
  traditionalDescription,
  headlessImage,
  headlessDescription,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        mt: 15,
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          options={{
            overrides: {
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    mt: 2,
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: 'center',
                  },
                },
              },
            },
          }}
        >
          {header || FillerContent.headerAndDescription}
        </MuiMarkdown>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <DemoCta
            sx={{
              color: theme.palette.zesty.zestyOrange,
              mt: 2,
              fontWeight: 'bold',
            }}
            text={primaryCtaText || FillerContent.cta}
            href={primaryCtaLink || FillerContent.href}
          />
        </Box>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <VsGrid
            image={traditionalImage}
            content={traditionalDescription}
            imageW={330}
            imageH={229.6}
            sx={{ mt: !isSmall && 5.5 }}
          />
          <Grid item xs={12} md={2} sx={{ my: 5 }}>
            <Box
              sx={{
                display: 'flex',
                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                VS
              </Typography>
            </Box>
          </Grid>
          <VsGrid
            image={headlessImage}
            content={headlessDescription}
            imageW={355}
            imageH={273.68}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default TradionalVsHeadless;

const VsGrid = ({ image, imageW, imageH, content, sx = {} }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Grid item xs={12} md={5} sx={sx}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ZestyImage
          src={image || FillerContent.logos[0].url}
          width={imageW}
          height={imageH}
          alt={content || 'Zesty.io integration'}
        />
      </Box>
      <Box
        sx={{
          px: isSmall ? 0 : 5,
        }}
      >
        <MuiMarkdown
          options={{
            overrides: {
              h3: {
                component: Typography,
                props: {
                  component: 'h3',
                  variant: 'h5',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mt: 5,
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    mt: 2,
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: 'center',
                    background: isDarkMode
                      ? theme.palette.background.dark
                      : theme.palette.zesty.whiteGray,
                    borderRadius: '5px',
                    p: 2,
                  },
                },
              },
            },
          }}
        >
          {content || FillerContent.headerAndDescription}
        </MuiMarkdown>
      </Box>
    </Grid>
  );
};

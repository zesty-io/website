/**
 * MUI Imports
 */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';

const Bottom = ({ content, theme, isMobile }) => {
  const bgImgage =
    content.bottom_page_background_image?.data[0]?.url ||
    FillerContent.dashboard_image;

  return (
    <Box paddingY={isMobile ? 0 : 20} sx={{ position: 'relative' }}>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bgImgage} alt="bg" />
      </Box>
      <Container>
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                component={'h2'}
                variant={'p'}
                sx={{
                  fontSize: isMobile ? '.9rem' : '1.3rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'center' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    content.bottom_cta_description,
                    'Digital Experiences',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: isMobile ? '6rem' : '10rem',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: theme.palette.zesty.zestyTealDark,
                  width: '100%',
                }}
              >
                <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
                  <TryFreeButton
                    fullWidth={true}
                    text={content.bottom_cta_button_primary}
                    variant="contained"
                    component="a"
                  />
                </Box>
                {/* <Button
                    sx={{ padding: '.5rem 4rem' }}
                    variant="contained"
                    color="secondary"
                    fullWidth={isMobile}
                  >
                    {content.bottom_cta_button_primary}
                  </Button> */}
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth={isMobile}
                  sx={{ textDecoration: 'underline' }}
                >
                  {content.bottom_cta_button_secondary}
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 15 : 0}>
              <img
                src={
                  content.bottom_cta_graphic?.data[0]?.url ||
                  FillerContent.dashboard_image
                }
                width={isMobile ? 350 : 600}
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Bottom;

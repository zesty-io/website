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

/**
 * Helpers Imports
 */
import * as helper from 'utils';

const Integrations = ({ content, theme, isMobile }) => {
  return (
    <Box
      paddingY={2}
      sx={{
        background: theme.palette.zesty.zestyGray99,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gap: '4rem',
        }}
      >
        <div data-aos="fade-right">
          <Box sx={{}}>
            <img
              src={content.integrations_graphic.data[0].url}
              width={isMobile ? 400 : 700}
            />
          </Box>
        </div>
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          <div data-aos="flip-right">
            <Box sx={{ position: 'absolute', top: '-5rem', zIndex: '2000' }}>
              <img
                src={content.integrations_airplane_graphic?.data[0]?.url}
                alt=""
              />
            </Box>
          </div>
          <div data-aos="fade-left">
            <Typography
              component={'p'}
              variant={'p'}
              paddingY={isMobile ? 6 : 10}
              sx={{
                color: theme.palette.secondary.darkCharcoal,
                textAlign: 'left',
              }}
              dangerouslySetInnerHTML={{
                __html: helper.strColorChanger(
                  content.integrations_description,
                  'Limitless Integrations for Limitless Reach',
                  theme.palette.zesty.zestyOrange,
                ),
              }}
            />
            <Box>
              <Button
                variant="contained"
                size="large"
                fullWidth={isMobile}
                // href={
                //   content.integrations_button_link?.data[0]?.meta?.web?.uri ||
                //   ''
                // }
                sx={{
                  backgroundColor: theme.palette.zesty.zestyOrange,
                  color: theme.palette.common.white,
                  padding: '.6rem 4rem',
                  fontSize: '16px',
                }}
              >
                {content.integrations_button_text}
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Integrations;

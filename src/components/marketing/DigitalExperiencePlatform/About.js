/**
 * MUI Imports
 */
import { Box, Container, Typography } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import TryFreeButton from 'components/cta/TryFreeButton';
import MuiMarkdown from 'markdown-to-jsx';

const About = ({ content, theme, isMobile, FillerContent }) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestySeaShell,
      }}
      paddingBottom={isMobile ? 5 : 20}
      paddingTop={isMobile ? 5 : 10}
    >
      <Container>
        <Box sx={{ pb: 10 }}>
          <Box sx={{ width: '100%', maxWidth: 1000, margin: 'auto' }}>
            <MuiMarkdown
              options={{
                overrides: {
                  span: {
                    component: Typography,
                    props: {
                      component: 'span',
                      sx: {
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        color: theme.palette.zesty.zestyOrange,
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        textAlign: 'center',
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
                        textAlign: 'center',
                        mt: 2,
                      },
                    },
                  },
                },
              }}
            >
              {content.about_dxp || FillerContent.description}
            </MuiMarkdown>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alingItems: 'center',
              mt: 2,
            }}
          >
            <TryFreeButton
              text={content.middle_cta_text || FillerContent.cta}
              variant="contained"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          <Box data-aos="zoom-in">
            <ZestyImage
              src={
                content.about_dxp_graphic.data[0].url ||
                FillerContent.logos[0].url
              }
              width={700}
              height={500}
              alt="digital experience platform"
              style={{
                width: '100%',
                maxWidth: isMobile ? 300 : 700,
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

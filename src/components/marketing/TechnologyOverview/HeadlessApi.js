// MUI Imports
import { Box, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import TryFreeButton from 'components/cta/TryFreeButton';

const HeadlessApi = ({ theme, isMobile, content, FillerContent }) => {
  return (
    <Box component="section" sx={{ px: 4, mt: 10 }}>
      <Box
        sx={{
          background: theme.palette.zesty.zestySeaShell,
          borderRadius: 10,
          py: 10,
        }}
      >
        <Container>
          <Box>
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    sx: {
                      mt: isMobile ? 5 : 0,
                      color: theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                      letterSpacing: 0.2,
                      textAlign: 'center',
                    },
                    variant: 'h3',
                    component: 'h2',
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    sx: {
                      mt: 2,
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                      letterSpacing: 0.2,
                    },
                    variant: 'h6',
                    component: 'p',
                  },
                },
              }}
            >
              {content.headless_apis || FillerContent.description}
            </MuiMarkdown>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
              }}
            >
              <TryFreeButton
                text={content.headless_api_cta_text}
                variant="contained"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'inline-block',
              margin: 'auto',
              mt: 5,
              width: '100%',
            }}
            src={
              content.headless_apis_graphic.data[0].url ||
              FillerContent.logos[0].url
            }
            component="img"
            alt="logo"
          />
        </Container>
      </Box>
    </Box>
  );
};
export default HeadlessApi;

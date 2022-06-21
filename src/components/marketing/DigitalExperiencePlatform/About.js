/**
 * MUI Imports
 */
import { Box, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

const About = ({ content, theme, isMobile }) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestySeaShell,
      }}
      paddingBottom={isMobile ? 1 : 20}
      paddingTop={isMobile ? 1 : 10}
    >
      <Container>
        <Box sx={{ pb: 10 }}>
          <MuiMarkdown
            overrides={{
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
            }}
          >
            {content.about_dxp}
          </MuiMarkdown>
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
            <Box
              component="img"
              src={content.about_dxp_graphic.data[0].url}
              alt=""
              sx={{
                width: '100%',
                maxWidth: isMobile ? 300 : 700,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

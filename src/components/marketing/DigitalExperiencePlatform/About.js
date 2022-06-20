/**
 * MUI Imports
 */
import { Box, Container, Typography } from '@mui/material';

/**
 * Helper Imports
 */
import * as helper from 'utils';

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
        <Box>
          <Typography
            component={'p'}
            variant={'p'}
            paddingBottom={isMobile ? 2 : 10}
            sx={{
              fontSize: isMobile ? '1rem' : '1.4rem',
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.about_dxp,
                'Digital Experience Platform?',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
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
          <div data-aos="zoom-in">
            <img
              src={content.about_dxp_graphic.data[0].url}
              alt=""
              width={isMobile ? 300 : 700}
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

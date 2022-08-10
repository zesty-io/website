/**
 * MUI Imports
 */
import { Box, Container, Typography } from '@mui/material';

const Hero = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  return (
    <Box sx={{ background: theme.palette.zesty.zestyDarkBlue, pt: 10 }}>
      <Container>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 900,
            textAlign: 'center',
          }}
        >
          {content.hero_h1 || FillerContent.header}
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: theme.palette.common.white,
            textAlign: 'center',
            my: 2,
          }}
        >
          {content.hero_description || FillerContent.description}
        </Typography>

        <Box></Box>
      </Container>
    </Box>
  );
};

export default Hero;

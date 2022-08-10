/**
 * MUI Imports
 */
import { Box, Container, Typography, Button } from '@mui/material';

/**
 * Components Imports
 */

import CodeBlock from 'components/cta/CodeBlock';
import DemoCta from 'components/cta/DemoCta';

const Hero = ({ theme, isMedium, isDarkMode, content, FillerContent }) => {
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

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              color: theme.palette.common.white,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Get started with one line of code
          </Typography>
          <Box
            sx={{
              border: `1px solid ${theme.palette.common.white}`,
              borderRadius: 1,
              width: '100%',
              maxWidth: 470,
              margin: 'auto',
              filter: 'drop-shadow(4px 4px 30px rgba(176, 176, 176, 0.25))',
              mt: 2,
            }}
          >
            <CodeBlock />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: isMedium ? 'column' : 'row',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            <Button
              sx={{
                width: '100%',
                maxWidth: isMedium ? '100%' : 174,
                fontWeight: 'bold',
              }}
              target="_blank"
              fullWidth={true}
              href={content.cta_primary_link}
              component="a"
              variant="contained"
              color={'secondary'}
            >
              {content.cta_primary_text}
            </Button>

            <DemoCta
              icon={false}
              fullWidth={isMedium}
              sx={{
                width: '100%',
                maxWidth: isMedium ? '100%' : 174,
                fontWeight: 'bold',
                color: theme.palette.zesty.zestyOrange,
                background: theme.palette.common.white,
              }}
              text={content.cta_secondary_text}
              href={content.secondary_cta_link}
            />
          </Box>
        </Box>

        <Box>
          <iframe />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

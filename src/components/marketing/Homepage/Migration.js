/**
 * MUI Imports
 */

import { Box, Typography, Card } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
/**
 * Static Assets Imports
 */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Migration = ({ content, FillerContent, theme, isMedium, isLarge }) => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container>
        <Card
          sx={{
            width: '100%',
            maxWidth: 695,
            height: 400,
            p: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: isLarge ? 'hidden' : 'unset',
            borderRadius: 5,
            margin: isLarge ? 'auto' : 0,
          }}
        >
          <Box
            sx={{
              height: 133,
              width: 133,
              background: '#9AB3DF',
              position: 'absolute',
              borderRadius: '50%',
              top: 50,
              right: isLarge ? -85 : -70,
            }}
          />
          <Box
            sx={{
              height: 42,
              width: 42,
              background: '#9AB3DF',
              position: 'absolute',
              borderRadius: '50%',
              top: 230,
              right: isLarge ? -30 : -20,
            }}
          />
          <Box
            sx={{
              height: 79,
              width: 200,
              border: `10px solid #B9F8FF `,
              position: 'absolute',
              borderRadius: 80,
              bottom: -25,
              left: -50,
            }}
          />
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  component: 'h1',
                  variant: 'h3',
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyOrange,
                  lineHeight: 1,
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    lineHeight: 1.2,
                    mt: 2,
                  },
                },
              },
            }}
          >
            {content.migration_title_and_description ||
              FillerContent.description}
          </MuiMarkdown>
        </Card>

        <Box sx={{ mt: isLarge ? 4 : -10 }}>
          <Box
            sx={{ width: '100%' }}
            component="img"
            src={content.migration_graphic?.data[0].url}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Migration;

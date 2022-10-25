/**
 * MUI Imports
 */

import { Box, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import ZestyImage from 'blocks/Image/ZestyImage';

const WhyZesty = ({
  content,
  //  FillerContent,
  theme,
  // isMedium, isSmall
}) => {
  return (
    <>
      <Box component="section" sx={{ pb: 7 }}>
        <Container>
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h4',
                  component: 'h2',
                  sx: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: theme.palette.zesty.zetsyDarkText,
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h6',
                  component: 'p',
                  sx: {
                    lineHeight: 1.2,
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    mt: 2,
                  },
                },
              },
            }}
          >
            {content.why_zesty}
          </MuiMarkdown>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ZestyImage
              width={928}
              height={600}
              style={{
                width: '100%',
                maxWidth: 928,
                height: 'auto',
              }}
              alt="why zesty"
              src={content.why_zesty_graphic?.data[0].url}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhyZesty;

// Mui Imports
import { Box, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Components Imports
import ZestyImage from 'blocks/Image/ZestyImage';
import DemoCta from 'components/cta/DemoCta';

const Benefits = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box
          sx={{
            width: '100%',
            maxWidth: 928,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h4',
                  component: 'h2',
                  sx: {
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyZambezi,
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h6',
                  component: 'p',
                  sx: {
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    lineHeight: 1.2,
                    mt: 2,
                  },
                },
              },
            }}
          >
            {content.headless_cms_benefits || FillerContent.rich_text}
          </MuiMarkdown>

          <Box sx={{ mt: 4 }}>
            <DemoCta
              icon={false}
              variant="contained"
              color="secondary"
              href={content.benefits_cta || FillerContent.href}
              text={content.benefits_cta_link || FillerContent.cta}
            />
          </Box>
          <Box sx={{ mt: 5 }}>
            <ZestyImage
              width={928}
              height={495}
              style={{ width: '100%', height: 'auto' }}
              src={
                content.header_image.data[0].url || FillerContent.photos[0].src
              }
              alt="why zesty image"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;

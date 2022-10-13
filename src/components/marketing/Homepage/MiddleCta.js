/**
 * MUI Imports
 */

import { Box, Typography, Card, Grid, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';
/**
 * Static Assets Imports
 */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

const MiddleCta = ({
  header_content,
  cta_text,
  cta_secondary_text,
  cta_secondary_link,
  FillerContent,
  theme,
  isLarge,
}) => {
  return (
    <Box component="section">
      <Container
        sx={{
          background: theme.palette.zesty.zestyDarkBlueRadialGradient,
          py: 10,
          mt: 15,
          borderRadius: 5,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 1000, margin: 'auto' }}>
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h3',
                  sx: {
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h6',
                  sx: {
                    color: theme.palette.common.white,
                    textAlign: 'center',
                    lineHeight: 1.2,
                    mt: 2,
                  },
                },
              },
            }}
          >
            {header_content || FillerContent.rich_text}
          </MuiMarkdown>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <TryFreeButton
              text={cta_text || FillerContent.cta}
              variant="contained"
              color="secondary"
            />
            <Button
              component="a"
              target={'_blank'}
              href={cta_secondary_link || FillerContent.href}
              color="secondary"
              variant="outlined"
              sx={{
                color: theme.palette.common.white,
                border: `1px solid ${theme.palette.common.white}`,
              }}
            >
              {cta_secondary_text || FillerContent.cta}
              <ArrowRightAlt sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MiddleCta;

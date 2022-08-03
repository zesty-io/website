/**
 * MUI Imports
 */

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import Carousel from 'react-material-ui-carousel';
/**
 * Static Assets Imports
 */

const NewBenefits = ({ content, FillerContent, theme, isMedium }) => {
  return (
    <Box sx={{ background: theme.palette.zesty.zestyGray99, py: 10 }}>
      <Container>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h4',
                sx: {
                  color: theme.palette.zesty.zestyDarkText,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              },
            },
            p: {
              component: Typography,
              props: {
                component: 'p',
                variant: 'h6',
                sx: {
                  mt: 2,
                  color: theme.palette.zesty.zestyZambezi,
                  textAlign: 'center',
                },
              },
            },
          }}
        >
          {content.zesty_new_benefits}
        </MuiMarkdown>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TryFreeButton
            sx={{ mt: 4 }}
            variant="contained"
            text={content.middle_cta_button_text || FillerContent.href}
          />
        </Box>

        <Box>
          <Carousel
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible
          >
            {[1, 2, 3].map((item) => (
              <Typography>Test {item}</Typography>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default NewBenefits;

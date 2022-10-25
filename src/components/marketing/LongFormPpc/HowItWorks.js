// MUI Imports
import { Box, Grid, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Components Imports
import FeatureGridWithBackgrounds from 'blocks/features/FeatureGridWithBackgrounds';

const HowItWorks = ({
  // header is dangerouse title and description
  header,
  images,
}) => {
  const styleSx = {
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '20%',
      zIndex: 1,
      top: 0,
      left: 0,
      height: '100%',
    },
  };

  return (
    <>
      <Container sx={styleSx}>
        <Box position={'relative'} zIndex={2}>
          <Grid item xs={12} md={9}>
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      fontWeight: 'bold',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: { lineHeight: 1.5, mt: 2 },
                  },
                },
              }}
            >
              {header}
            </MuiMarkdown>
          </Grid>
        </Box>
      </Container>
      <FeatureGridWithBackgrounds images={images} />
    </>
  );
};

export default HowItWorks;

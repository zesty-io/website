import React from 'react';
/**
 * MUI Imports
 */
import { Box, Typography, Grid, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';

const Bottom = ({ theme, isMedium, isDarkMode, content, FillerContent }) => {
  return (
    <Box id="form" sx={{}}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{ display: 'flex', alignItems: 'center' }}
            item
            sm={12}
            md={6}
          >
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      mt: 2,
                      lineHeight: 1.2,
                    },
                  },
                },
              }}
            >
              {content.get_started_footer_ || FillerContent.description}
            </MuiMarkdown>
          </Grid>
          <Grid item sm={12} md={6}>
            <ZohoFormEmbed height="620px" formURL={content.form_link || ''} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;

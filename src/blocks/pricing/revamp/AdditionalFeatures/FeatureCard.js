import React from 'react';
import { Button, Card, Typography, Grid, Box } from '@mui/material';
import { ThemeProvider, useTheme } from '@emotion/react';

import revampTheme from 'theme/revampTheme';
import FillerContent from 'components/globals/FillerContent';

const FeatureCard = ({ feature }) => {
  const {
    image,
    title,
    description,
    primary_cta_label,
    secondary_cta_label,
    primary_cta_link,
    secondary_cta_link,
  } = feature;
  const theme = useTheme();

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Card
        sx={{
          margin: 0,
          mx: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: '64px',
          py: '32px',
          borderRadius: '22px',
          maxWidth: { xs: '100%', sm: '380px' },
          minHeight: '460px',
          backgroundColor: 'white',
          boxShadow: '0 3px 6px 0 rgba(140, 152, 164, 0.25)',
        }}
      >
        <Box
          component="img"
          src={image || FillerContent.image}
          sx={{ width: '112px', height: '112px', borderRadius: '50%', mb: 3 }}
        />
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 600,
            mb: 1,
            color: theme.palette.zesty.zestyDarkText,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            p: 1,
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 400,
            overflow: 'auto',
            textOverflow: 'ellipsis',
            color: theme.palette.zesty.zestyZambezi,
          }}
        >
          {description}
        </Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button
              href={secondary_cta_link}
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ px: '10px' }}
              size="large"
            >
              {secondary_cta_label}
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button
              href={primary_cta_link}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: '8px' }}
            >
              {primary_cta_label}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
};

export default FeatureCard;

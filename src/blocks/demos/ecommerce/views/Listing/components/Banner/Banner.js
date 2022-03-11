import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Banner = () => {
  const theme = useTheme();
  return (
    <Box>
      <Card
        elevation={0}
        variant={'outlined'}
        sx={{
          p: 4,
          height: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Box
          sx={{
            mr: { xs: 0, md: 2 },
            mb: { xs: 1, md: 0 },
          }}
        >
          <Box
            component={LazyLoadImage}
            effect="blur"
            src={'https://assets.maccarianagency.com/backgrounds/img66.png'}
            width={1}
            maxWidth={220}
            sx={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
            }}
          />
        </Box>
        <Box>
          <Typography variant={'h5'} fontWeight={700} marginY={1}>
            Save up to 30%! Discover our latest promotions
          </Typography>
          <Typography color={'text.secondary'}>
            We believe lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus feugiat elit vitae enim lacinia semper.
          </Typography>
        </Box>
        <Button
          component={Link}
          href={'/demos/ecommerce/promotions'}
          variant={'contained'}
          size={'large'}
          fullWidth
          sx={{
            maxWidth: 150,
            fontWeight: 700,
            ml: { xs: 0, md: 2 },
            mt: { xs: 2, md: 0 },
          }}
        >
          Shop now
        </Button>
      </Card>
    </Box>
  );
};

export default Banner;

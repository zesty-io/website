import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Documentation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h4'} fontWeight={700} align={'center'} gutterBottom>
        Documentation
      </Typography>
      <Typography variant={'h6'} color={'text.secondary'} align={'center'}>
        Components, plugins, and build tools are all thoroughly documented with
        live examples and markup
        <br />
        for easier use and customization.
      </Typography>
      <Button
        component={Link}
        href={'/docs/introduction'}
        target={'_blank'}
        size={'large'}
        variant={'contained'}
        sx={{ marginTop: 2 }}
        endIcon={
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            width={24}
            height={24}
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </Box>
        }
      >
        Browse Documentation
      </Button>
      <Box
        component={'img'}
        src={
          'https://assets.maccarianagency.com/screenshots/the-front-documentation.png'
        }
        loading={'lazy'}
        sx={{
          width: 1,
          maxWidth: 800,
          height: 'auto',
          borderRadius: 2,
          boxShadow: 4,
          mt: { xs: 4, sm: 8 },
        }}
      />
    </Box>
  );
};

export default Documentation;

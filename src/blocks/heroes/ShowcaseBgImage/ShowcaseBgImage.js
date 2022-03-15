import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FillerContent from 'components/FillerContent';

import Container from 'components/Container';

// const mock = {
//   bgImage: 'https://assets.maccarianagency.com/backgrounds/img62.jpg',
//   title: 'Denim essentials',
//   subtitle: 'Buy now, wear forever',
//   href: '#',
// };

const ShowcaseBgImage = ({ image, showCase, description }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${image})`,
        bgcolor: 'alternate.main',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: { xs: 'center', sm: 'flex-end' },
        minHeight: { xs: 400, sm: 500, md: 600 },
        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
      }}
    >
      <Container
        display={'flex'}
        justifyContent={{ xs: 'center', sm: 'flex-end' }}
      >
        <Card
          sx={{
            width: 1,
            maxWidth: { xs: 1, sm: '50%' },
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography color={'text.secondary'} fontWeight={700} variant={'h4'}>
            {showCase }
          </Typography>
          <Typography variant={'h4'}>
            {description }
          </Typography>
          <Link
            target="_blank"
            href={FillerContent.href}
            color={'text.primary'}
            variant={'h5'}
            fontWeight={700}
            sx={{ marginTop: 4, display: 'block' }}
          >
            Discover more
            {}
          </Link>
        </Card>
      </Container>
    </Box>
  );
};

export default ShowcaseBgImage;

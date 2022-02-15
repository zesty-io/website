import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    price: '$39.90',
    href: '#',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    price: '$49.90',
    href: '#',
  },
];

const Products = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Typography fontWeight={700} marginBottom={2} noWrap>
          Categories
        </Typography>
        {[
          'Men’s fashion',
          'New arrivals',
          'Clothing',
          'Footwear',
          'Watches',
          'Jewellry',
          'Backpacks',
          'Luggage',
        ].map((i) => (
          <Link
            key={i}
            href={'#'}
            underline={'hover'}
            color={'text.primary'}
            sx={{ display: 'block', marginTop: 1, whiteSpace: 'nowrap' }}
          >
            {i}
          </Link>
        ))}
      </Grid>
      <Grid item xs={6}>
        <Typography fontWeight={700} marginBottom={2} noWrap>
          Top brands
        </Typography>
        {[
          'Nike',
          'Tommy Hilfiger',
          'Skechers',
          'Converse',
          'Puma',
          'Adidas',
          'Under Armour',
          'Jack & Jones',
        ].map((i) => (
          <Link
            key={i}
            href={'#'}
            underline={'hover'}
            color={'text.primary'}
            sx={{ display: 'block', marginTop: 1, whiteSpace: 'nowrap' }}
          >
            {i}
          </Link>
        ))}
      </Grid>
      {mock.map((item, i) => (
        <Grid item xs={6} key={i}>
          <Card
            sx={{
              width: 1,
              height: 1,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'none',
              bgcolor: 'transparent',
              backgroundImage: 'none',
            }}
          >
            <CardMedia
              title={item.title}
              image={item.media}
              sx={{
                position: 'relative',
                height: 180,
                overflow: 'hidden',
                borderRadius: 2,
              }}
            />
            <Box marginTop={2}>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                component={'h6'}
              >
                {item.title}
              </Typography>
              <Typography variant={'body2'} fontWeight={700} component={'h6'}>
                {item.price}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 8 }}>
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={(e) => handleClick(e)}
      >
        Products{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            padding: 2,
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Box>
          <Products />
        </Box>
      </Menu>
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Best sellers
      </Link>
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        New arrivals
      </Link>
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Sale
      </Link>
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Editor choise
      </Link>
    </Stack>
  );
};

export default Navigation;

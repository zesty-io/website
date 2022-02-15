import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const mock = [
  {
    title: 'Adidas shoes',
    size: '41',
    price: '$69.90',
    code: 'D5268X149',
    image: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    gender: 'Male',
  },
  {
    title: 'Nike',
    size: '41',
    price: '$49.90',
    code: 'P8763Y435',
    image: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    gender: 'Female',
  },
  {
    title: 'Sneakers',
    size: '41',
    price: '$59.90',
    code: 'A1356F865',
    image: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    gender: 'Unisex',
  },
];

const Orders = () => {
  const theme = useTheme();
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i}>
          <Box display={'flex'}>
            <Box
              component={'img'}
              src={item.image}
              alt={item.title}
              sx={{
                borderRadius: 2,
                width: 1,
                height: 1,
                maxWidth: { xs: 120, sm: 160 },
                marginRight: 2,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column', sm: 'row' }}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              width={1}
            >
              <Box sx={{ order: 1 }}>
                <Typography fontWeight={700} gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  color={'text.secondary'}
                  variant={'subtitle2'}
                  gutterBottom
                >
                  Size:{' '}
                  <Typography
                    variant={'inherit'}
                    component={'span'}
                    color={'inherit'}
                    fontWeight={700}
                  >
                    {item.size}
                  </Typography>
                </Typography>
                <Typography
                  color={'text.secondary'}
                  variant={'subtitle2'}
                  gutterBottom
                >
                  Gender:{' '}
                  <Typography
                    variant={'inherit'}
                    component={'span'}
                    color={'inherit'}
                    fontWeight={700}
                  >
                    {item.gender}
                  </Typography>
                </Typography>
                <Typography
                  color={'text.secondary'}
                  variant={'subtitle2'}
                  noWrap={true}
                  gutterBottom
                >
                  Code:{' '}
                  <Typography
                    variant={'inherit'}
                    component={'span'}
                    color={'inherit'}
                    fontWeight={700}
                  >
                    {item.code}
                  </Typography>
                </Typography>
              </Box>
              <Stack
                spacing={1}
                direction={{ xs: 'row', sm: 'column' }}
                marginTop={{ xs: 2, sm: 0 }}
                sx={{ order: { xs: 3, sm: 2 } }}
              >
                <Link
                  href={'#'}
                  underline={'none'}
                  variant={'subtitle2'}
                  noWrap={true}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    marginRight={0.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </Box>
                  Remove
                </Link>
                <Link
                  href={'#'}
                  underline={'none'}
                  variant={'subtitle2'}
                  noWrap={true}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    marginRight={0.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </Box>
                  Save
                </Link>
              </Stack>
              <Stack
                spacing={1}
                direction={'row'}
                alignItems={'center'}
                marginTop={{ xs: 2, sm: 0 }}
                sx={{ order: { xs: 2, sm: 3 } }}
              >
                <FormControl fullWidth>
                  <Select
                    defaultValue={1}
                    sx={{
                      '& .MuiSelect-select': {
                        paddingY: 0.5,
                      },
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography fontWeight={700} marginLeft={2}>
                  {item.price}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Divider
            sx={{
              marginY: { xs: 2, sm: 4 },
              display: i === mock.length - 1 ? 'none' : 'block',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Orders;

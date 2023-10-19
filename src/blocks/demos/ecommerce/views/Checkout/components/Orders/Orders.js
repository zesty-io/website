import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

const mock = [
  {
    title: 'Adidas shoes',
    size: '41',
    price: '$69.90',
    code: 'D5268X149',
    image: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
  },
  {
    title: 'Nike',
    size: '41',
    price: '$49.90',
    code: 'P8763Y435',
    image: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
  },
  {
    title: 'Sneakers',
    size: '41',
    price: '$59.90',
    code: 'A1356F865',
    image: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
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
                maxWidth: 120,
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
              <Box>
                <Typography fontWeight={700} variant={'subtitle2'}>
                  {item.title}
                </Typography>
                <Typography color={'text.secondary'} variant={'subtitle2'}>
                  Size: {item.size}
                </Typography>
                <Typography
                  color={'text.secondary'}
                  variant={'subtitle2'}
                  noWrap={true}
                >
                  Code: {item.code}
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight={700} variant={'subtitle2'}>
                  {item.price}
                </Typography>
              </Box>
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
      <Box
        component={'form'}
        noValidate
        autoComplete="off"
        sx={{
          marginY: 4,
          '& .MuiInputBase-input.MuiOutlinedInput-input': {
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box display="flex">
          <Box
            flex={'1 1 auto'}
            component={TextField}
            label="Discount code"
            variant="outlined"
            color="primary"
            fullWidth
            height={54}
            maxWidth={300}
          />
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            height={54}
            marginLeft={1}
            width={1}
            flex={1}
          >
            Apply
          </Box>
        </Box>
      </Box>
      <Stack spacing={2} marginY={{ xs: 2, sm: 4 }}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography color={'text.secondary'}>Subtotal</Typography>
          <Typography color={'text.secondary'} fontWeight={700}>
            $179,70
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography color={'text.secondary'}>Discount</Typography>
          <Typography color={'text.secondary'} fontWeight={700}>
            -$0.00
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography color={'text.secondary'}>VAT (+20%)</Typography>
          <Typography color={'text.secondary'} fontWeight={700}>
            $35,94
          </Typography>
        </Box>
        <Divider />
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h6'} fontWeight={700}>
            Order total
          </Typography>
          <Typography variant={'h6'} fontWeight={700}>
            $215,64
          </Typography>
        </Box>
        <Button
          component={Link}
          href={'/demos/ecommerce/order-complete'}
          variant={'contained'}
          size={'large'}
          fullWidth
        >
          Place an order
        </Button>
      </Stack>
    </Box>
  );
};

export default Orders;

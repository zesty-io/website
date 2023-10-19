import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SummeryBox = () => {
  return (
    <Box>
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
        <Box>
          <Box
            flex={'1 1 auto'}
            component={TextField}
            label="Discount code"
            variant="outlined"
            color="primary"
            fullWidth
            height={54}
          />
          <Box
            component={Button}
            color="primary"
            size="large"
            height={54}
            marginTop={1}
            fullWidth
            sx={{
              bgcolor: 'divider',
              color: 'text.primary',
            }}
          >
            Apply the code
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
          href={'/demos/ecommerce/checkout'}
          variant={'contained'}
          size={'large'}
          fullWidth
        >
          Checkout
        </Button>
      </Stack>
    </Box>
  );
};

export default SummeryBox;

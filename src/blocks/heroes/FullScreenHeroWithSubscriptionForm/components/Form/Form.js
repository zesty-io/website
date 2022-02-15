import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { alpha, useTheme } from '@mui/material/styles';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const Form = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          color={'primary'}
          component={'span'}
          variant="h3"
          fontWeight={700}
          sx={{
            background: `linear-gradient(180deg, transparent 82%, ${alpha(
              theme.palette.secondary.main,
              0.3,
            )} 0%)`,
          }}
        >
          Learn new skills,
        </Typography>
        <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
          gain more experience
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Our mission is to spread education that is easy accessible and
          everyone can learn.
        </Typography>
      </Box>
      <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
        <Box marginBottom={2}>
          <Typography variant="body1" component="p">
            Join over 5000 subscribers for our newsletter
          </Typography>
        </Box>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              flex={'1 1 auto'}
              component={TextField}
              label="Enter your email"
              variant="outlined"
              color="primary"
              fullWidth
              height={54}
            />
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
        <Typography
          variant="body1"
          component="p"
          color="text.primary"
          sx={{ textTransform: 'uppercase' }}
        >
          Trusted by industry leading companies
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
          {mock.map((item, i) => (
            <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
              <Box
                component="img"
                height={1}
                width={1}
                src={item}
                alt="..."
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Form;

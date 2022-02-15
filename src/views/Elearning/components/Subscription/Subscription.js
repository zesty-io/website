/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Subscription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box component={Card} boxShadow={4} paddingY={3}>
        <CardContent>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box marginBottom={4}>
              <Typography
                variant="h4"
                align={'center'}
                data-aos={'fade-up'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Subscribe to our newsletter
              </Typography>
              <Typography
                variant="h6"
                align={'center'}
                color={'text.secondary'}
                data-aos={'fade-up'}
              >
                Don't lose a chance to be among the firsts to know about our
                upcoming news and updates.
              </Typography>
            </Box>
            <Box
              width={1}
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              justifyContent={'center'}
            >
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ maxWidth: { xs: 1, sm: 400 }, width: 1 }}
              >
                <OutlinedInput placeholder="Enter your email" />
              </FormControl>
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                height={54}
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                }
              >
                Subscribe
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Subscription;

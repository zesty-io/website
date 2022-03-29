import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const LogoGridSimpleCentered = ({ title, imageCollection, description }) => {
  const theme = useTheme();
  const images =
    imageCollection?.map(
      (e) => e.customer_logo?.data && e.customer_logo?.data[0]?.url,
    ) || mock;

  return (
    <Container>
      <Box sx={{ padding: '5rem 0' }}>
        <Box marginBottom={4}>
          {title && (
            <Typography
              gutterBottom
              align={'center'}
              variant={'p'}
              component={'h3'}
              fontWeight={700}
              fontSize={'24px'}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              color={'text.secondary'}
              align={'center'}
              variant={'h6'}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box display="flex" gap={4} flexWrap="wrap" justifyContent={'center'}>
          {images.map((item, i) => (
            <Box marginTop={2} key={i}>
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
    </Container>
  );
};

export default LogoGridSimpleCentered;

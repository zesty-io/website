import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

const mock = [
  {
    title: '2022',
    subtitle:
      'Modified to represent a new wave of expressive no-code features and data utility while paying homeage to the original.',
    icon: 'https://brand.zesty.io/zesty-io-logo.svg',
  },
  {
    title: '2019',
    subtitle:
      'Fins added to the original Z to represent the full move to the 100% open API and headless nature of the product.',
    icon: 'https://brand.zesty.io/zesty-io-2019-brandmark.png',
  },
  {
    title: '2015',
    subtitle:
      'A flatten version of the original logo to repsensent simplcity and pronouce the brackets.',
    icon: 'https://brand.zesty.io/zesty-io-2015-brandmark.png',
  },
  {
    title: '2011',
    subtitle:
      'A Z made from <HTML> code angle brackets that uses mulitple hues of orange to represent depth beyond HTML.',
    icon: 'https://brand.zesty.io/zesty-io-2011-brandmark.png',
  },
];

const BrandHistory = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Brandmark History
        </Typography>
        <Typography fontWeight={700} variant={'h4'}>
          The Brand Evolved with the Product
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <img
                  width={80}
                  height={80}
                  marginBottom={2}
                  src={item.icon}
                />
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandHistory;

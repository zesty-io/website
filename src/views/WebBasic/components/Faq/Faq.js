import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Share Requirements',
    subtitle:
      'You provide details about the services you\'re looking for, ideal budget, and timeline.',
  },
  {
    title: 'We Identify Best-Fits',
    subtitle:
      'We anonymize your project brief and send it to the service providers who meet your requirements.',
  },
  {
    title: 'Get Matched',
    subtitle:
      'We introduce you to 1-4 best-fit service providers via email within 24 hours of the free consultation.',
  },
  {
    title: 'Begin Discussions',
    subtitle:
      'You take it from there. Typically, companies will reach out to schedule introductory calls within a few days of connecting.',
  },
  {
    title: 'Share Requirements',
    subtitle:
      'You provide details about the services you\'re looking for, ideal budget, and timeline.',
  },
  {
    title: 'We Identify Best-Fits',
    subtitle:
      'We anonymize your project brief and send it to the service providers who meet your requirements.',
  },
  {
    title: 'Get Matched',
    subtitle:
      'We introduce you to 1-4 best-fit service providers via email within 24 hours of the free consultation.',
  },
  {
    title: 'Begin Discussions',
    subtitle:
      'You take it from there. Typically, companies will reach out to schedule introductory calls within a few days of connecting.',
  },
];

const Faq = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                <Box
                  borderRadius={'100%'}
                  bgcolor={'secondary.main'}
                  marginRight={2}
                  width={40}
                  height={40}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography
                    variant={'h6'}
                    sx={{ fontWeight: 600, color: theme.palette.common.white }}
                  >
                    ?
                  </Typography>
                </Box>
                <Typography variant={'h6'} gutterBottom fontWeight={500}>
                  {item.title}
                </Typography>
              </Box>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;

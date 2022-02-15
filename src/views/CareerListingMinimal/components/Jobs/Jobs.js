import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const mock = [
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
  },
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
  },
];

const Jobs = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Our process to find you a new job is fast
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Fill out our standardized application on our platform.
          <br />
          Most applicants finish in under an hour.
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Start searching
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box
              component={Card}
              variant={'outlined'}
              bgcolor={'transparent'}
              sx={{
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              <Box
                component={CardContent}
                display={'flex'}
                alignItems={'center'}
              >
                <Box
                  display={'flex'}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  flex={'1 1 100%'}
                  justifyContent={{ sm: 'space-between' }}
                  alignItems={{ sm: 'center' }}
                >
                  <Typography
                    variant={'h6'}
                    fontWeight={700}
                    sx={{ marginBottom: { xs: 1, sm: 0 } }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant={'subtitle1'} color={'text.secondary'}>
                    {`${item.location} / ${item.type}`}
                  </Typography>
                </Box>
                <Box marginLeft={2} color={'primary.main'}>
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={{ xs: 30, sm: 40 }}
                    height={{ xs: 30, sm: 40 }}
                    sx={{ cursor: 'pointer' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;

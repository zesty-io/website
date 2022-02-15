import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
  {
    color: colors.blue[500],
    title: 'Web design',
    jobTitle: 'Web designer internship',
    type: 'Full time',
    location: 'Milan, Italy',
  },
  {
    color: colors.purple[500],
    title: 'Business analytics',
    jobTitle: 'Senior business analysts',
    type: 'Full time',
    location: 'Rome, Italy',
  },
  {
    color: colors.amber[500],
    title: 'photography',
    jobTitle: 'Mid-level photographer',
    type: 'Remote',
    location: 'Yerevan, Armenia',
  },
  {
    color: colors.indigo[500],
    title: 'Video creating',
    jobTitle: 'Senior video creator',
    type: 'Part time',
    location: 'Paris, France',
  },
  {
    color: colors.pink[500],
    title: 'Health & fitness',
    jobTitle: 'Expert fitness consultant',
    type: 'Remote',
    location: 'Yerevan, Armenia',
  },
  {
    color: colors.green[500],
    title: 'marketing',
    jobTitle: 'Senior digital marketing specialist',
    type: 'Full time',
    location: 'Milan, Italy',
  },
  {
    color: colors.deepOrange[500],
    title: 'Finances & sales',
    jobTitle: 'Senior sales manager',
    type: 'Part Time',
    location: 'Paris, France',
  },
  {
    color: colors.red[500],
    title: 'Graphic design',
    jobTitle: 'Junior Graphic designer',
    type: 'Remote',
    location: 'Milan, Italy',
  },
  {
    color: colors.purple[500],
    title: 'Business analytics',
    jobTitle: 'Senior business analysts',
    type: 'Full time',
    location: 'Rome, Italy',
  },
];
const Jobs = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
          Top developer jobs listed in our portal
        </Typography>
        <Box>
          <Typography variant={'h6'} color={'text.secondary'}>
            We get thousands of job postings weekly, but only accept the
            openings at the top companies.{' '}
            <Link
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              Set career interests{' '}
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
                marginLeft={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={'column'}
                display={'flex'}
                sx={{
                  '&:hover': {
                    borderRight: `${theme.spacing(1 / 2)} solid ${item.color}`,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    padding={1 / 2}
                    marginBottom={2}
                    bgcolor={item.color}
                    borderRadius={2}
                  >
                    <Typography
                      variant={'caption'}
                      align={'center'}
                      sx={{ color: theme.palette.common.white }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.jobTitle}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={1}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.type}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
          <Button
            variant={'contained'}
            size={'large'}
            endIcon={
              <Box
                component={'svg'}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobs;

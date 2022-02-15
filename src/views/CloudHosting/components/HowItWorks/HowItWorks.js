import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Share',
    icon: (
      <Box
        component={'svg'}
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color={'primary.main'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.402 9 12c0-.402-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.640 3.316m-6.640-6l6.640-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </Box>
    ),
  },
  {
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Send Message',
    icon: (
      <Box
        component={'svg'}
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color={'primary.main'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </Box>
    ),
  },
  {
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Upload',
    icon: (
      <Box
        component={'svg'}
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color={'primary.main'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </Box>
    ),
  },
];

const HowItWorks = () => {
  return (
    <Box width={1} height={1} data-aos={'fade-up'} component={Card}>
      <CardContent>
        <Box>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                color={'primary'}
                align={'center'}
              >
                Process
              </Typography>
            </Box>
            <Typography
              variant="h4"
              align={'center'}
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
                marginTop: 1,
              }}
            >
              How we work
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  component={Card}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  boxShadow={0}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box marginBottom={1}>{item.icon}</Box>
                    <Typography
                      align={'center'}
                      variant={'h6'}
                      sx={{ fontWeight: 700 }}
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography align={'center'} color="text.secondary">
                      {item.feedback}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Box>
  );
};

export default HowItWorks;

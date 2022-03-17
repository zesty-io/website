import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const mock = [
  {
    title: 'Move deals through your funnel – fast',
    subtitle:
      'Our chatbots and live chat capture more of your best leads and convert them while they’re hot.',
  },
  {
    title: 'On demand services right at your front-door',
    subtitle:
      'Our chatbots and live chat capture more of your best leads and convert them while they’re hot.',
  },
  {
    title: 'Online 24/7 support',
    subtitle:
      'Our chatbots and live chat capture more of your best leads and convert them while they’re hot.',
  },
];

const Plans = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Business grade quality for all plans
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          For entrepreneurs, startups and freelancers. If you didn’t find what
          you needed, these could help!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              height={1}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'flex-start'}
            >
              <Typography variant={'h6'} fontWeight={600} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
              <Box flexGrow={1} marginBottom={2} />
              <Button
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
                Learn more
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;

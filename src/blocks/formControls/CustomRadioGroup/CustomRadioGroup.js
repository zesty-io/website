import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    title: 'Business growth',
    description: 'For websites, apps and digital products',
    value: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Click Analytics',
    description: 'For page tracking, click detection and other interactions',
    value: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
];

const CustomRadioGroup = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={800}>
        <Typography
          variant={'h4'}
          fontWeight={700}
          align={'center'}
          gutterBottom
        >
          Choose what you want to measure
        </Typography>
        <Typography align={'center'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <FormControl component="fieldset" sx={{ width: 1, marginTop: 4 }}>
          <RadioGroup
            defaultValue="1"
            name="radio-buttons-group"
            sx={{ width: 1 }}
          >
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <Card sx={{ width: 1, p: 4, height: 1 }}>
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={
                        <Box
                          display={'flex'}
                          flexDirection={'column'}
                          alignItems={'center'}
                          height={1}
                        >
                          <Box marginBottom={4}>{item.icon}</Box>
                          <Typography fontWeight={700} align={'center'}>
                            {item.title}
                          </Typography>
                          <Typography align={'center'} color={'text.secondary'}>
                            {item.description}
                          </Typography>
                          <Box flexGrow={1} />
                        </Box>
                      }
                      sx={{
                        width: 1,
                        height: 1,
                        margin: 0,
                        '& .MuiFormControlLabel-label': { width: 1, height: 1 },
                        display: 'flex',
                        flexDirection: 'column-reverse',
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Container>
    </Box>
  );
};

export default CustomRadioGroup;

import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    title: 'Hobby',
    description: '8GB / 4CPU * 160 GB SSD disk',
    price: '$40',
    priceSuffix: '/ mo',
    value: 1,
  },
  {
    title: 'Startup',
    description: '12GB / 6CPU * 180 GB SSD disk',
    price: '$80',
    priceSuffix: '/ mo',
    value: 2,
  },
  {
    title: 'Businness',
    description: '24GB / 12CPU * 240 GB SSD disk',
    price: '$120',
    priceSuffix: '/ mo',
    value: 3,
  },
  {
    title: 'Enterprise',
    description: '64GB / 32CPU * 340 GB SSD disk',
    price: '$180',
    priceSuffix: '/ mo',
    value: 4,
  },
];

const StackedCustomRadioGroup = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={800}>
        <Typography marginBottom={2}>Choose the plan</Typography>
        <FormControl component="fieldset" sx={{ width: 1 }}>
          <RadioGroup
            defaultValue="2"
            name="radio-buttons-group"
            sx={{ width: 1 }}
          >
            {mock.map((item, i) => (
              <Card
                key={i}
                sx={{ width: 1, paddingX: { xs: 1, sm: 2 }, marginY: 1 }}
              >
                <FormControlLabel
                  value={item.value}
                  control={<Radio />}
                  label={
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 1,
                        marginY: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          fontWeight={700}
                          variant={'subtitle1'}
                          gutterBottom
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          color={'text.secondary'}
                          variant={'subtitle2'}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontWeight={700}>{item.price}</Typography>
                        <Typography
                          color={'text.secondary'}
                          variant={'caption'}
                          align={'right'}
                          component={'p'}
                        >
                          {item.priceSuffix}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  sx={{
                    width: 1,
                    '& .MuiFormControlLabel-label': { width: 1 },
                  }}
                />
              </Card>
            ))}
          </RadioGroup>
        </FormControl>
      </Container>
    </Box>
  );
};

export default StackedCustomRadioGroup;

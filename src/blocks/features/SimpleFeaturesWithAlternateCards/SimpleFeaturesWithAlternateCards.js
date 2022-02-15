import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Container from 'components/Container';

const mock = [
  {
    title: 'High quality',
    subtitle:
      'We will always give you the opportunity to get acquainted with the instrument closer.',
  },
  {
    title: 'Musical instruments',
    subtitle:
      'Our employees are always ready to come to your aid in choosing musical instruments, be it a string, keyboard, percussion or any other instrument.',
  },
  {
    title: 'Free assistance',
    subtitle:
      'You will always get professional advice on the selection of musical instruments, equipment and accessories.',
  },
];

const SimpleFeaturesWithAlternateCards = () => {
  const theme = useTheme();

  return (
    <Container>
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
            Differences
          </Typography>
          <Typography fontWeight={700} variant={'h4'}>
            What makes it different?
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
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
                  display={'flex'}
                  flexDirection={'column'}
                  bgcolor={'alternate.main'}
                >
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end', paddingX: 4 }}>
                    <Button size="large">Learn More</Button>
                  </CardActions>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleFeaturesWithAlternateCards;

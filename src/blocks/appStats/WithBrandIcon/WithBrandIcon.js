import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import Container from 'components/Container';

const mock = [
  {
    label: 'Total subscribters',
    value: '71,897',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    growth: {
      isNegative: false,
      value: '122',
    },
  },
  {
    label: 'Avg. open rate',
    value: '58.12%',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
        />
      </svg>
    ),
    growth: {
      isNegative: false,
      value: '5.4%',
    },
  },
  {
    label: 'Avg. click rate',
    value: '49.62%',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
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
    growth: {
      isNegative: true,
      value: '2.3%',
    },
  },
];

const WithBrandIcon = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={2}>
          <Typography fontWeight={700}>Last 30 days</Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Card sx={{ p: { xs: 2, md: 4 } }}>
                <List sx={{ p: 0, m: 0 }}>
                  <ListItem alignItems={'flex-start'}>
                    <ListItemIcon>
                      <Avatar
                        variant={'rounded'}
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.common.white,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    </ListItemIcon>
                    <Box marginY={0.5}>
                      <Typography color={'text.secondary'}>
                        {item.label}
                      </Typography>
                      <Typography
                        variant={'h5'}
                        color={'text.primary'}
                        fontWeight={700}
                        display={'flex'}
                        alignItems={'flex-end'}
                      >
                        {item.value}
                        <Typography
                          component={'span'}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginLeft: 1,
                            color: item.growth.isNegative
                              ? theme.palette.warning.dark
                              : theme.palette.success.dark,
                          }}
                        >
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            marginRight={0.5}
                          >
                            {item.growth.isNegative ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 17l-4 4m0 0l-4-4m4 4V3"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7l4-4m0 0l4 4m-4-4v18"
                              />
                            )}
                          </Box>
                          {item.growth.value}
                        </Typography>
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
                <Box
                  sx={{
                    m: { xs: -2, md: -4 },
                    marginTop: '16px !important',
                    paddingX: { xs: 2, md: 4 },
                    paddingY: 2,
                  }}
                  bgcolor={'alternate.main'}
                >
                  <Link color={'primary'} href="#" underline={'none'}>
                    View more
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WithBrandIcon;

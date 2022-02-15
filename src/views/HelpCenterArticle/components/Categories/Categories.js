import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    title: 'Account',
    subtitle: 'Let’s try to fix your account issues.',
    count: 8,
    icon: (
      <Box
        component={'svg'}
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
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </Box>
    ),
    color: colors.amber,
  },
  {
    title: 'Organizations',
    subtitle: 'Let’s try to fix your organizational issues.',
    count: 12,
    icon: (
      <Box
        component={'svg'}
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
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </Box>
    ),
    color: colors.red,
  },
  {
    title: 'Customization',
    subtitle: 'Let’s try to fix your customization issues.',
    count: 9,
    icon: (
      <Box
        component={'svg'}
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </Box>
    ),
    color: colors.blue,
  },
];

const Categories = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const renderContent = (title, subtitle, count, icon, color) => (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box
        component={Avatar}
        bgcolor={color[100]}
        color={color[900]}
        marginBottom={1}
        width={60}
        height={60}
      >
        {icon}
      </Box>
      <Typography variant={'h6'} fontWeight={700} align={'center'} gutterBottom>
        {title}
      </Typography>
      <Typography color={'text.secondary'} align={'center'}>
        {subtitle}
      </Typography>
      <Box
        paddingY={1 / 2}
        paddingX={1}
        bgcolor={'secondary.main'}
        borderRadius={2}
        marginTop={2}
      >
        <Typography
          variant={'caption'}
          fontWeight={700}
          sx={{ color: 'common.black' }}
        >
          {count} answers
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Related Help Center Categories
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          For entrepreneurs, startups and freelancers. If you didn’t find what
          you needed, these could help!
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Contact us
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
          >
            Read more
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                borderTop: `2px solid ${item.color[900]}`,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              <CardContent sx={{ padding: 3 }}>
                {renderContent(
                  item.title,
                  item.subtitle,
                  item.count,
                  item.icon,
                  item.color,
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;

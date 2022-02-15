import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/slack.svg',
    name: 'Slack',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/dropbox.svg',
    name: 'Dropbox',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
    name: 'Google Drive',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
    name: 'Google Ad Manager',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
    name: 'Atlassian',
  },
];

const Users = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          BUILD UP A COMMUNITY
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Join the biggest community of users
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          For entrepreneurs, startups and freelancers.
          <br />
          Build a beautiful, modern website with flexible, fully customizable,
          atomic MUI components.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            startIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                width={20}
                height={20}
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            }
          >
            Download
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
            See pricing
          </Box>
        </Box>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: 800,
          margin: '0 auto',
        }}
        data-aos="fade-up"
      >
        {mock.map((item, index) => (
          <Grid
            item
            container
            key={index}
            xs={4}
            direction={index < 3 ? 'row' : 'row-reverse'}
          >
            <Grid item xs={6}>
              <Avatar
                src={item.logo}
                sx={{
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  padding: 2,
                  boxShadow: 4,
                  marginTop: 1,
                }}
                data-aos="zoom-in"
                data-aos-once="false"
              />
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Users;

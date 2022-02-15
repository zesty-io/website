import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

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

const Partners = () => {
  return (
    <Grid container spacing={0}>
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
                bgcolor: 'background.paper',
              }}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Partners;

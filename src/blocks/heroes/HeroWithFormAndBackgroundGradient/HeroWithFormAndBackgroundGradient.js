import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

import { Headline } from './components';
import { Button, Card, Divider, TextField, Typography } from '@mui/material';
import { zestyLink } from 'lib/zestyLink';
import FillerContent from 'components/FillerContent';

const FormCustom = ({ content }) => {
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
      <Typography
        variant={'p'}
        component={'h2'}
        textAlign={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
          color: theme.palette.common.black,
        }}
      >
        {content.title || FillerContent.header}
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={'column'} paddingTop={6}>
          <Box display={'flex'} gap={4} marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="First name"
              variant="outlined"
              color="primary"
              size="medium"
              name="firstName"
              fullWidth
            />
            <TextField
              sx={{ height: 54 }}
              label="Last name"
              variant="outlined"
              color="primary"
              size="medium"
              name="lastName"
              fullWidth
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Company"
              type="text"
              variant="outlined"
              color="primary"
              size="medium"
              name="company"
              fullWidth
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Email"
              type="email"
              variant="outlined"
              color="primary"
              size="medium"
              name="email"
              fullWidth
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Job Title"
              type="text"
              variant="outlined"
              color="primary"
              size="medium"
              name="jobRole"
              fullWidth
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              label="Message"
              type="text"
              variant="outlined"
              color="primary"
              size="medium"
              name="message"
              fullWidth
              multiline
              rows={5}
            />
          </Box>
          <Box>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="secondary"
              size="medium"
              fullWidth
              type="submit"
            >
              Request Now
            </Button>
          </Box>
          {/* <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
            <Divider />
          </Box> */}
          {/* <Box>
            <Typography component="p" variant="body2" align="left">
              By creating you account you agree to our{' '}
              <Box
                component="a"
                href={
                  zestyLink(content.navigationTree, '7-713ae23-wg19b5') ||
                  FillerContent.href
                }
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Privacy Policy
              </Box>
              ,{' '}
              <Box
                component="a"
                href={
                  zestyLink(content.navigationTree, '7-713b244-30r3bw') ||
                  FillerContent.href
                }
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Data Policy
              </Box>{' '}
              and{' '}
              <Box
                component="a"
                href={
                  zestyLink(content.navigationTree, '7-713ae23-wg19b5') ||
                  FillerContent.href
                }
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Cookie Policy
              </Box>
              .
            </Typography>
          </Box> */}
        </Box>
      </form>
    </Box>
  );
};

const Hero = ({ title, description, imageCollection, content }) => {
  const theme = useTheme();

  const images = imageCollection?.map(
    (e) => e.customer_logo?.data && e.customer_logo?.data[0]?.url,
  );

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://assets.maccarianagency.com/backgrounds/img19.jpg) no-repeat center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid paddingY={6} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Headline
                title={title}
                description={description}
                images={images}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <FormCustom content={content} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

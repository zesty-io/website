/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';
import WYSIWYGRender from 'components/globals/WYSIWYGRender';
import MuiMarkdown from'mui-markdown';
import { useMediaQuery } from '@mui/material';

const FeaturesWithMobileScreenshot = ({
  header,
  content,
  image,
  index,
  feature_list_h1,
  background_color = "",
  text_color = ''
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{background: background_color ? background_color : '',  py:5}}  >
      <Container>
          {feature_list_h1 && (
        <Typography
          variant="p"
          component="h2"
          sx={{
            color: text_color ? text_color : theme.palette.zesty.zestyZambezi,
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '32px',
          }}
        >
          {feature_list_h1 || FillerContent.header}
        </Typography>
      )}
      <Grid
        display={'flex'}
        flexDirection={
          isMobile ? 'column' : index !== 1 ? 'row' : 'row-reverse'
        }
        container
        spacing={4}
        paddingX={4}
      >
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          order={{ xs: 3, sm: 2 }}

        >
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700,    color: text_color ? text_color : theme.palette.zesty.zestyZambezi, }} gutterBottom>
                {header}
              </Typography>
            </Box>
            <Grid container order={{ sm: 2, md: 1 }}>
              <MuiMarkdown overrides={{
                p: {
                  component: Typography,
                  props: {
                    sx: {
                       color: text_color ? text_color : theme.palette.zesty.zestyZambezi,
                    }
                  }
                },
                li: {
                  component: Typography,
                  props: {
                    component:'li',
                    sx: {
                       color: text_color ? text_color : theme.palette.zesty.zestyZambezi,
                    }
                  }
                }
              }}>
                {content || FillerContent.rich_text}
              </MuiMarkdown>

            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: 'transparent',
            backgroundImage: '',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
          order={{ sm: 1, md: 2 }}
        >
          <Box
            component={'img'}
            src={
              image
                ? image
                : theme.palette.mode === 'light'
                ? FillerContent.mobileImage.light
                : FillerContent.mobileImage.dark
            }
            alt={header || FillerContent.header}
            width={1}
            height={1}
            sx={{
              marginBottom: isMobile ? '3rem' : '1rem',
              objectFit: 'contain',
              borderRadius: '2.5rem',
              transform: isMobile ? 'scale(.80)' : 'scale(.70)',
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
        </Container>
    </Box>
  );
};

export default FeaturesWithMobileScreenshot;

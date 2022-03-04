/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Careers 
 * Name: careers 
 * Model ZUID: 6-b8cedca7dc-0fn9z5
 * File Created On: Fri Mar 04 2022 06:48:01 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * careers (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b8cedca7dc-0fn9z5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// component imports
import Container from 'components/Container';

function Career({ content }) {
  const theme = useTheme();
  return (
    <>
      {/* primary Box */}
      <Box>
        {/* Hero - start */}
        <Box
          sx={{
            position: 'relative',
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Box>
              <Box
                marginBottom={{ xs: 0, sm: 4 }}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  align={'center'}
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  Work with us
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align={'center'}
                  sx={{ marginBottom: 2 }}
                >
                  Work hard with highly motivated team of talented people and
                  great teammates to launch
                  <br />
                  perfectly crafted products you will love.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={
                    <svg
                      width={16}
                      height={16}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  }
                >
                  See job openings
                </Button>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <Grid
                  item
                  container
                  justifyContent={'flex-end'}
                  alignItems={'flex-end'}
                  xs={4}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      width: '80%',
                      height: '80%',
                      display: 'flex !important',
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    borderRadius={2}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img21.jpg'
                    }
                    alt="..."
                    effect="blur"
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={'flex-start'}
                  alignItems={'flex-end'}
                  xs={8}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      display: 'flex !important',
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    borderRadius={2}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img22.jpg'
                    }
                    alt="..."
                    effect="blur"
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={'flex-end'}
                  alignItems={'flex-start'}
                  xs={8}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      display: 'flex !important',
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    borderRadius={2}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img24.jpg'
                    }
                    alt="..."
                    effect="blur"
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  xs={4}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      width: '80%',
                      height: '80%',
                      display: 'flex !important',
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    borderRadius={2}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img25.jpg'
                    }
                    alt="..."
                    effect="blur"
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.6)'
                          : 'none',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        {/* Hero - end */}
        {/* CompanyValues - start */}
        <Container></Container>
        {/* CompanyValues - end */}

        {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
        {/* <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
             <div>{content.meta.web.seo_meta_description}</div> */}
        <div
          style={{
            background: '#eee',
            border: '1px #000 solid',
            margin: '10px',
            padding: '20px',
          }}
        >
          <h2>Accessible Zesty.io JSON Object</h2>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
        {/* End of Zesty.io output example */}
      </Box>
    </>
  );
}

export default Career;

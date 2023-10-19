/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Demos 
 * Name: demos 
 * Model ZUID: 6-ccf3cd8a82-16sw3z
 * File Created On: Thu Mar 10 2022 10:14:31 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * header_title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccf3cd8a82-16sw3z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { colors, Container } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';

const DemoComp = ({ demos }) => {
  const theme = useTheme();
  const data = demos || FillerContent.demos;
  return (
    <Box>
      <Box>
        <Typography
          variant={'h3'}
          fontWeight={700}
          align={'center'}
          gutterBottom
        >
          Ready to use, complete demo pages
          <br />
          for your MUI project
        </Typography>
        <Typography variant={'h6'} color={'text.secondary'} align={'center'}>
          Professionally designed, fully responsive, expertly crafted
          <br />
          demo pages you can use in your MUI projects and customize to your
          heart’s content.
        </Typography>
      </Box>
      <Box>
        {data.map((item, i) => (
          <Grid
            key={i}
            container
            spacing={{ xs: 4, sm: 6, md: 8 }}
            sx={{ my: { xs: 4, sm: 6, md: 8 } }}
          >
            <Grid item alignItems={'center'} xs={12} md={6}>
              <Stack
                sx={{
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  width: 1,
                  height: 1,
                }}
                spacing={{ xs: 2, sm: 4 }}
              >
                <Box
                  sx={{
                    p: '4px 8px',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.text.primary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant={'caption'} fontWeight={700}>
                    {item.pages} pages
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant={'h4'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" variant={'h6'}>
                    {item.description}
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  href={item.href}
                  target={'_blank'}
                  size={'large'}
                  variant={'contained'}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      width={24}
                      height={24}
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </Box>
                  }
                >
                  {item.btnText}
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box position={'relative'} width={1} height={1}>
                <Box
                  component={'img'}
                  src={`${
                    theme.palette.mode === 'light'
                      ? item.illustration
                      : item.illustrationDark
                  }`}
                  alt={item.title}
                  loading={'lazy'}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    position: 'relative',
                    width: 1,
                    height: 1,
                    zIndex: 2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? alpha(colors[item.bgcolor][50], 0.5)
                        : colors[item.bgcolor][50],
                    borderRadius: 2,
                    zIndex: 1,
                    top: {
                      xs: theme.spacing(2),
                      sm: theme.spacing(3),
                      md: theme.spacing(4),
                    },
                    left: {
                      xs: theme.spacing(-2),
                      sm: theme.spacing(-3),
                      md: theme.spacing(-4),
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

const DocumentationComp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h4'} fontWeight={700} align={'center'} gutterBottom>
        Documentation
      </Typography>
      <Typography variant={'h6'} color={'text.secondary'} align={'center'}>
        Components, plugins, and build tools are all thoroughly documented with
        live examples and markup
        <br />
        for easier use and customization.
      </Typography>
      <Button
        component={Link}
        href={'/docs/introduction'}
        target={'_blank'}
        size={'large'}
        variant={'contained'}
        sx={{ marginTop: 2 }}
        endIcon={
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            width={24}
            height={24}
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </Box>
        }
      >
        Browse Documentation
      </Button>
      <Box
        component={'img'}
        src={
          'https://assets.maccarianagency.com/screenshots/the-front-documentation.png'
        }
        loading={'lazy'}
        sx={{
          width: 1,
          maxWidth: 800,
          height: 'auto',
          borderRadius: 2,
          boxShadow: 4,
          mt: { xs: 4, sm: 8 },
        }}
      />
    </Box>
  );
};

function Demo() {
  return (
    <>
      <Container>
        <DemoComp />
      </Container>
      <Container>
        <Box
          bgcolor={'alternate.main'}
          py={{ xs: 4, sm: 8 }}
          px={{ xs: 2, sm: 8 }}
          borderRadius={2}
        >
          <DocumentationComp />
        </Box>
      </Container>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
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
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Demo;

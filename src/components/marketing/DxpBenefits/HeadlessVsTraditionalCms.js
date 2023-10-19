/**
 * MUI Imports
 * */
import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const HeadlessVsTraditionalCms = ({ header, data }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const checkMark = 'https://kfg6bckb.media.zestyio.com/check-mark.svg';
  const xMark = 'https://kfg6bckb.media.zestyio.com/x-mark.svg';

  return (
    <Box
      component="section"
      sx={{ py: 10, background: theme.palette.zesty.zestyWhite }}
    >
      <Container>
        <MuiMarkdown
          options={{
            overrides: {
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
              span: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    mt: 2,
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: 'center',
                  },
                },
              },
            },
          }}
        >
          {header || FillerContent.headerAndDescription}
        </MuiMarkdown>
        <Box sx={{ background: theme.palette.zesty.pureWhite, mt: 5, p: 5 }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={5} md={2}>
              <VsTitle title="Headless" textAlign={isSmall && 'left'} />
            </Grid>
            <Grid item xs={2} md={8}></Grid>
            <Grid item xs={5} md={2}>
              <VsTitle title="Traditional" textAlign={isSmall && 'right'} />
            </Grid>
            <Grid item xs={12}></Grid>
            {data?.map((item, idx, row) => (
              <>
                <Grid
                  item
                  key={idx}
                  xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ZestyImage
                    width={50}
                    height={50}
                    alt="check mark"
                    style={{ width: '100%', maxWidth: 50, height: 'auto' }}
                    src={checkMark || FillerContent.photos[0].src}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    component="h3"
                    variant="h5"
                    sx={{
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                    }}
                  >
                    {item.content || FillerContent.description}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ZestyImage
                    width={50}
                    height={50}
                    alt="x mark"
                    style={{ width: '100%', maxWidth: 50, height: 'auto' }}
                    src={xMark || FillerContent.photos[0].src}
                  />
                </Grid>
                {idx + 1 !== row.length && (
                  <Grid item xs={12}>
                    <Divider style={{ width: '100%' }} />
                  </Grid>
                )}
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadlessVsTraditionalCms;

const VsTitle = ({ title, textAlign }) => {
  const theme = useTheme();

  return (
    <Typography
      component="h3"
      variant="h5"
      sx={{
        textAlign: textAlign ? textAlign : 'center',
        fontWeight: 600,
        color: theme.palette.zesty.zestyOrange,
      }}
    >
      {title}
    </Typography>
  );
};

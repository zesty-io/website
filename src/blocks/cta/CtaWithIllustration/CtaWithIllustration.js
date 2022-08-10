import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';
import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'mui-markdown';

const CtaWithIllustration = ({
  title,
  description,
  cta,
  cta_url,
  image,
  isDemoPage,
  request_demo_text,
  form_zoho_url,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          item
          xs={12}
        >
          {isDemoPage ? (
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h3',
                    sx: {
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      mt: 2,
                    },
                  },
                },
                li: {
                  component: Typography,
                  props: {
                    component: 'li',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
              }}
            >
              {request_demo_text}
            </MuiMarkdown>
          ) : (
            <Box>
              <Box marginBottom={2}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {title || 'The pro account for entrepreneurs.'}
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="text.secondary">
                  {description ||
                    `
                Much more than a bank, it is the ideal, fastest and most
                convenient financial and administrative co-driver to work with
                peace of mind.
                `}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  component={Button}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={!isMd}
                  href={cta_url || FillerContent.href}
                >
                  {cta || 'Contact sales'}
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
            <Box height={1} width={1}>
              {isDemoPage ? (
                <ZohoFormEmbed
                  height="470px"
                  width={'100%'}
                  formURL={form_zoho_url || ''}
                />
              ) : (
                <CreditCardsIllustration width={'100%'} height={'100%'} />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustration;

import {
  Box,
  useMediaQuery,
  Typography,
  useTheme,
  Stack,
  Button,
  Container,
} from '@mui/material';
import React from 'react';
import MuiMarkdown from 'markdown-to-jsx';

const UseCase = ({ header, headerColor, headerTextAlign = 'center' }) => {
  const theme = useTheme();

  const data = [
    {
      icon_image: 'https://kfg6bckb.media.zestyio.com/Compliance.png',
      header: 'Achieve compliance and security standards',
      content:
        'Make sure your customer data is secure with a platform that can support your needs. Zesty follows SOC II security protocols as well as CCPA, GDPR, and other compliance standards.',
    },
    {
      icon_image: 'https://kfg6bckb.media.zestyio.com/Own-data.png',
      header: 'Own your data',
      content:
        'Zesty is a unique cloud-native SaaS platform that allows you to own and control your own data while still benefiting from the speed and agility that SaaS platforms offer.',
    },
    {
      icon_image: 'https://kfg6bckb.media.zestyio.com/customize-workflows.png',
      header: 'Customize workflows for any team',
      content:
        'Whether you need content edits or legal approval, Zesty provides customizable user governance and workflows to match your business needs.',
    },
    {
      icon_image: 'https://kfg6bckb.media.zestyio.com/review-site-changes.png',
      header: 'Review historical changes to your site',
      content:
        'Zesty provides a robust Activity Log and Audit Report so you can review any changes made to your site, by any user, at any time. Get detailed reports per page, activity, content type, or user.',
    },
  ];
  return (
    <Box mt={10}>
      <Container>
        {header && (
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h2',
                    sx: {
                      color: headerColor
                        ? headerColor
                        : theme.palette.text.secondary,
                      fontWeight: 'bold',
                      textAlign: headerTextAlign,
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: headerColor
                        ? headerColor
                        : theme.palette.text.secondary,
                      fontWeight: 'bold',
                      textAlign: headerTextAlign,
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    mt: 2,
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.text.secondary,
                      textAlign: headerTextAlign,
                    },
                  },
                },
              },
            }}
          >
            {header || FillerContent.header}
          </MuiMarkdown>
        )}
      </Container>
      {data.map((item, index) => {
        return (
          <Stack>
            <Stack
              direction={{ xs: 'column', lg: 'row' }}
              justifyContent={{ desktopWide: 'center' }}
              sx={(theme) => ({
                [theme.breakpoints.up('xs')]: {
                  py: 4,
                  px: 2,
                },
                [theme.breakpoints.up('tablet')]: {
                  py: 4,
                  px: 4,
                },
                [theme.breakpoints.up('lg')]: {
                  maxWidth: theme.maxWidth,
                  mx: 'auto',
                  py: 4,
                  px: 14,
                  gap: 8,
                },
              })}
            >
              <Stack
                mb={{ xs: 3, tablet: 6, lg: 0 }}
                sx={{ width: { lg: '456px', desktopWide: '576px' } }}
                py={{ desktopWide: 6 }}
                order={0}
                justifyContent="center"
              >
                <Typography
                  color="primary"
                  letterSpacing="-0.02em"
                  fontWeight={800}
                  variant="h4"
                  mb="12px"
                >
                  {item.header}
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize="18px"
                  lineHeight="28px"
                  mb={3}
                >
                  {item.content}
                </Typography>

                <Stack direction="row" columnGap={2}>
                  <Button href="#" variant="contained" size="large">
                    CTA Button
                  </Button>
                </Stack>
              </Stack>
              <Stack order={1} justifyContent="center">
                <Box
                  component="img"
                  src={item.icon_image}
                  sx={(theme) => ({
                    [theme.breakpoints.up('xs')]: {
                      objectFit: 'contain',
                      maxWidth: '100%',
                      height: '100%',
                    },
                    [theme.breakpoints.up('tablet')]: {
                      maxWidth: '100%',
                      height: '420px',
                    },
                    [theme.breakpoints.up('lg')]: {
                      width: '456px',
                      height: '100%',
                    },
                    [theme.breakpoints.between(1201, 1439)]: {
                      maxWidth: '100%',
                      height: '100%',
                    },
                    [theme.breakpoints.up('desktopWide')]: {
                      width: '576px',
                      height: '420px',
                    },
                  })}
                />
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default UseCase;

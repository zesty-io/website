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
import FillerContent from 'components/globals/FillerContent';

const UseCase = ({ header, data }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
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
                    color: 'text.secondary',
                    sx: {
                      fontWeight: 'bold',
                      textAlign: 'center',
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
          <Stack key={index}>
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
                <MuiMarkdown
                  options={{
                    overrides: {
                      p: {
                        component: Typography,
                        props: {
                          fontSize: '18px',
                          lineHeight: '28px',
                          color: 'text.secondary',
                        },
                      },
                    },
                  }}
                >
                  {item?.content || FillerContent.description}
                </MuiMarkdown>

                <Stack mt={3} direction="row" columnGap={2}>
                  {item?.primaryCtaText && (
                    <Button
                      href={item.primaryCtaLink}
                      variant="contained"
                      color="primary"
                      size={isLg ? 'extraLarge' : 'large'}
                    >
                      {item.primaryCtaText}
                    </Button>
                  )}
                  {item?.secondaryCtaText && (
                    <Button
                      href={item.secondaryCtaLink}
                      variant="outlined"
                      color="primary"
                      size={isLg ? 'extraLarge' : 'large'}
                    >
                      {item.secondaryCtaText}
                    </Button>
                  )}
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

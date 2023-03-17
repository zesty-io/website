import witnessImage from '../../assets/witness.svg';
import witnessLogo from '../../assets/witnessLogo.svg';
import { Box, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const SingleTestimonial = ({
  witness = witnessImage.src,
  name = 'Dan Hakimzadeh',
  role = 'Senior Web Developer',
  logo = witnessLogo.src,
  header = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  quote = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'), {
    defaultMatches: true,
  });

  const isLG = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          py: 8,
          px: 14,
        },
      })}
    >
      <Stack
        bgcolor="grey.900"
        borderRadius="32px"
        direction={isLG ? 'row' : 'column'}
        spacing={isLG ? 4 : 0}
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            p: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            p: 6,
          },
          [theme.breakpoints.up('lg')]: {
            height: '611px',
          },
        })}
      >
        <Stack
          mb={4}
          alignItems="center"
          sx={{
            width: {
              lg: '363px',
            },
          }}
        >
          <Box
            component="img"
            src={witness}
            borderRadius="50%"
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                width: '100%',
                height: '100%',
                mb: 4,
              },
              [theme.breakpoints.up('mobile')]: {
                width: '303.14px',
                height: '280px',
              },
              [theme.breakpoints.up('lg')]: {
                width: '393px',
                height: '363px',
              },
            })}
          />
          <Typography variant="h5" color="white" fontWeight={600}>
            {name}
          </Typography>
          <Typography color="white" fontWeight={700} mb="20px">
            {role}
          </Typography>
          <Box component="img" width="132.53px" height="48px" src={logo} />
        </Stack>

        <Stack justifyContent={isLG ? 'center' : 'block'}>
          <Typography
            variant={isTablet ? 'h1' : 'h3'}
            color="white"
            fontWeight={600}
            mb={isTablet ? 4 : 3}
          >
            {header}
          </Typography>

          <Box borderLeft="4px solid white" p={2}>
            <Typography
              variant={isTablet ? 'body1' : 'body2'}
              color="white"
              style={{ whiteSpace: 'pre-line' }}
            >
              {quote}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleTestimonial;

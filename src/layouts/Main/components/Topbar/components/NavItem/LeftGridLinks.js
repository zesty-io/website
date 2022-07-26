/**
 * MUI Imports
 */

import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useMediaQuery } from '@mui/material';

const LeftGridLinks = () => {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid sx={{ mt: 2 }} container>
      <Grid item sm={12} md={6}>
        {/* Header */}
        <Box>
          <Box
            href="#"
            variant="h6"
            component="a"
            sx={{
              fontWeight: 900,
              fontSize: isLg ? 14 : 'inherit',
              pb: 0.5,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: theme.palette.zesty.zestyZambezi,
              '&:hover': {
                color: theme.palette.zesty.zestyOrange,
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
              },
            }}
          >
            Digital Experience Platform
            <ArrowRightAltIcon />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Box
              variant="body1"
              href="#"
              sx={{
                fontSize: isLg ? 14 : 'inherit',
                fontWeight: 900,
                textDecoration: 'none',
                color: theme.palette.zesty.zestyZambezi,
                gap: 0.5,
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: theme.palette.zesty.zestyOrange,
                  textDecoration: 'underline',
                  textUnderlinePosition: 'under',
                },
              }}
              component="a"
            >
              <TrendingUpIcon
                sx={{ background: '#C7F9FF', borderRadius: 1, p: 0.3 }}
              />
              DXP Benefits
            </Box>
          ))}
        </Box>

        <Box
          variant="overline"
          href="#"
          sx={{
            mt: 4,
            width: 350,
            fontSize: 12,
            fontWeight: 900,
            textDecoration: 'none',
            display: 'block',
            color: theme.palette.zesty.zestyTealDark,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            '&:hover': {
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
            },
          }}
          component="a"
        >
          Compare what solution is right for you
          <ArrowRightAltIcon />
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
        {/* Header */}
        <Box>
          <Box
            href="#"
            variant="h6"
            component="a"
            sx={{
              fontSize: isLg ? 14 : 'inherit',
              fontWeight: 900,
              pb: 0.5,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: theme.palette.zesty.zestyZambezi,
              '&:hover': {
                color: theme.palette.zesty.zestyOrange,
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
              },
            }}
          >
            Headless CMS
            <ArrowRightAltIcon />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {[1, 2, 3, 4].map(() => (
            <Box
              variant="body1"
              href="#"
              sx={{
                fontSize: isLg ? 14 : 'inherit',
                fontWeight: 900,
                textDecoration: 'none',
                color: theme.palette.zesty.zestyZambezi,
                gap: 0.5,
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: theme.palette.zesty.zestyOrange,
                  textDecoration: 'underline',
                  textUnderlinePosition: 'under',
                },
              }}
              component="a"
            >
              <TrendingUpIcon
                sx={{ background: '#FFE6D9', borderRadius: 1, p: 0.3 }}
              />
              DXP Benefits
            </Box>
          ))}
        </Box>

        <Box>
          <Box
            href="#"
            variant="h6"
            component="a"
            sx={{
              mt: 4,
              fontWeight: 900,
              pb: 0.5,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontSize: isLg ? 14 : 'inherit',
              color: theme.palette.zesty.zestyZambezi,
              '&:hover': {
                color: theme.palette.zesty.zestyOrange,
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
              },
            }}
          >
            Hybrid CMS
            <ArrowRightAltIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftGridLinks;

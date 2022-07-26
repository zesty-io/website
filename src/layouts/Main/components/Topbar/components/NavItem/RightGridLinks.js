/**
 * MUI Imports
 */

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useMediaQuery } from '@mui/material';

const RightGridLinks = () => {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Box sx={{ mt: 2 }}>
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
          DXP
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
        {[1, 2, 3].map(() => (
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

      <Box sx={{ mt: 4 }}>
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
        {[1, 2, 3].map(() => (
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
    </>
  );
};

export default RightGridLinks;

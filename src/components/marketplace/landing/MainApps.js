/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * Components Imports
 */
import MainCard from './MainCard';

const MainApps = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));
  return (
    <>
      <Box sx={{ pb: 10 }} component="section">
        <Box sx={{ width: '100%', maxWidth: 1600, margin: 'auto', px: 4 }}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: theme.palette.zesty.zestyLightText,
              mb: 2,
              textAlign: isExtraSmall ? 'center' : 'text-left',
            }}
          >
            Featured Apps
          </Typography>
          <Grid container spacing={isExtraSmall ? 1 : 2}>
            {[1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
              <Grid
                sx={{ margin: isExtraSmall ? 'auto' : 0 }}
                item
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <Box component={'a'} href="#" sx={{ textDecoration: 'none' }}>
                  <MainCard />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MainApps;

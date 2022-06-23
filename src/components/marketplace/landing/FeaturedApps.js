/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * Components Imports
 */
import AppCard from './FeaturedCard';

/**
 * React Imports
 */
import { useContext } from 'react';
import { MarketplaceContext } from '../MarketplaceContext';

const FeaturedApps = () => {
  const { entities, isSearching } = useContext(MarketplaceContext);

  // console.log(entities);
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));
  return (
    <>
      <Box
        hidden={isSearching}
        sx={{
          pt: 10,
        }}
        component="section"
      >
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
          <Grid container spacing={2}>
            {entities.slice(0, 3).map((item, idx) => (
              <Grid
                key={idx}
                sx={{ margin: 'auto' }}
                item
                sm={12}
                md={6}
                lg={4}
              >
                <Box component={'a'} href="#" sx={{ textDecoration: 'none' }}>
                  <AppCard {...item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedApps;

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

/**
 * React Imports
 */
import { useContext } from 'react';
import { MarketplaceContext } from '../MarketplaceContext';

const MainApps = () => {
  const { entities, isSearching } = useContext(MarketplaceContext);

  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));
  return (
    <>
      <Box sx={{ py: 10 }} component="section">
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
            {isSearching ? 'Results' : 'Apps'}
          </Typography>
          <Grid container spacing={isExtraSmall ? 1 : 2}>
            {entities.map((item, idx) => (
              <Grid
                key={idx}
                sx={{ margin: isExtraSmall ? 'auto' : 0 }}
                item
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <Box component={'a'} href="#" sx={{ textDecoration: 'none' }}>
                  <MainCard {...item} />
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

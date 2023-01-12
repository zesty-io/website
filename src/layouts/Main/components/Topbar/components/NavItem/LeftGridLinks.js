/**
 * MUI Imports
 */


import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import LinkWithIcons from './LinkWithIcons';

const LeftGridLinks = ({ route }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  // Sort the sub-navigation data array to match with the sorting on the cms
  const sortData = (data) => {
    data.sort((item1, item2) =>
      item1.sort_order > item2.sort_order
        ? 1
        : item1.sort_order < item2.sort_order
        ? -1
        : 0,
    );

    return data;
  };

  return (
    <Grid sx={{ mt: 2 }} direction={isSmall ? 'column' : 'row'} container>
      <Grid item sm={12} md={6}>
        {/* Header */}
        <Typography
          variant="caption"
          component="p"
          sx={{
            color: theme.palette.zesty.zestyLightGrey,
            fontWeight: 'bold',
            mb: 2,
            height: 20,
          }}
        >
          {route?.column_one_title || ''}
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sortData(route?.column_1_items.data).map((item, idx) => (
            <LinkWithIcons key={idx} item={item} />
          ))}
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
        {/* Header */}
        {(route?.column_two_title || !isSmall) && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              color: theme.palette.zesty.zestyLightGrey,
              fontWeight: 'bold',
              mt: isSmall && 5,
              mb: 2,
              height: 20,
            }}
          >
            {route?.column_two_title || ''}
          </Typography>
        )}


        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sortData(route?.column_2_items.data).map((item, idx) => (
            <LinkWithIcons key={idx} item={item} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftGridLinks;

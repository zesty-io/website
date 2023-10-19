/**
 * MUI Imports
 */

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeaturedLinks from './FeaturedLinks';
import LinkWithIcons from './LinkWithIcons';

const RightGridLinks = ({ route }) => {
  const theme = useTheme();

  // Sort the sub-navigation data array to match with the sorting on the cms
  const sortData = (data) => {
    if (!data) return [];
    data.sort((item1, item2) =>
      item1?.sort_order > item2?.sort_order
        ? 1
        : item1?.sort_order < item2?.sort_order
        ? -1
        : 0,
    );

    return data;
  };

  return (
    <>
      <Typography
        variant="caption"
        component="p"
        sx={{
          mt: 2,
          color: theme.palette.zesty.zestyLightGrey,
          fontWeight: 'bold',
          mb: 2,
          height: 20,
        }}
      >
        {route?.column_three_title || ''}
      </Typography>

      {/* if columns three has items it should render links instead of callout images and articles */}
      {route?.column_3_items_if_needed ? (
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sortData(route?.column_3_items_if_needed?.data).map((item, idx) => (
            <LinkWithIcons key={idx} item={item} />
          ))}
        </Box>
      ) : (
        // Render articles and callout images
        <FeaturedLinks route={route} />
      )}
    </>
  );
};

export default RightGridLinks;

/**
 * MUI Imports
 */

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';

const RightGridLinks = ({ route }) => {
  console.log(route);
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

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
      <Box sx={{ mt: 2 }}>
        {/* <Box
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
        </Box> */}
      </Box>
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
        {route?.column_three_title || ''}
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {sortData(route?.column_3_items_if_needed?.data).map((item) => (
          <Box
            variant="body1"
            href={item.external_link_if_needed}
            sx={{
              fontSize: isLg ? 14 : 'inherit',
              fontWeight: 500,
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
            <ZestyImage
              width={22}
              height={22}
              src={item?.icon_image?.data[0].url}
            />
            {item.nav_item_name || ''}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RightGridLinks;

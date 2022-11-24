/**
 * MUI Imports
 */

import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';

const LeftGridLinks = ({ route }) => {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

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
    <Grid sx={{ mt: 2 }} container>
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
          {sortData(route?.column_1_items.data).map((item) => (
            <Box
              key={item.meta.zuid}
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

        {/* <Box
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
        </Box> */}
      </Grid>
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
          {route?.column_two_title || ''}
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sortData(route?.column_2_items.data).map((item) => (
            <Box
              key={item.meta.zuid}
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
      </Grid>
    </Grid>
  );
};

export default LeftGridLinks;

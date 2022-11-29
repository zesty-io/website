/**
 * MUI Imports
 */

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';
import { useMediaQuery } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';

const LinkWithIcons = ({ item }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <>
      {item.nav_item_name && (
        <Box
          variant="body1"
          href={item.external_link_if_needed || FillerContent.href}
          sx={{
            fontSize: isLg ? 14 : 'inherit',
            fontWeight: 500,
            textDecoration: 'none',
            color: isDarkMode
              ? theme.palette.common.white
              : theme.palette.zesty.zestyZambezi,
            gap: 0.5,
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: theme.palette.zesty.zestyOrange,
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
              fontWeight: 'bold',
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
      )}
    </>
  );
};

export default LinkWithIcons;

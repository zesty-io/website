/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import { useTheme } from '@mui/material/styles';
import ZestyImage from 'blocks/Image/ZestyImage';
const FeaturedLinks = ({ route }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  /* creating an array of 4 items, then mapping over each item and returning an object with the
label, link, and image. */
  const callOutData = new Array(4)
    .fill('')
    .map((_item, index) => {
      return {
        label: route[`callout_${index + 1}_label`],
        link:
          route[`callout_${index + 1}_link`]?.data[0]?.meta.web.uri ||
          route.callout_1_external_link_if_needed,
        image:
          route[`callout_image_${index + 1}`]?.data[0]?.url ||
          route[`callout_${index + 1}_link`]?.data[0]?.hero_image?.data[0]?.url,
      };
    })
    .filter((item) => item.label != undefined);

  return (
    <Grid container spacing={2}>
      {callOutData?.map((item, idx) => (
        <Grid key={idx} item sm={12} md={callOutData.length > 2 ? 6 : 12}>
          <Box
            sx={{
              display: 'block',
              textDecoration: 'none',
              '&:hover': {
                color: theme.palette.zesty.zestyZambezi,
                textUnderlinePosition: 'under',
              },
            }}
            target="_blank"
            component="a"
            href={item.link || FillerContent.href}
          >
            <ZestyImage
              width={369}
              height={184}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 20,
                display: 'block',
                marginBottom: 10,
              }}
              src={item?.image || FillerContent.photos[0].src}
            />
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontWeight: 700,
                color: isDarkMode
                  ? theme.palette.common.white
                  : theme.palette.zesty.zestyZambezi,
              }}
            >
              {item?.label || ''}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedLinks;

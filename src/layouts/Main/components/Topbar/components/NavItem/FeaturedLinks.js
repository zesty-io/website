/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import { useTheme } from '@mui/material/styles';
const FeaturedLinks = ({ route }) => {
  const data = [1, 2, 3, 4];
  const theme = useTheme();

  // const callOutData = route.map((item) => {
  //   return {
  //     label: item.callout_1_label,
  //     link: item.callout_1_link,
  //     image: item.callout_image_1,
  //   };
  // });

  const callOutData = new Array(4)
    .fill('')
    .map((item, index) => {
      return {
        label: route[`callout_${index + 1}_label`],
        link: route[`callout_${index + 1}_link`],
        image: route[`callout_image_${index + 1}`],
      };
    })
    .filter((item) => item.label != undefined);

  console.log(callOutData);
  return (
    <Grid container spacing={2}>
      {callOutData.map((item, idx) => (
        <Grid key={idx} item sm={12} md={callOutData.length > 2 ? 6 : 12}>
          <Box
            sx={{
              mt: 4,
              display: 'block',
              textDecoration: 'none',
              '&:hover': {
                color: theme.palette.zesty.zestyZambezi,
                textUnderlinePosition: 'under',
              },
            }}
            target="_blank"
            component="a"
            href={item?.link?.data?.meta?.web?.uri || FillerContent.href}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 300,
                borderRadius: 3,
                display: 'block',
                mb: 2,
              }}
              component="img"
              src={item?.image?.data[0].url || FillerContent.photos[0].src}
            />
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontWeight: 500,
                color: theme.palette.zesty.zestyZambezi,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedLinks;

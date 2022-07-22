/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import { useTheme } from '@mui/material/styles';
const FeaturedLinks = () => {
  const data = [1, 2];
  const theme = useTheme();
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {data.map(() => (
        <Grid item sm={12} md={data.length > 2 ? 6 : 12}>
          <Box
            sx={{
              mt: 4,
              display: 'block',
              textDecoration: 'none',
              '&:hover': {
                color: theme.palette.zesty.zestyZambezi,
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
              },
            }}
            component="a"
            href="#"
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
              src={FillerContent.photos[0].src}
            />
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontWeight: ' bold',
                color: theme.palette.zesty.zestyZambezi,
              }}
            >
              Case Study Title
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedLinks;

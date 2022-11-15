/**
 * MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import Container from 'blocks/container/Container';

/**
 * Static Imports
 */
import Email from '../../../../public/assets/images/IntegrationIndividualPage/emailI.svg';
import Plane from '../../../../public/assets/images/IntegrationIndividualPage/plane.svg';

const NewsLetterSubscription = ({
  theme,
  // content,
  // FillerContent,
  // isLarge,
  isExtraLarge,
  // isMedium,
  isSmall,
}) => {
  // const formik = useFormik({
  //   onSubmit,
  // });

  // const onSubmit = (values) => {
  //   return values;
  // };

  return (
    <Box component="section">
      <Container
        sx={{
          background: theme.palette.zesty.zestyOrangeLinear,
          borderRadius: 2,
          py: 5,
          mt: 20,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: 248,
            height: 253,
            position: 'absolute',
            bottom: -34,
            left: -100,
            display: isExtraLarge ? 'none' : 'block',
          }}
          component="img"
          src={Email.src}
          alt="email icon"
        />
        <Box
          sx={{
            width: '100%',
            maxWidth: 1729,
            height: 253,
            position: 'absolute',
            top: -100,
            left: -100,
          }}
          component="img"
          src={Plane.src}
          alt="plane icon"
        />
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 900,
              color: theme.palette.common.white,
              textAlign: 'center',
            }}
          >
            Subscribe to the zestiest newsletter in the industry
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 500,
              color: theme.palette.common.white,
              textAlign: 'center',
            }}
          >
            Get the latest from the Zesty team, from whitepapers to product
            updates
          </Typography>

          <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', mt: 5 }}>
            <form
              style={{
                width: '100%',
                display: 'flex',
                gap: 5,
                flexDirection: isSmall ? 'column' : 'row',
              }}
            >
              <input
                placeholder="Email Address"
                required
                name="email"
                type="email"
                color="secondary"
                style={{
                  width: '100%',
                  maxWidth: 609,
                  height: 50,
                  background: theme.palette.common.white,
                  borderRadius: 10,
                  border: 'none',
                  paddingLeft: 15,
                }}
              />

              <Button
                sx={{
                  width: '100%',
                  maxWidth: isSmall ? '100%' : 174,
                  color: theme.palette.zesty.zestyOrange,
                  fontWeight: 'bold',
                  background: theme.palette.common.white,
                  '&:hover': {
                    background: theme.palette.common.white,
                  },
                }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsLetterSubscription;

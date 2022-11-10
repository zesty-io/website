/**
 * MUI Imports
 */
import { Box, Typography, Card, Container } from '@mui/material';
import Star from '../../../../public/assets/images/homepage/star.svg';

const Testimonial = ({
  theme,
  // isMedium,
  // isDarkMode,
  content,
  FillerContent,
}) => {
  return (
    <Box sx={{ background: theme.palette.zesty.zestyWhite }}>
      <Container sx={{ py: 5 }}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              p: 2,
              fontWeight: 'bold',
              textAlign: 'center',
              color: theme.palette.zesty.zestyZambezi,
            }}
          >
            {content.testimonial_title || FillerContent.description}
          </Typography>

          <Card
            sx={{
              p: 5,
              mt: 2,
              width: '100%',
              maxWidth: 1000,
              margin: 'auto',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
              }}
            >
              {content.testimonial.data[0].title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                mt: 2,
              }}
            >
              {content.testimonial.data[0].review}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {new Array(5).fill().map((i, index) => (
                <Box
                  key={index}
                  sx={{ display: 'inline-block' }}
                  component="img"
                  src={Star.src}
                  alt="star icon"
                />
              ))}
            </Box>

            <Typography
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
                mt: 2,
              }}
            >
              {content.testimonial.data[0].reviewer_title}
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;

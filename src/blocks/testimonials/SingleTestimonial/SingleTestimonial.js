/**
 * MUI Imports
 */
import { Box, Typography, Card, Container, useTheme } from '@mui/material';
import Star from '../../../../public/assets/images/homepage/star.svg';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';

const SingleTestimonial = ({
  title,
  testimonialData,
  // isMedium,
  // isDarkMode,
  content,
}) => {
    const theme = useTheme();

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
            {title || FillerContent.description}
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
              {testimonialData?.data[0]?.title || FillerContent.header}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                mt: 2,
              }}
            >
              {testimonialData?.data[0]?.review || FillerContent.description}
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
              {testimonialData?.data[0]?.reviewer_title || FillerContent.description}
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleTestimonial;

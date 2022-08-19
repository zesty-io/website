import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * MUI Imports
 */
import { Box, Typography, Button, Grid, Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Star from '../../../../public/assets/images/homepage/star.svg';

const Testimonial = ({
  theme,
  isMedium,
  isDarkMode,
  content,
  FillerContent,
}) => {
  console.log(content.testimonial);
  return (
    <Box sx={{ background: theme.palette.zesty.zestyDarkBlue }}>
      <Container sx={{ py: 5 }}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              pb: 2,
              fontWeight: 'bold',
              textAlign: 'center',
              color: theme.palette.common.white,
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
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
              }}
            >
              {content.testimonial.data[0].title}
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                mt: 2,
              }}
            >
              {content.testimonial.data[0].review}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {new Array(5).fill(1).map(() => (
                <Box
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

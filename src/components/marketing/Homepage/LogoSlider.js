/**
 * MUI Imports
 */

import { Box, Typography, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */
import Marquee from 'react-fast-marquee';
import ZestyImage from 'blocks/Image/ZestyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const LogoSlider = ({ content, FillerContent, theme, isMedium, cta_text }) => {
  const slideOne = [content.integrations_logos?.data];
  const slideTwo = [content.integrations_logos_2?.data];

  /**
   * It creates an array of length repeats, and then maps each element to the original array
   * @param arr - The array to repeat.
   * @param repeats - The number of times to repeat the array.
   */
  const makeRepeated = (arr, repeats) =>
    Array.from({ length: repeats }, () => arr).flat();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: `url(${content.integrations_background?.data[0].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 850,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <MuiMarkdown
        overrides={{
          h2: {
            component: Typography,
            props: {
              variant: 'h3',
              component: 'h2',
              sx: {
                color: theme.palette.zesty.zestyDarkText,
                fontWeight: 'bold',
                textAlign: 'center',
              },
            },
          },
          p: {
            component: Typography,
            props: {
              variant: 'h6',
              component: 'p',
              sx: {
                mt: 1,
                color: theme.palette.zesty.zestyZambezi,
                textAlign: 'center',
              },
            },
          },
        }}
      >
        {content.integration_title_and_description || FillerContent.description}
      </MuiMarkdown>

      {cta_text && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            target="_blank"
            sx={{ mt: 2 }}
            variant="outlined"
            color="secondary"
            component="a"
            href="/marketplace/"
          >
            {cta_text}
          </Button>
        </Box>
      )}

      <Box>
        {slideOne && (
          <Box sx={{ mt: 5 }}>
            <Marquee direction="right" gradient={false} speed={30}>
              {makeRepeated(slideOne[0], 2).map((item, index) => (
                <ZestyImage
                  width={200}
                  height={127}
                  key={index}
                  style={{ height: isMedium ? 70 : 127, width: '100%' }}
                  loading="lazy"
                  src={item.logo?.data[0].url || FillerContent.logos[0].url}
                  alt={item.name}
                />
              ))}
            </Marquee>
          </Box>
        )}
        {slideTwo && (
          <Box sx={{ mt: 5 }}>
            <Marquee gradient={false} direction="left" speed={30}>
              {makeRepeated(slideTwo[0], 2).map((item, index) => (
                <ZestyImage
                  width={200}
                  height={127}
                  key={index}
                  style={{ height: isMedium ? 70 : 127, width: '100%' }}
                  loading="lazy"
                  src={item.logo?.data[0].url || FillerContent.logos[0].url}
                  alt={item.name}
                />
              ))}
            </Marquee>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LogoSlider;

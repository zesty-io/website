/* eslint-disable valid-jsdoc */
/**
 * MUI Imports
 */

import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Marquee from 'react-fast-marquee';
import ZestyImage from 'blocks/Image/ZestyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const LogoSlider = ({ titleAndDescription, integrations_logos, integrations_logos_2, integrationsBackground, cta_text }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const slideOne = [integrations_logos];
  const slideTwo = [integrations_logos_2];

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
        py: isSmall ? 10 : 20,
        background: `url(${
          integrationsBackground || ''
        })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
     
      }}
    >
      <MuiMarkdown
        options={{
          overrides: {
            h2: {
              component: Typography,
              props: {
                variant: 'h4',
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
                  mt: 2,
                  color: theme.palette.zesty.zestyZambezi,
                  textAlign: 'center',
                },
              },
            },
          },
        }}
      >
        {titleAndDescription || FillerContent.rich_text}
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
            {cta_text || FillerContent.cta}
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
                  src={item?.logo?.data[0]?.url || FillerContent.logos[0].url}
                  alt={item?.name || ''}
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
                  src={item?.logo?.data[0]?.url || FillerContent.logos[0].url}
                  alt={item?.name || ''}
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

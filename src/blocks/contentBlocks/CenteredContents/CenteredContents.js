/**
 * MUI Imports
 * */
import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

/**
 * Component Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';

const CenteredContents = ({
  header,
  primaryCtaText,
  mainImage,
  mainImageWidth = 800,
  backgroundColor,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      paddingY={isSmall ? 4 : 10}
      sx={{ position: 'relative', background: backgroundColor }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mt: 10 }}>
          <Box sx={{px:10}}>
            <MuiMarkdown
              options={{
                overrides: {
                  span: {
                    component: Typography,
                    props: {
                      component: 'span',
                      sx: {
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        color: theme.palette.zesty.zestyOrange,
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h4',
                      sx: {
                        textAlign: 'center',
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        textAlign: 'center',
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                },
              }}
            >
              {header || FillerContent.header}
            </MuiMarkdown>
          </Box>
          {primaryCtaText && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <TryFreeButton text={primaryCtaText} variant="contained" />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            py: isSmall ? 10 : 5,
          }}
        >
          <ZestyImage
            alt={header || FillerContent.header}
            loading="eager"
            style={{
              maxWidth: mainImageWidth,
              width: '100%',
              height: 'auto',
              position: 'relative',
            }}
            width={mainImageWidth}
            src={mainImage || FillerContent.photos[0].src}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CenteredContents;

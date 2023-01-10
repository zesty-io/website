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
import DemoCta from 'components/cta/DemoCta';
import CodeBlock from 'components/cta/CodeBlock';

const CenteredContents = ({
  header,
  headerColor,
  bottomContent,
  primaryCtaText,
  secondaryCtaText,
  secondaryCtaUrl,
  mainImage,
  mainImageWidth = 800,
  backgroundColor,
  isDarkBackground = false,
  isCodeBlock = false,
  marginTop = 10,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      paddingY={isSmall ? 4 : 10}
      sx={{
        position: 'relative',
        background: isDarkBackground
          ? theme.palette.zesty.zestyDarkBlue
          : backgroundColor,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mt: marginTop }}>
          <Box sx={{ px: !isSmall && 10 }}>
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
                  h1: {
                    component: Typography,
                    props: {
                      component: 'h1',
                      variant: 'h3',
                      sx: {
                        textAlign: 'center',
                        color: isDarkBackground
                          ? theme.palette.common.white
                          : headerColor
                          ? headerColor
                          : theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
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
                        color: isDarkBackground
                          ? theme.palette.common.white
                          : headerColor
                          ? headerColor
                          : theme.palette.zesty.zestyZambezi,
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
                        color: isDarkBackground
                          ? theme.palette.common.white
                          : theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                },
              }}
            >
              {header || FillerContent.headerAndDescription}
            </MuiMarkdown>

            {isCodeBlock && (
              <Box
                sx={{
                  border: `1px solid ${theme.palette.common.white}`,
                  borderRadius: 1,
                  width: '100%',
                  maxWidth: 470,
                  margin: 'auto',
                  filter: 'drop-shadow(4px 4px 30px rgba(176, 176, 176, 0.25))',
                  mt: 2,
                }}
              >
                <CodeBlock />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isSmall ? 'column' : 'row',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            {primaryCtaText && (
              <TryFreeButton
                fullWidth={true}
                text={primaryCtaText}
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  width: '100%',
                  maxWidth: isSmall ? '100%' : 174,
                  fontWeight: 'bold',
                }}
              ></TryFreeButton>
            )}

            {secondaryCtaText && (
              <DemoCta
                icon={false}
                fullWidth={isSmall}
                sx={{
                  width: '100%',
                  maxWidth: isSmall ? '100%' : 174,
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyOrange,
                  background: theme.palette.common.white,
                }}
                text={secondaryCtaText || FillerContent.cta}
                href={secondaryCtaUrl || FillerContent.href}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
          {bottomContent && (
            <MuiMarkdown
              options={{
                overrides: {
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        textAlign: 'center',
                        my: 5,
                        color: isDarkBackground
                          ? theme.palette.common.white
                          : theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                },
              }}
            >
              {bottomContent || FillerContent.headerAndDescription}
            </MuiMarkdown>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CenteredContents;

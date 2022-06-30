/**
 * MUI Imports
 */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

const Features = ({ content, theme, isMobile }) => {
  const arr = content?.features?.data ? content.features.data : [];

  const bracketImg =
    content.dxp_background_images?.data[0]?.url ||
    FillerContent.dashboard_image;
  return (
    <Box
      paddingBottom={isMobile ? 20 : 20}
      sx={{
        position: 'relative',
        zIndex: '500',
        background: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 4 : 10}
            paddingBottom={isMobile ? 4 : 10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
              fontSize: isMobile ? '24px' : '48px',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.features_header,
                'Zesty',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          {arr.map((e) => {
            return (
              <div data-aos="zoom-in-down">
                <Card
                  sx={{
                    width: '20rem',
                    height: '22rem',
                    padding: '3rem 2rem',
                    background: theme.palette.common.white,
                  }}
                >
                  <img src={e.icon_image.data[0].url} alt="" />

                  <Typography
                    component={'p'}
                    variant={'p'}
                    paddingTop={4}
                    paddingBottom={2}
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      textAlign: 'left',
                      fontSize: '20px',
                    }}
                  >
                    {e?.feature_name}
                  </Typography>
                  <Typography
                    component={'h2'}
                    variant={'p'}
                    sx={{
                      color: theme.palette.common.dark,
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: 'light',
                    }}
                  >
                    {e?.content}
                  </Typography>
                </Card>
              </div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

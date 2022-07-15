/**
 * MUI Imports
 */
import { Box, Card, Container, Typography } from '@mui/material';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

/**
 * Local assets
 */
import chevronLeft from '../../../../public/assets/images/chevron-left.svg';

const Features = ({
  content,
  theme,
  isMobile,
  isDarkMode,
  FillerContent,
  textHighlight = 'Zesty',
}) => {
  const arr = content?.features?.data ? content.features.data : [];

  const bracketImg = chevronLeft.src || FillerContent.dashboard_image;
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
        <Box sx={{ py: 10 }}>
          <Typography
            component={'h2'}
            variant={'p'}
            sx={{
              color: isDarkMode
                ? theme.palette.zesty.zestyDarkBlue
                : theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontSize: isMobile ? '24px' : '48px',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.features_header || FillerContent.header,
                textHighlight,
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: 'center',
              color: isDarkMode
                ? theme.palette.zesty.zestyDarkBlue
                : theme.palette.zesty.zestyZambezi,
            }}
          >
            {content.feature_description || ''}
          </Typography>
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
              <div>
                <Card
                  sx={{
                    width: '20rem',
                    height: '22rem',
                    padding: '3rem 2rem',
                    background: theme.palette.common.white,
                  }}
                >
                  <img src={e.icon_image?.data[0].url} alt="" />

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
                      color: isDarkMode
                        ? theme.palette.zesty.zestyDarkBlue
                        : theme.palette.secondary.darkCharcoal,
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

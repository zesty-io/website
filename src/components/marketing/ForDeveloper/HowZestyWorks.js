/**
 * MUI Imports
 */

import { Box, Typography, Card, Grid } from '@mui/material';
import Container from 'blocks/container/Container';

/**
 * Components Imports
 */
import ZestyImage from 'blocks/Image/ZestyImage';

const HowZestyWorks = ({
  header,
  teamLinks,
  FillerContent,
  theme,
  isSmall,
  isDarkMode,
}) => {
  return (
    <Box
      sx={{
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.zesty.zestyWhite,
        py: isSmall ? 12 : 20,
        position: 'relative',
        overflow: 'hidden',
      }}
      component="section"
    >
      <Container>
        <Box>
          <Grid
            sx={{
              position: 'relative',
            }}
            justifyContent="center"
            alignItems="center"
            spacing={4}
            container
          >
            <Grid
              sx={{
                width: '100%',
              }}
              item
              sm={12}
              md={4}
            >
              <Box>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyZambezi,
                  }}
                >
                  {header}
                </Typography>
              </Box>
            </Grid>
            {teamLinks?.data?.map((item, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Card
                  component="a"
                  href="#"
                  sx={{
                    width: '100%',
                    margin: 'auto',
                    position: 'relative',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  <ZestyImage
                    alt={item.page_title || FillerContent.description}
                    loading="lazy"
                    style={{ width: '100%' }}
                    width={475}
                    height="auto"
                    src={
                      item.page_graphic?.data[0].url ||
                      FillerContent.photos[0].src
                    }
                  />

                  <Box
                    sx={{
                      height: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: 1,
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        mt: -2,
                        color: theme.palette.zesty.zestyDarkText,
                      }}
                    >
                      {item.page_title || FillerContent.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HowZestyWorks;

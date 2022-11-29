/**
 * MUI Imports
 */
import { Box, Typography, Card, Grid, useTheme } from '@mui/material';

import Container from 'blocks/container/Container';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';

const CardsInContainer = ({ title, data }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box component="section">
      <Container
        sx={{
          py: 10,
          mt: 15,
          background: isDarkMode
            ? theme.palette.zesty.zestyDarkBlue
            : theme.palette.zesty.zestyBackgroundBlue,
          borderRadius: 5,
        }}
      >
        {/* <Typography
          variant="h4"
          component="h2"
          sx={{
            color: isDarkMode
              ? theme.palette.common.white
              : theme.palette.zesty.zestyDarkText,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {title || FillerContent.description}
        </Typography> */}
        <MuiMarkdown
          options={{
            overrides: {
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: isDarkMode
                      ? theme.palette.common.white
                      : theme.palette.zesty.zestyDarkText,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
              span: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: isDarkMode
                      ? theme.palette.common.white
                      : theme.palette.zesty.zestyDarkText,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                },
              },
            },
          }}
        >
          {title || FillerContent.description}
        </MuiMarkdown>
        <Grid sx={{ mt: 5 }} container spacing={2}>
          {data.map((item, index) => (
            <Grid key={index} item sm={12} md={4} sx={{ width: '100%'}}>
              <Card
                component={item.url && 'a'}
                target={item.url && '_blank'}
                href={item.url}
                sx={{
                  py: 5,
                  px: 2,
                  minHeight: item.content ? 355 : 244,
                  textDecoration: 'none',
                 
                  margin: 'auto',
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{ width: '100', maxWidth: 78 }}
                    component="img"
                    src={item.icon_image}
                    alt={item.title}
                  />
                </Box>
                <Box sx={{ mt: 5 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 'bold', textAlign: 'center' }}
                  >
                    {item.title || FillerContent.description}
                  </Typography>
                  {item.content && (
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        textAlign: 'center',
                        color: theme.palette.zesty.zestyZambezi,
                        mt: 2,
                      }}
                    >
                      {item.content || FillerContent.description}
                    </Typography>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardsInContainer;

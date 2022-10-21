/**
 * MUI Imports
 */
import { Box, Typography, Card, Grid } from '@mui/material';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';

const Documentation = ({
  theme,
  header,
  documentations,
  isSmall,
  FillerContent,
  isDarkMode,
}) => {
  return (
    <Box component="section">
      <Container
        sx={{
          py: isSmall ? 15 : 6,
          mt: isSmall ? 0 : 10,
          mb: isSmall ? 0 : 20,
          background: isDarkMode
            ? theme.palette.zesty.zestyDarkBlue
            : theme.palette.zesty.zestyBackgroundBlue,
          borderRadius: isSmall ? 0 : 5,
        }}
      >
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h3',
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
          }}
        >
          {header}
        </MuiMarkdown>
        <Grid
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 5 }}
          container
          spacing={2}
        >
          {documentations.data.map((item, index) => (
            <Grid item sm={12} md={4} key={index} sx={{ width: '100%' }}>
              <Card
                component="a"
                href={item.link || FillerContent.href}
                target="_blank"
                sx={{
                  py: 5,
                  px: 2,
                  minHeight: 220,
                  width: '100%',
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
                    src={item.graphic?.data[0].url}
                    alt={item.icon_name}
                  />
                </Box>
                <Box sx={{ mt: 5 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 'bold', textAlign: 'center' }}
                  >
                    {item.title || FillerContent.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Documentation;

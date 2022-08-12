/**
 * MUI Imports
 */
import { Box, Typography, Card, Grid } from '@mui/material';
import Container from 'blocks/container/Container';

const IntegrationBenefits = ({ theme, content, FillerContent, isDarkMode }) => {
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
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: isDarkMode
              ? theme.palette.common.white
              : theme.palette.zesty.zestyDarkText,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {content.integration_benefits_h2 || FillerContent.description}
        </Typography>

        <Grid sx={{ mt: 5 }} container spacing={2}>
          {content.integration_benefits.data.map((item, index) => (
            <Grid item sm={12} md={4}>
              <Card
                sx={{
                  py: 5,
                  px: 2,
                  minHeight: 355,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{ width: '100', maxWidth: 78 }}
                    component="img"
                    src={item.graphic_icon?.data[0].url}
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
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                      mt: 2,
                    }}
                  >
                    {item.description || FillerContent.description}
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

export default IntegrationBenefits;

/**
 * MUI Imports
 */
import { Box, Typography, Grid, Card } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const ResourcesCards = ({ theme, content, FillerContent, isDarkMode }) => {
  return (
    <Box sx={{ py: 10 }} component="section">
      <Container>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: theme.palette.zesty.zestyDarkText,
            textAlign: 'center',
            span: {
              color: isDarkMode
                ? theme.palette.common.white
                : theme.palette.zesty.zestyDarkText,
              fontWeight: 'bold',
            },
          }}
          component="h2"
          variant="h4"
        >
          <MuiMarkdown
            options={{
              overrides: {
                strong: {
                  component: Typography,
                  props: {
                    color: theme.palette.zesty.zestyOrange,
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    display: 'inline',
                  },
                },
              },
            }}
          >
            {content.resources_cards_title.replace(
              'kickstart your next project',
              '<strong>kickstart your next project</strong>',
            ) || FillerContent.description}
          </MuiMarkdown>
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            {content.resource_cards?.data.map((item, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Card sx={{ minHeight: 392 }}>
                  <Box component="a" href={item.link} target="_blank">
                    <Box
                      sx={{
                        background: theme.palette.zesty.zestyDarkBlue,
                        display: 'flex',
                        justifyContent: 'center',
                        minHeight: 240,
                      }}
                    >
                      <ZestyImage
                        src={
                          item.graphic?.data[0].url ||
                          FillerContent.photos[0].src
                        }
                        style={{ maxWidth: '100', height: 'auto' }}
                      />
                    </Box>

                    <Box
                      sx={{
                        height: 152,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          color: theme.palette.zesty.zestyOrange,
                          fontWeight: 'bold',
                          textDecoration: 'underline',
                          textAlign: 'center',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
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

export default ResourcesCards;

/**
 * MUI Imports
 */
import { Box, Grid, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */

const Benefits = ({ theme, isMedium, content, FillerContent }) => {
  return (
    <Box sx={{ py: 10 }} component="section">
      <Container>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            width: '100%',
            maxWidth: 850,
            fontWeight: 'bold',
            color: theme.palette.zesty.zestyDarkText,
          }}
        >
          {content.benefits_title_h2 || FillerContent.description}
        </Typography>
      </Container>
      <Box
        sx={{
          width: '65%',
          height: 10,
          background: theme.palette.zesty.zestyOrange,
          my: 4,
        }}
      />

      <Container>
        {content.platform_overview_cards?.data.map((item, index) => (
          <Grid sx={{ py: 5 }} key={index} container spacing={4}>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
              order={isMedium ? 1 : index % 2}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 500,
                    lineHeight: 1,
                    color: theme.palette.zesty.zestyDarkBlue,
                  }}
                >
                  {item.header || FillerContent.header}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <MuiMarkdown
                    overrides={{
                      p: {
                        component: Typography,
                        props: {
                          component: 'p',
                          variant: 'h6',
                          sx: {
                            lineHeight: 1.2,
                            color: theme.palette.zesty.zestyZambezi,
                          },
                        },
                      },
                    }}
                  >
                    {item.content || FillerContent.description}
                  </MuiMarkdown>
                </Box>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
            >
              <Box>
                <Box
                  sx={{ width: '100%', maxWidth: 761 }}
                  component="img"
                  src={
                    `${item.image.data[0].url}?width=761` ||
                    FillerContent.photos[0].src
                  }
                  alt={item.header || ''}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default Benefits;

/**
 * MUI Imports
 */
import { Box, Typography, Card, Grid } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';

const LearnMore = ({
  theme,
  content,
  FillerContent,
  isLarge,
  isMedium,
  isSmall,
}) => {
  const cardData = [
    {
      text: content.page_1 || FillerContent.description,
      image: content.page_1_graphic?.data[0].url || FillerContent.photos[0].src,
      url: content.page_1_link?.data[0].meta.web.uri || FillerContent.href,
    },
    {
      text: content.page_2 || FillerContent.description,
      image: content.page_2_graphic?.data[0].url || FillerContent.photos[0].src,
      url: content.page_2_link?.data[0].meta.web.uri || FillerContent.href,
    },
    {
      text: content.page_3 || FillerContent.description,
      image: content.page_3_graphic?.data[0].url || FillerContent.photos[0].src,
      url: content.page_3_link?.data[0].meta.web.uri || FillerContent.href,
    },
  ];
  return (
    <Box component="section">
      <Container
        sx={{
          mt: isSmall ? 0 : 20,
          background: theme.palette.zesty.zestyWhite,
          borderRadius: 2,
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            span: {
              color: theme.palette.zesty.zestyDarkText,
            },
          }}
        >
          <MuiMarkdown
            overrides={{
              strong: {
                component: Typography,
                props: {
                  sx: {
                    color: theme.palette.zesty.zestyOrange,
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    display: 'inherit',
                  },
                },
              },
            }}
          >
            {content.learn_more_title.replace(
              'Zesty',
              '<strong>Zesty</strong>',
            ) || FillerContent.description}
          </MuiMarkdown>
        </Typography>

        <Grid sx={{ mt: 5 }} container spacing={2}>
          {cardData.map((item) => (
            <Grid item xs={12} md={4}>
              <Card>
                <Box
                  component="a"
                  target="_blank"
                  href={item.url}
                  sx={{ p: 5, textDecoration: 'none' }}
                >
                  <Box sx={{ width: 75, margin: 'auto' }}>
                    <Box
                      sx={{ width: '100%' }}
                      component="img"
                      src={item.image}
                      alt={item.text}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.zesty.zestyDarkBlue,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mt: 2,
                    }}
                  >
                    {item.text}
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

export default LearnMore;

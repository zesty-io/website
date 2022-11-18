/**
 * MUI Imports
 */
import {
  Box,
  CardMedia,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import Container from 'blocks/container/Container';

const GatedContentCard = ({
  theme,
  // isMedium,
  // isDarkMode,
  content,
  FillerContent,
}) => {
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        {content.section_header_1 || FillerContent.header}
      </Typography>
      <Grid container spacing={2}>
        {content.gated_content_pages?.data.map((item, index) => (
          <Grid
            key={index}
            component="a"
            target={'_blank'}
            href={item.meta.web.uri || FillerContent.href}
            sx={{
              textDecoration: 'none',
            }}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={4}
              display={'flex'}
              flexDirection={'column'}
              sx={{ backgroundImage: 'none' }}
            >
              <CardMedia
                image={
                  item.section_2_image?.data[0].url ||
                  FillerContent.photos[0].url
                }
                title={item.hero_h1 || FillerContent.description}
                sx={{
                  height: 200,
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  component={'svg'}
                  viewBox="0 0 2880 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    color: theme.palette.background.paper,
                    transform: 'scale(2)',
                    height: 'auto',
                    width: 1,
                    transformOrigin: 'top center',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                    fill="currentColor"
                  />
                </Box>
              </CardMedia>
              <Box component={CardContent} position={'relative'}>
                <Typography variant={'h6'} gutterBottom>
                  {item.hero_h1}
                </Typography>
                <Typography color="text.secondary">
                  <MuiMarkdown>
                    {item.additional_resources_header ||
                      FillerContent.description}
                  </MuiMarkdown>
                </Typography>
              </Box>
              <Box flexGrow={1} />
              <Box padding={2} display={'flex'} flexDirection={'column'}>
                <Box marginBottom={2}>
                  <Divider />
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box display={'flex'} alignItems={'center'}></Box>
                  <Typography
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GatedContentCard;

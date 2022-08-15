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
} from '@mui/material';

const ArticleCard = ({
  theme,
  isMedium,
  isDarkMode,
  content,
  FillerContent,
}) => {
  return (
    <>
      {content.gated_content_pages?.data.map((item) => (
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
            image={item.image || FillerContent.photos[0].url}
            title={item.title || FillerContent.description}
            sx={{
              height: { xs: 300, md: 360 },
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
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.description}</Typography>
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
              <Box display={'flex'} alignItems={'center'}>
                <Avatar src={item.author?.image} sx={{ marginRight: 1 }} />
                <Typography color={'text.secondary'}>
                  {item.author?.name}
                </Typography>
              </Box>
              <Typography color={'text.secondary'}>{item.date}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ArticleCard;

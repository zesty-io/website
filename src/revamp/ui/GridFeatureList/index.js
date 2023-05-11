import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import dynamic from 'next/dynamic';

const sampleImage =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/Frame%20710.svg';

const sampleFeatures = [
  {
    icon: FavoriteBorderOutlinedIcon,
    heading: 'The most inspiring feature',
    text: 'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    heading: 'The most inspiring feature',
    text: 'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    heading: 'The most inspiring feature',
    text: 'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    heading: 'The most inspiring feature',
    text: 'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
];

// const MUIIcon = ({ iconName }) => {
//   if (!iconName) {
//     return null; // or render a default icon
//   }

//   const DynamicMUIIcon = dynamic(
//     () => import('@mui/icons-material/' + iconName),
//     { ssr: false },
//   );

//   return <DynamicMUIIcon />;
// };

const GridFeatureList = ({
  title = 'why designership',
  heading = 'A catchy heading that brings some interest to visitors',
  supportingText = 'With Zesty’s Media experience, you can enter file descriptions to be used as alt text as soon as you upload an image. Thus ensuring your images are more accessible.',
  features = sampleFeatures,
  isDark = false,
  hasImage = false,
  image = sampleImage,
}) => {
  return (
    <Stack bgcolor={isDark ? 'grey.900' : '#fff'}>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            mx: 'auto',
            maxWidth: theme.maxWidth,
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            py: 8,
            px: 14,
          },
        })}
      >
        <Stack
          mb={{ xs: 3, tablet: 6 }}
          width={{ lg: hasImage ? '100%' : '624px' }}
          direction={{ xs: 'column', tablet: 'row' }}
          gap={{ xs: 4, lg: 8 }}
          justifyContent={hasImage ? 'center' : 'normal'}
        >
          <Stack
            spacing="12px"
            width={{ tablet: '336px', lg: '456px', desktopWide: '576px' }}
          >
            <Typography
              textTransform="uppercase"
              variant="body2"
              fontWeight={600}
              letterSpacing="1px"
              color="primary.main"
            >
              {title}
            </Typography>
            <Typography
              variant="h1"
              fontWeight={800}
              letterSpacing="-0.02em"
              color={isDark ? '#fff' : '#101828'}
            >
              {heading}
            </Typography>
            <Typography
              fontSize="18px"
              lineHeight="28px"
              color={isDark ? 'grey.300' : '#475467'}
            >
              {supportingText}
            </Typography>
          </Stack>
          {hasImage && (
            <Box
              component="img"
              src={image}
              sx={(theme) => ({
                objectFit: 'contain',
                width: '100%',
                [theme.breakpoints.up('tablet')]: {
                  width: '336px',
                  height: '350px',
                },
                [theme.breakpoints.up('lg')]: {
                  width: '456px',
                },
                [theme.breakpoints.up('desktopWide')]: {
                  width: '576px',
                },
              })}
            />
          )}
        </Stack>

        <Grid
          container
          columnSpacing={{ xs: 3, tablet: 4 }}
          rowSpacing={{ xs: 3, tablet: 6 }}
        >
          {features.map((feature, index) => (
            <Grid key={index} item xs={12} tablet={6} lg={3}>
              <Stack>
                <Avatar
                  sx={{
                    bgcolor: 'deepOrange.50',
                    width: 48,
                    height: 48,
                    mb: '20px',
                  }}
                >
                  {
                    <feature.icon
                      sx={(theme) => ({ fill: theme.palette.primary.main })}
                    />
                  }
                </Avatar>

                <Stack spacing={2}>
                  <Typography
                    fontWeight={{ xs: 600, lg: 800 }}
                    letterSpacing="-0.02em"
                    color={isDark ? '#fff' : '#101828'}
                    fontSize={{ xs: '18px', tablet: '20px' }}
                    lineHeight={{ xs: '24px', tablet: '28px' }}
                  >
                    {feature.heading}
                  </Typography>
                  <Typography color={isDark ? 'grey.300' : '#475467'}>
                    {feature.text}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default GridFeatureList;

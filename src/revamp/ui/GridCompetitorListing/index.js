import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const sampleListings = [
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
  {
    logo1:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zesty.svg',
    logo1Name: 'Zesty vs',
    logo2:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/contentful.svg',
    logo2Name: 'Contentful',
    description: 'See how our features and pricing can help you grow',
  },
];

const GridCompetitorListing = ({
  overline = 'LEARN WHAT MAKES US STAND OUT',
  heading = 'See more competitors',
  supportingText = 'Tens of thousands of competitors trust Zesty to help them grow. Learn more about why we’re the best choice with these CMS comparisons.',
  listings = sampleListings,
}) => {
  const theme = useTheme();
  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          py: 10,
          px: 14,
        },
      })}
    >
      <Stack
        spacing="12px"
        mb={{ xs: 4 }}
        width={{ xs: '100%', tablet: '624px' }}
        mx="auto"
      >
        <Typography
          color="primary"
          variant="body2"
          fontWeight={600}
          textAlign="center"
          textTransform="uppercase"
        >
          {overline}
        </Typography>
        <Typography
          color="text.primary"
          variant="h1"
          fontWeight={800}
          textAlign="center"
          letterSpacing="-0.02em"
        >
          {heading}
        </Typography>
        <Typography
          color="text.secondary"
          textAlign="center"
          fontSize="18px"
          lineHeight="28px"
        >
          {supportingText}
        </Typography>
      </Stack>

      <Grid container spacing={4} mb={4}>
        {listings.map((listing, index) => (
          <Grid key={index} item xs={12} tablet={6} lg={4}>
            <Stack
              border={`1px solid ${theme.palette.grey[100]}`}
              borderRadius="8px"
            >
              <Stack
                pr={{ xs: '11px', tablet: '20px', lg: 0, desktopWide: '52px' }}
              >
                <Stack
                  direction="row"
                  borderBottom={`1px solid ${theme.palette.grey[100]}`}
                  p="20px"
                  spacing={1}
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={listing.logo1}
                    width="20px"
                    height="20px"
                  />
                  <Typography
                    variant="h5"
                    letterSpacing="-0.02em"
                    color="text.primary"
                    fontWeight={60}
                  >
                    {listing.logo1Name}
                  </Typography>
                  <Box
                    component="img"
                    src={listing.logo2}
                    width="20px"
                    height="20px"
                  />
                  <Typography
                    variant="h5"
                    letterSpacing="-0.02em"
                    color="text.primary"
                    fontWeight={60}
                  >
                    {listing.logo2Name}
                  </Typography>
                  <ArrowForwardRoundedIcon
                    sx={{
                      width: '16px',
                      height: '16px',
                      alignSelf: 'center',
                      fill: alpha(theme.palette.grey[900], '.4'),
                    }}
                  />
                </Stack>
                <Stack p="20px">
                  <Typography color="text.secondary">
                    {listing.description}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing="12px" justifyContent="center">
        <Button variant="contained" size="extraLarge" href="/demo">
          Schedule Demo
        </Button>
        <Button variant="outlined" size="extraLarge" href="/pricing">
          View Pricing
        </Button>
      </Stack>
    </Stack>
  );
};

export default GridCompetitorListing;

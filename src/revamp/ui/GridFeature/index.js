import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const android =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Android.svg',
  angular =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Angular.svg',
  flutter =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Flutter.svg',
  gatsby =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Gatsby.svg',
  hugo =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Hugo.svg',
  java =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Java.svg',
  javascript =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Javascript.svg',
  koitlin =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Koitlin.svg',
  next =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Next.svg',
  node =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Node.svg',
  php =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/PHP.svg',
  react =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/React.svg',
  ruby =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Ruby.svg',
  swift =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Swift.svg',
  nuxt =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Nuxt.svg',
  vue =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/code/Vue.svg';

const cardLists = [
  {
    image: next,
    title: 'Next.js',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: react,
    title: 'React',
    description:
      ' A JavaScript library for building user interfaces, focusing on creating reusable components and declarative views that make building complex UIs easier and more efficient.',
  },
  {
    image: vue,
    title: 'Vue',
    description:
      'A progressive JavaScript framework for building user interfaces, known for its simplicity, reactivity system, and ease of integration into existing projects.',
  },
  {
    image: angular,
    title: 'Angular',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: hugo,
    title: 'Hugo',
    description:
      'A static site generator written in Go, designed for speed and simplicity, and aimed at creating static websites that are easy to build and deploy.',
  },
  {
    image: gatsby,
    title: 'Gatsby',
    description:
      'A React-based framework that enables static site generation, providing high performance, optimized, and scalable websites and web applications.',
  },
  {
    image: nuxt,
    title: 'Nuxt js',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: ruby,
    title: 'Ruby',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: swift,
    title: 'Swift',
    description:
      'A powerful and intuitive programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications, known for its safety, speed, and modern syntax.',
  },
  {
    image: koitlin,
    title: 'Koitlin',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: flutter,
    title: 'Flutter',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: android,
    title: 'Android',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: node,
    title: 'Node',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: java,
    title: 'Java',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: php,
    title: 'PHP',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: javascript,
    title: 'Javascript',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
];

const GridFeature = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = ``,
  featureLists = cardLists,
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'), {
    defaultMatches: true,
  });
  const [showedItems, setShowedItems] = useState(6);

  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          px: 2,
          py: 4,
        },
        [theme.breakpoints.up('tablet')]: {
          px: 4,
          py: 6,
        },
        [theme.breakpoints.up('lg')]: {
          px: 14,
          py: 8,
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: theme.maxWidth,
          mx: 'auto',
        },
      })}
    >
      <Stack
        mb={{ xs: 3, tablet: 6 }}
        mx="auto"
        width={{ lg: '624px' }}
        textAlign="center"
      >
        <Typography color="primary" fontWeight={600} mb="12px">
          {overline}
        </Typography>
        <Typography
          color="text.primary"
          variant="h2"
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              letterSpacing: '-0.02em',
              fontWeight: 800,
              mb: '12px',
            },
            [theme.breakpoints.up('tablet')]: {
              fontSize: '36px',
              lineHeight: '44px',
            },
          })}
        >
          {heading}
        </Typography>
        <Typography color="text.secondary" fontSize="18px" lineHeight="28px">
          {supportingText === '' ? (
            [
              `With Zesty you’re not constrained to using one kind of API. You can use any of our APIs (GraphQL, REST, GET, and Instant JSON) with any framework of your choice. And they all come with web-hooks and site generators. Check them out in our `,
              <Link
                href="https://zesty.org/apis/api-overview"
                color="info.main"
                underline="none"
              >
                documentation
              </Link>,
            ]
          ) : (
            <div dangerouslySetInnerHTML={{ __html: supportingText }} />
          )}
        </Typography>
      </Stack>
      <Grid container columnSpacing={4} rowSpacing={isTablet ? 6 : 3} mb={6}>
        {featureLists.slice(0, showedItems)?.map((feature, index) => (
          <Grid key={index} item tablet={6} lg={4} display="flex">
            <Stack spacing="20px">
              <img
                src={feature.image}
                width="100%"
                height="auto"
                style={{ objectFit: 'contain' }}
              />
              <Typography fontWeight={600} letterSpacing="-0.02em" variant="h5">
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
              {/* <Button
                size="large"
                color="primary"
                variant="outlined"
                sx={{ textTransform: 'none', alignSelf: 'start', mt: 'auto' }}
              >
                Start Building
              </Button> */}
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" justifyContent="center">
        <Button
          size="large"
          variant="outlined"
          sx={{
            textTransform: 'none',
            borderColor: 'grey.100',
            color: 'grey.600',
            '&:hover': {
              borderColor: 'grey.600',
              background: 'transparent',
            },
            display: showedItems >= featureLists?.length ? 'none' : 'flex',
          }}
          endIcon={<ArrowDownwardIcon />}
          onClick={() => {
            setShowedItems(showedItems + 6);
          }}
        >
          See All Frameworks
        </Button>
      </Stack>
    </Stack>
  );
};

export default GridFeature;

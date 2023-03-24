import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import android from 'revamp/assets/code/Android.svg';
import angular from 'revamp/assets/code/Angular.svg';
import flutter from 'revamp/assets/code/Flutter.svg';
import gatsby from 'revamp/assets/code/Gatsby.svg';
import hugo from 'revamp/assets/code/Hugo.svg';
import java from 'revamp/assets/code/Java.svg';
import javascript from 'revamp/assets/code/Javascript.svg';
import koitlin from 'revamp/assets/code/Koitlin.svg';
import next from 'revamp/assets/code/Next.svg';
import node from 'revamp/assets/code/Node.svg';
import php from 'revamp/assets/code/PHP.svg';
import react from 'revamp/assets/code/React.svg';
import ruby from 'revamp/assets/code/Ruby.svg';
import swift from 'revamp/assets/code/Swift.svg';
import nuxt from 'revamp/assets/code/Nuxt.svg';
import vue from 'revamp/assets/code/Vue.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const cardLists = [
  {
    image: next.src,
    title: 'Next.js',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: react.src,
    title: 'React',
    description:
      ' A JavaScript library for building user interfaces, focusing on creating reusable components and declarative views that make building complex UIs easier and more efficient.',
  },
  {
    image: vue.src,
    title: 'Vue',
    description:
      'A progressive JavaScript framework for building user interfaces, known for its simplicity, reactivity system, and ease of integration into existing projects.',
  },
  {
    image: angular.src,
    title: 'Angular',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: hugo.src,
    title: 'Hugo',
    description:
      'A static site generator written in Go, designed for speed and simplicity, and aimed at creating static websites that are easy to build and deploy.',
  },
  {
    image: gatsby.src,
    title: 'Gatsby',
    description:
      'A React-based framework that enables static site generation, providing high performance, optimized, and scalable websites and web applications.',
  },
  {
    image: nuxt.src,
    title: 'Nuxt js',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: ruby.src,
    title: 'Ruby',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: swift.src,
    title: 'Swift',
    description:
      'A powerful and intuitive programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications, known for its safety, speed, and modern syntax.',
  },
  {
    image: koitlin.src,
    title: 'Koitlin',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: flutter.src,
    title: 'Flutter',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: android.src,
    title: 'Android',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: node.src,
    title: 'Node',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: java.src,
    title: 'Java',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: php.src,
    title: 'PHP',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
  {
    image: javascript.src,
    title: 'Javascript',
    description:
      'A React-based web framework that enables server-side rendering and provides additional features like automatic code splitting and static site generation',
  },
];

const GridFeature = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = `With Zesty you’re not constrained to using one kind of API. You can use any of our APIs (GraphQL, REST, GET, and Instant JSON) with any framework of your choice. And they all come with web-hooks and site generators. Check them out in our `,
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
          {supportingText}{' '}
          <Link href="#" color="info.main" underline="none">
            documentation
          </Link>
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
              <Button
                size="large"
                color="primary"
                variant="outlined"
                sx={{ textTransform: 'none', alignSelf: 'start', mt: 'auto' }}
              >
                Start Building
              </Button>
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

import { React } from 'react';
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Head from 'next/head';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function LoadingScreen() {
  return (
    <Stack width={1} justifyContent={'center'} height={1} alignItems={'center'}>
      <CircularProgress color="secondary" />
    </Stack>
  );
}

const SlideMessage = dynamic(
  () =>
    import('components/marketing/Join/SlideMessage').then(
      (e) => e.SlideMessage,
    ),
  {
    ssr: false,
    loading: LoadingScreen,
  },
);

import { getIsAuthenticated } from 'utils';
import dynamic from 'next/dynamic';

const firstMessage = (
  <Box paddingY={4}>
    <Typography variant="h4" gutterBottom>
      A Powerful, Headless & Hybrid CMS
    </Typography>
    <Typography variant="h6">
      Build websites and headless applications with Zesty.io
    </Typography>
    <Box paddingY={1}>
      <Typography>
        <p>
          Publish to infinite channels, from web to mobile to digital
          signage.&nbsp;
        </p>
        <ul>
          <li>Get started with our free community plan</li>
          <li>Enterprise capabilities for bigger projects</li>
          <li>Visual editing tools for the non-developers</li>
          <li>
            Robust APIs, A/B testing, webhooks, layouts, and on-page editing
          </li>
          <li>Integrates to your stack!</li>
        </ul>
      </Typography>
    </Box>
  </Box>
);

const firstButton = `Yes, let's go!`;
const firstImage = `https://kfg6bckb.media.zestyio.com/homepageHero.png`;

export default function Join(props) {
  let abmessage, abbuttontext, abimage;
  const theme = useTheme();
  if (props.campaign !== false) {
    abmessage = (
      <Box>
        <Typography
          variant="h4"
          color="black"
          textAlign={'left'}
          fontWeight={'bold'}
          sx={{ mb: 0 }}
        >
          {props.ab.title}
        </Typography>
        <Box paddingY={1}>
          <Typography
            sx={{
              li: {
                marginBottom: 1,
              },
            }}
            variant="body"
            dangerouslySetInnerHTML={{ __html: props.ab.description }}
          ></Typography>
        </Box>
      </Box>
    );
    abbuttontext = props.abcta_button_text
      ? props.abcta_button_text
      : `Let's get Started!`;
    abimage = props.ab.header_image ? props.ab.header_image : firstImage;
  } else {
    abmessage = firstMessage;
    abbuttontext = firstButton;
    abimage = firstImage;
  }

  // Hard coded values no zesty model for this page
  const seoTitle = 'Start your first project with Zesty.io';
  const seoDescription =
    'Create an account with Zesty.io to start your first instance free';

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <link
          rel="icon"
          href="https://brand.zesty.io/favicon.png"
          type="image/png"
        />
      </Head>
      <Box>
        <Stack
          py={4}
          width={1}
          sx={{
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`https://brand.zesty.io/zesty-io-logo-horizontal${
              theme.palette.mode === 'dark' ? '-light-color' : ''
            }.png`}
            alt="Zesty.io Logo"
            height={70}
          />
        </Stack>

        <SlideMessage
          content={props}
          message={abmessage}
          image={abimage}
          buttonText={abbuttontext}
          demo={props.demo}
        />
      </Box>
    </>
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );
  let abdata = {};
  let campaign = query.UTM_Campaign ? query.UTM_Campaign : false;
  let demoForm = query.demo ? true : false;

  if (campaign) {
    const abres = await fetch(
      'https://www.zesty.io/-/gql/a_b_test_data_set.json',
    );
    const abjsondata = await abres.json();
    let match = abjsondata.find(
      (d) => d.unique_identifier.toLowerCase() == campaign.toLowerCase(),
    );

    // if the campaign data has a match for A/B testing, grab it
    if (match) {
      abdata = match;
    } else {
      campaign = false;
    }
  }

  let data = {
    production:
      process.env.PRODUCTION == 'true' || process.env.PRODUCTION === true
        ? true
        : false,
  };
  const isAuthenticated = getIsAuthenticated(res);

  const sso = {
    githubUrl: process.env.GITHUB_SSO_URL,
    googleUrl: process.env.GOOGLE_SSO_URL,
    msUrl: process.env.MS_SSO_URL,
  };

  return {
    props: {
      ...data,
      ab: abdata,
      campaign: campaign,
      demo: demoForm,
      zesty: {
        isAuthenticated,
        sso,
        templateUrl: process.env.TEMPLATE_URL,
      },
    },
  };
}

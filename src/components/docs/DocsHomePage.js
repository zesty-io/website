import React from 'react';
import { useZestyStore } from 'store';

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SearchModal } from 'views/Docs/SearchModal';
import { AlgoSearch } from 'views/Docs/AlgoSearch';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

export const DocsHomePage = (props) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );

  React.useEffect(() => {
    setalgoliaApiKey(props?.algolia?.apiKey);
    setalgoliaAppId(props?.algolia?.appId);
    setalgoliaIndex(props?.algolia?.index);
  }, []);

  return (
    <Box data-testid="docs-landing">
      <ZestyAccountsHead title={'Zesty.io - Documentation'} />
      <>
        <Box
          sx={{
            backgroundSize: 'cover',
            height: 450,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderBottom: `1px solid ${theme.palette.zesty.whiteGray}`,
            gap: 2,
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src="https://kfg6bckb.media.zestyio.com/rocket.svg"
            sx={{
              width: 500,
              height: 300,
              position: 'absolute',
              bottom: 10,
              left: 0,
              opacity: 0.5,
              display: isMedium ? 'none' : 'block',
            }}
          />
          <Box
            component="img"
            src="https://kfg6bckb.media.zestyio.com/Group-851.svg"
            sx={{
              width: 400,
              height: 400,
              position: 'absolute',
              bottom: 10,
              right: -10,
              opacity: 0.2,
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Zesty.io Documentation
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
            }}
          >
            Explore guides, code samples, API references, and more to learn
            about Zesty
          </Typography>

          <SearchModal sx={{ width: isMedium ? 300 : 500 }}>
            <AlgoSearch />
          </SearchModal>
        </Box>

        <Container sx={{ py: 10 }}>
          <Box>
            <Grid container spacing={2}>
              {cardData.map((item, index) => (
                <Grid item sm={12} md={4} key={index}>
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 300,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.zesty.zestyZambezi,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        minHeight: 200,
                        color: theme.palette.zesty.zestyZambezi,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      data-testid={`${item.title}-btn`}
                      component={'a'}
                      href={item.link}
                      variant="outlined"
                      color="secondary"
                      sx={{
                        '&:hover': {
                          backgroundColor: theme.palette.zesty.zestyOrange,
                          color: theme.palette.common.white,
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </>
    </Box>
  );
};

const cardData = [
  {
    title: 'Instances API',
    description:
      'A collection of available REST endpoints scoped to your unique instance.',
    link: '/docs/instances/api-reference/',
  },
  {
    title: 'Authentication API',
    description:
      'Auth API is used to authenticate users with Zesty.io, which returns a token that grants to access services like Instances API, Accounts API, and Media API. Auth was setup as a stand alone service so it can connect to many services in our infrastructure.',
    link: '/docs/authentication/api-reference/',
  },
  {
    title: 'Accounts API',
    description:
      'API used to control management of users, roles, instances, and teams.',
    link: '/docs/accounts/api-reference/',
  },
  {
    title: 'Guides',
    description:
      'Zesty.org is the knowledge base for the Zesty.io CMS Platform. Learn the intricacies of Zesty.io content technology and how to implement websites, headless CMS apps, and marketing components.',
    link: '/docs/introduction',
  },
  {
    title: 'Next.js',
    description: 'Quick start Next.js v12 with Zesty.io as a data source',
    link: 'https://github.com/zesty-io/nextjs-starter',
  },
  {
    title: 'Parsley',
    description:
      'Zesty’s in-house templating language, Parsley, provides powerful programming capabilities to manage your content.',
    link: '/docs/parsley',
  },
];

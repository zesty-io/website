import React from 'react';
import { useZestyStore } from 'store';

import MainWrapper from 'layouts/Main';
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { SearchModal } from 'views/Docs/SearchModal';
import { AlgoSearch } from 'views/Docs/AlgoSearch';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const DocsPage = (props) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );

  React.useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  return (
    <>
      <MainWrapper docsLanding customRouting={[]}>
        <Box
          sx={{
            // background: `url('https://kfg6bckb.media.zestyio.com/radialgradient.png')`,
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'top center',
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
            Find guides, code samples. Api reference, and more to learn about
            zesty.io
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
                        minHeight: 150,
                        color: theme.palette.zesty.zestyZambezi,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Link href="">Learn more</Link>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </MainWrapper>
    </>
  );
};

export default DocsPage;

const cardData = [
  {
    title: 'Api reference',
    description: 'Lorem ipsum t volutpat. Integer at',
    link: '/docs',
  },
  {
    title: 'Api reference',
    description:
      'Lorem ipsum dolm rhoncus lectus in turpis. Aliquam erat volutpat. Integer at',
    link: '/docs',
  },
  {
    title: 'Api reference',
    description:
      'Lorem ipsum dolor sie sit amet lectus pretium venenatis. Aliquam rhoncus lectus in turpis. Aliquam erat volutpat. Integer at',
    link: '/docs',
  },
  {
    title: 'Api reference',
    description: 'Lorem ipsun turpis. Aliquam erat volutpat. Integer at',
    link: '/docs',
  },
  {
    title: 'Api reference',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ante sit amet lectus pretium venenatis. Aliquam rhoncus lectus in turpis. Aliquam erat volutpat. Integer at',
    link: '/docs',
  },
  {
    title: 'Api reference',
    description:
      'Lorem ipsum dolor sitretium venenatis. Aliquam rhoncus lectus in turpis. Aliquam erat volutpat. Integer at',
    link: '/docs',
  },
];

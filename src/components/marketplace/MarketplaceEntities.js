import { Grid, Link, Paper, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MarketplaceContext } from './MarketplaceContext';
import Head from 'next/head';

const MarketplaceEntities = ({ isIndex = true }) => {
  const { entities } = useContext(MarketplaceContext);
  return (
    <Grid sx={{ my: 2 }} container spacing={2}>
      {entities?.map((entity, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Head>
              <meta
                property="og:image"
                content={
                  isIndex
                    ? entity?.placard_image + '?width=1200&height=630'
                    : entity?.placard_image?.data[0]?.url +
                      '?width=1200&height=630'
                }
              />
            </Head>
            <Paper sx={{ p: 3, height: '100%' }} elevation={5}>
              <Stack direction="row">
                <Stack>
                  <img
                    src={isIndex ? entity?.image : entity?.image?.data[0]?.url}
                    width={50}
                    height={50}
                  />
                </Stack>
                <Stack ml={2} justifyContent="center" direction="column">
                  <Link href={isIndex ? entity.uri : entity?.meta?.web?.uri}>
                    <Typography variant="h6" color="primary">
                      {entity?.name}
                    </Typography>
                  </Link>

                  <Typography color="text.secondary">
                    {entity?.subtitle}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MarketplaceEntities;

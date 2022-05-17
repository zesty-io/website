import {
  Card,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Main from 'layouts/Main/index';
import React from 'react';
import { getMarketplaceData } from './[...slug]';

const Marketplace = ({ content }) => {
  return (
    <Main>
      <Container>
        <Stack mt={2}>
          <TextField fullWidth variant="outlined" label="Search" />
        </Stack>
        <Grid sx={{ my: 2 }} container spacing={2}>
          {content.map((record) => (
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, height: '100%' }} elevation={5}>
                <Stack direction="row">
                  <Stack>
                    <img src={record?.image} width={50} height={50} />
                  </Stack>
                  <Stack ml={2} justifyContent="center" direction="column">
                    <Link href={record.uri}>
                      <Typography variant="h6" color="primary">
                        {record?.name}
                      </Typography>
                    </Link>

                    <Typography color="text.secondary">
                      {record?.subtitle}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

export async function getServerSideProps(ctx) {
  const response = await fetch(
    'https://39ntbr6g-dev.webengine.zesty.io/-/gql/extensions.json',
  );

  const extensions = getMarketplaceData(ctx);

  return {
    props: {
      content: await response.json(),
    },
  };
}

export default Marketplace;

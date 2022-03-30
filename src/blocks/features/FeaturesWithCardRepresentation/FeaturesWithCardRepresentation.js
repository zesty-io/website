/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
  People,
  Public,
  Security,
  Schema,
  Build,
  FindInPage,
  Storage,
  AutoGraph,
  Construction,
  DashboardCustomize,
  Api,
} from '@mui/icons-material';
import Icons from '@mui/icons-material';
import Container from 'components/Container';
import { Button, useMediaQuery } from '@mui/material';
import FillerContent from 'components/FillerContent';
import WYSIWYGRender from 'components/WYSIWYGRender';


const switchIcon = (icon) => {
  switch (icon) {
    case 'people':
      return <People />;
    case 'find_in_page':
      return <FindInPage />;
    case 'security':
      return <Security />;
    case 'public':
      return <Public />;
    case 'schema':
      return <Schema />;
    case 'build':
      return <Build />;
    case 'storage':
      return <Storage />;
    case 'auto_graph':
      return <AutoGraph />;
    case 'dashbaord_customize':
      return <DashboardCustomize />;
    case 'api':
      return <Api />;
    case 'construction':
      return <Construction />;
    default:
      return <People />;
  }
};

const FeaturesWithCardRepresentation = ({
  description,
  cards,
  cta,
  cta_url,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const cardList = cards || FillerContent.featuresCards;
  return (
    <Box bgcolor={'alternate.secondary'}>
      <Grid container justifyContent="center" paddingTop={4}>
        <Typography variant="h4" component="h2" align={'center'} sx={{}}>
          <WYSIWYGRender
            rich_text={description}
            customClass="solutionBox"
          ></WYSIWYGRender>
        </Typography>
      </Grid>
      <Container>
        <Grid container spacing={4}>
          {cardList?.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box component={Card} padding={4} width={1} height={1}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {switchIcon(item.icon_name)}
                  </Box>
                  <Typography
                    variant={'p'}
                    component="h4"
                    gutterBottom
                    sx={{ fontWeight: 500, fontSize: '20px' }}
                  >
                    {item.feature_name || item.title}
                  </Typography>
                  <Typography
                    variant={'p'}
                    component="p"
                    color="text.secondary"
                    sx={{ fontSize: '16px' }}
                  >
                    {item.content || item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {cta && (
          <Grid container justifyContent="center" marginTop={4}>
            <Button
              alignItems={'center'}
              href={
                (cta?.data &&
                  cta?.data[0]?.internal_link?.data &&
                  cta?.data[0]?.internal_link?.data[0]?.meta?.web?.url) ||
                FillerContent.href
              }
              variant="contained"
              color="secondary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              {(cta.data && cta.data[0].button_text) || FillerContent.cta}
            </Button>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default FeaturesWithCardRepresentation;

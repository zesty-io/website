import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';

import Container from 'components/Container';

const WithOverlappedCards = ({ list = [], eyebrow, case_studies_header }) => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
            fontWeight={700}
            component={'p'}
          >
            {eyebrow}
          </Typography>
          <Typography
            fontWeight={700}
            variant={'h4'}
            component={'p'}
            align={'center'}
          >
            {case_studies_header}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {list.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  boxShadow: 0,
                  background: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Box
                  component={'a'}
                  href={item.card_link?.data[0].meta.web.uri}
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={CardMedia}
                    borderRadius={2}
                    width={1}
                    height={1}
                    minHeight={320}
                    image={item.image.data[0].url}
                  />
                  <Box
                    component={CardContent}
                    bgcolor={'transparent'}
                    marginTop={-5}
                  >
                    <Box component={Card}>
                      <CardContent>
                        <ListItemText
                          primary={item.summary}
                          //*secondary={item.description}
                        />
                      </CardContent>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WithOverlappedCards;

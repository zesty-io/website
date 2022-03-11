import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Link from 'next/link';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const WithAlternateCards = ({ authors, title, description }) => {
  const theme = useTheme();
  const cardList = authors || FillerContent?.authors;
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
          >
            Our team
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            {title || FillerContent.header}
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            {description || FillerContent.description}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {cardList.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Link href={item?.author?.url}>
                <Box
                  width={1}
                  height={1}
                  component={Card}
                  boxShadow={0}
                  variant={'outlined'}
                  bgcolor={'alternate.main'}
                >
                  <CardContent sx={{ padding: 3 }}>
                    <ListItem
                      component="div"
                      disableGutters
                      sx={{ padding: 0 }}
                    >
                      <ListItemAvatar sx={{ marginRight: 3 }}>
                        <Avatar
                          src={item?.author?.avatar || item?.avatar}
                          variant={'rounded'}
                          sx={{ width: 100, height: 100, borderRadius: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ margin: 0 }}
                        primary={item?.author?.name || item?.name}
                        secondary={item?.author?.title || item?.title}
                        primaryTypographyProps={{
                          variant: 'h6',
                          fontWeight: 700,
                        }}
                        secondaryTypographyProps={{ variant: 'subtitle1' }}
                      />
                    </ListItem>
                  </CardContent>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WithAlternateCards;

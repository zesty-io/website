import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { InstanceLoading } from '../ui';
import FillerContent from 'components/globals/FillerContent';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export const InstancesList = ({
  title = '',
  data = [],
  view = 'grid',
  toggleFavorites,
  handleRoute,
  initialFavorites = [],
  loading = false,
  invite = false,
  acceptInvite = () => {},
  declineInvite = () => {},
}) => {
  if (loading) {
    return <InstanceLoading view={view} />;
  }
  if (view === 'list') {
    return (
      <List sx={{ display: data.length === 0 ? 'none' : 'block' }}>
        <Typography variant="h5">{title}</Typography>
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);

          return (
            <ListItem divider key={index} disablePadding>
              <Box
                sx={{ cursor: 'pointer' }}
                onClick={() => toggleFavorites(instance)}
              >
                {isFavorite ? (
                  <StarRoundedIcon color="secondary" fontSize="medium" />
                ) : (
                  <StarBorderRoundedIcon fontSize="medium" />
                )}
              </Box>
              <ListItemButton onClick={() => handleRoute(instance.ZUID)}>
                <ListItemIcon>
                  <img
                    alt={instance.name}
                    height="50px"
                    width="50px"
                    src={
                      instance.screenshotURL
                        ? instance.screenshotURL
                        : FillerContent.image
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={instance.name}
                  secondary={`Updated ${instance.updatedAt}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    <Box paddingY={2} display={data.length === 0 ? 'none' : 'block'}>
      <Typography variant="h5">{title}</Typography>
      <Grid container direction="row" my={2} spacing={4}>
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);
          return (
            <Grid item xs={12} sm={4} lg={3} key={index}>
              <Card sx={{ cursor: 'pointer', minHeight: '100%' }}>
                <Box
                  paddingX={1}
                  paddingY={1}
                  width={1}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  visibility={invite ? 'hidden' : 'visible'}
                >
                  <Box
                    sx={{ cursor: 'pointer' }}
                    onClick={() => toggleFavorites(instance)}
                  >
                    {isFavorite ? (
                      <StarRoundedIcon color="secondary" fontSize="medium" />
                    ) : (
                      <StarBorderRoundedIcon fontSize="medium" />
                    )}
                  </Box>
                </Box>
                <CardMedia
                  height="100%"
                  sx={{ height: 220 }}
                  width="100%"
                  component="img"
                  image={
                    instance.screenshotURL
                      ? instance.screenshotURL
                      : FillerContent.image
                  }
                  onClick={() => handleRoute(instance.ZUID)}
                />
                <Typography
                  p={1}
                  gutterBottom
                  variant="h6"
                  onClick={() => handleRoute(instance.ZUID)}
                >
                  {instance.name}
                </Typography>

                {invite && (
                  <CardActions>
                    <Button
                      onClick={() => acceptInvite(instance, 'accept')}
                      size="small"
                      color="secondary"
                      target="_blank"
                    >
                      Accept Invite
                    </Button>

                    <Button
                      onClick={() => declineInvite(instance, 'decline')}
                      size="small"
                      target="_blank"
                      color="secondary"
                    >
                      Decline
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

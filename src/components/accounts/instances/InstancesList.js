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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

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
  const handleRedirect = (instanceZuid) => {
    if (!invite) {
      handleRoute(instanceZuid);
    }
  };

  if (loading) {
    return <InstanceLoading view={view} />;
  }
  if (view === 'list') {
    return (
      <List sx={{ display: data.length === 0 ? 'none' : 'block' }}>
        <Box>{title}</Box>
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);

          return (
            <ListItem divider key={index} disablePadding>
              <ListItemButton onClick={() => handleRedirect(instance.ZUID)}>
                <Box
                  marginRight={1}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => toggleFavorites(instance)}
                  visibility={invite ? 'hidden' : 'visible'}
                >
                  {isFavorite ? (
                    <StarRoundedIcon color="secondary" fontSize="medium" />
                  ) : (
                    <StarBorderRoundedIcon fontSize="medium" />
                  )}
                </Box>
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

                {invite && (
                  <Box display={'flex'}>
                    <Button
                      onClick={() => acceptInvite(instance, 'accept')}
                      size="small"
                      variant="contained"
                      color="success"
                      target="_blank"
                      fullWidth
                    >
                      <CheckCircleIcon
                        sx={{ color: '#fff' }}
                        fontSize="small"
                      />{' '}
                    </Button>

                    <Button
                      onClick={() => declineInvite(instance, 'decline')}
                      size="small"
                      target="_blank"
                      variant="outlined"
                      color="error"
                    >
                      <Typography
                        variant="p"
                        display={'flex'}
                        gap={1}
                        marginX={2}
                      >
                        <NotInterestedIcon color="error" fontSize="small" />
                      </Typography>
                    </Button>
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    <Box paddingY={2} display={data.length === 0 ? 'none' : 'block'}>
      <Box>{title}</Box>
      <Grid container direction="row" my={0} spacing={4}>
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);
          return (
            <Grid item xs={12} sm={6} md={4} lg={2.4} xl={2} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  minHeight: '100%',
                  ':hover': {
                    boxShadow: 20,
                  },
                }}
              >
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
                  onClick={() => handleRedirect(instance.ZUID)}
                />
                <Typography
                  p={1}
                  gutterBottom
                  variant="h6"
                  onClick={() => handleRedirect(instance.ZUID)}
                >
                  {instance.name}
                </Typography>

                {invite && (
                  <CardActions>
                    <Button
                      onClick={() => acceptInvite(instance, 'accept')}
                      size="small"
                      variant="contained"
                      color="success"
                      target="_blank"
                      fullWidth
                    >
                      <CheckCircleIcon
                        sx={{ color: '#fff' }}
                        fontSize="small"
                      />{' '}
                      <Typography variant="p" marginX={1}>
                        Accept Invite
                      </Typography>
                    </Button>

                    <Button
                      onClick={() => declineInvite(instance, 'decline')}
                      size="small"
                      target="_blank"
                      variant="outlined"
                      color="error"
                    >
                      <Typography
                        variant="p"
                        display={'flex'}
                        gap={1}
                        marginX={2}
                      >
                        <NotInterestedIcon color="error" fontSize="small" />
                        Decline
                      </Typography>
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

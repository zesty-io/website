import {
  IconButton,
  Link,
  Paper,
  Typography,
  Stack,
  Skeleton,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import FillerContent from 'components/globals/FillerContent';

const ZInstanceItem = ({
  title,
  secondaryTitle = '',
  image,
  isFavorite,
  isInvite,
  previewLink,
  zuidLink,
  managerLink,
  toggleFavorites,
  isLoading,
  isTogglingFavorites,
  orientation = 'grid',
  acceptInvite,
  declineInvite,
  sx,
  ...props
}) => {
  if (orientation === 'list') {
    return (
      <ListItem divider disablePadding {...sx}>
        <IconButton
          onClick={toggleFavorites}
          sx={{ display: isInvite ? 'none' : 'block' }}
        >
          {isFavorite ? (
            <StarRoundedIcon color="primary" fontSize="medium" />
          ) : (
            <StarBorderRoundedIcon fontSize="medium" />
          )}
        </IconButton>
        <ListItemButton href={managerLink} target="_blank">
          <ListItemIcon>
            <img
              alt={title}
              height="50px"
              width="50px"
              src={image && !isInvite ? image : FillerContent.image}
            />
          </ListItemIcon>
          <ListItemText primary={title} secondary={secondaryTitle} />
        </ListItemButton>
        {isInvite && (
          <Stack direction="row">
            <IconButton color="success" onClick={acceptInvite}>
              <CheckCircleIcon fontSize="small" />
            </IconButton>
            <IconButton color="error" onClick={declineInvite}>
              <NotInterestedIcon color="error" fontSize="small" />
            </IconButton>
          </Stack>
        )}
      </ListItem>
    );
  }

  return (
    <Stack
      component={Paper}
      sx={{ border: `1px solid ${grey[400]}`, ...sx }}
      {...props}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        {isLoading ? (
          <Skeleton width="85%" />
        ) : (
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        )}

        {isLoading ? (
          <Skeleton variant="circular" width={20} height={20} />
        ) : (
          <IconButton
            sx={{ display: isInvite ? 'none' : 'block' }}
            disabled={isTogglingFavorites}
            onClick={toggleFavorites}
          >
            {isFavorite ? (
              <StarRoundedIcon color="primary" fontSize="medium" />
            ) : (
              <StarBorderRoundedIcon fontSize="medium" />
            )}
          </IconButton>
        )}
      </Stack>
      <Stack>
        <IconButton
          sx={{ borderRadius: 0, p: 0 }}
          href={managerLink}
          target="_blank"
        >
          {isLoading ? (
            <Skeleton width="100%" height={200} />
          ) : (
            <img
              src={image && !isInvite ? image : FillerContent.image}
              width="100%"
              height={200}
              style={{ objectFit: 'cover' }}
            />
          )}
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        p={1}
        sx={{ display: isInvite ? 'none' : 'flex' }}
      >
        {isLoading ? (
          <Skeleton width="85%" />
        ) : (
          <Stack mr="auto" direction="row" alignItems="center" spacing={1}>
            <Button
              size="small"
              variant="contained"
              href={managerLink}
              target="_blank"
            >
              Open Manager
            </Button>

            <Link
              underline="none"
              href={previewLink}
              target="_blank"
              color="primary"
              sx={{
                ':hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
            >
              Preview
            </Link>
          </Stack>
        )}

        {isLoading ? (
          <Skeleton variant="circular" width={20} height={20} />
        ) : (
          <IconButton href={zuidLink}>
            <SettingsIcon />
          </IconButton>
        )}
      </Stack>
      {isInvite && (
        <Stack direction="row" spacing={1} alignItems="center" p={1}>
          <Button
            startIcon={<CheckCircleIcon fontSize="small" />}
            variant="contained"
            color="success"
            onClick={acceptInvite}
            fullWidth
          >
            Accept
          </Button>
          <Button
            startIcon={<NotInterestedIcon fontSize="small" />}
            variant="outlined"
            color="error"
            onClick={declineInvite}
          >
            Decline
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default ZInstanceItem;

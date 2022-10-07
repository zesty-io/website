import {
  IconButton,
  Link,
  Paper,
  Typography,
  Stack,
  Skeleton,
  Button,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SettingsIcon from '@mui/icons-material/Settings';

const ZInstanceItem = ({
  title,
  image,
  isFavorite,
  isInvite,
  previewLink,
  zuidLink,
  managerLink,
  toggleFavorites,
  isLoading,
  isTogglingFavorites,
  sx,
  ...props
}) => {
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
          <IconButton disabled={isTogglingFavorites} onClick={toggleFavorites}>
            {isFavorite ? (
              <StarRoundedIcon color="primary" fontSize="medium" />
            ) : (
              <StarBorderRoundedIcon fontSize="medium" />
            )}
          </IconButton>
        )}
      </Stack>
      <Stack>
        <IconButton sx={{ borderRadius: 0, p: 0 }} href={zuidLink}>
          {isLoading ? (
            <Skeleton width="100%" height={200} />
          ) : (
            <img
              src={image}
              width="100%"
              height={200}
              style={{ objectFit: 'cover' }}
            />
          )}
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems="center" p={1}>
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
    </Stack>
  );
};

export default ZInstanceItem;

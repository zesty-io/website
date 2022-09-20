import {
  IconButton,
  Link,
  Paper,
  Typography,
  Stack,
  Skeleton,
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
  toggleFavorites,
  isLoading,
  ...props
}) => {
  return (
    <Stack
      component={Paper}
      sx={{ border: `1px solid ${grey[400]}` }}
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
          <IconButton onClick={toggleFavorites}>
            {isFavorite ? (
              <StarRoundedIcon color="secondary" fontSize="medium" />
            ) : (
              <StarBorderRoundedIcon fontSize="medium" />
            )}
          </IconButton>
        )}
      </Stack>
      <Stack>
        <IconButton sx={{ borderRadius: 0, p: 0 }} href={zuidLink}>
          {isLoading ? (
            <Skeleton width="100%" height={220} />
          ) : (
            <img src={image} width="100%" height={268} />
          )}
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        {isLoading ? (
          <Skeleton width="85%" />
        ) : (
          <Link
            underline="none"
            href={previewLink}
            target="_blank"
            color="secondary"
            sx={{
              ':hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
          >
            Preview
          </Link>
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

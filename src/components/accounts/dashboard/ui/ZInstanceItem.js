import { IconButton, Link, Paper, Typography, Stack } from '@mui/material';
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
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <IconButton onClick={toggleFavorites}>
          {isFavorite ? (
            <StarRoundedIcon color="secondary" fontSize="medium" />
          ) : (
            <StarBorderRoundedIcon fontSize="medium" />
          )}
        </IconButton>
      </Stack>
      <Stack>
        <IconButton sx={{ p: 0 }} href={zuidLink}>
          <img src={image} width="100%" height={220} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
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
        <IconButton href={zuidLink}>
          <SettingsIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ZInstanceItem;

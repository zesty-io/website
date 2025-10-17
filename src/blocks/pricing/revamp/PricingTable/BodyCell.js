import {
  Box,
  TableCell,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const renderValue = (value) => {
  const theme = useTheme();

  if (value === '/') {
    return (
      <CheckIcon
        sx={{ color: theme.palette.zesty.zestyOrange }}
        fontSize="small"
      />
    );
  } else if (value === 'x') {
    return (
      <CloseIcon
        sx={{ color: theme.palette.zesty.zestyZambezi }}
        fontSize="small"
      />
    );
  } else {
    return (
      <Typography
        fontSize={16}
        fontWeight={400}
        color={theme.palette.zesty.zestyZambezi}
      >
        {value}
      </Typography>
    );
  }
};

const BodyCell = ({ data, tier, selectedTier }) => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));

  if (selectedTier !== tier && !isSmall) {
    return <></>;
  }
  return (
    <TableCell>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '64px',
          mx: 1,
          maxWidth: '260px',
          backgroundColor:
            tier === 'Free'
              ? 'white'
              : tier === 'Growth' || tier === 'Enterprise'
              ? '#F2F4F7'
              : 'none',
        }}
      >
        {renderValue(data)}
      </Box>
    </TableCell>
  );
};

export default BodyCell;

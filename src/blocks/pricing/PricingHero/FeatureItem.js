// Mui Imports

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

const FeatureItem = ({ item, white }) => {
  const theme = useTheme();
  return (
    <>
      {item && (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <CheckIcon
            sx={{
              width: 16,
              height: 16,
              color: white
                ? theme.palette.common.white
                : theme.palette.zesty.zestyZambezi,
            }}
          />
          <Typography
            sx={{
              color: white
                ? theme.palette.common.white
                : theme.palette.zesty.zestyZambezi,
            }}
          >
            {item}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default FeatureItem;

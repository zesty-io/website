import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';

const Partners = ({ logoPartners }) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {logoPartners.map((item, i) => (
        <Box
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={item?.url}
            alt={item?.zuid}
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(1)'
                  : 'none',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Partners;

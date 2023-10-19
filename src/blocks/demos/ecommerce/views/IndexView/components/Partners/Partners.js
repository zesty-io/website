import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/lacoste-original.svg',
  'https://assets.maccarianagency.com/svg/logos/reebok-original.svg',
  'https://assets.maccarianagency.com/svg/logos/puma-original.svg',
  'https://assets.maccarianagency.com/svg/logos/under-armour-original.svg',
  'https://assets.maccarianagency.com/svg/logos/lacoste-original.svg',
  'https://assets.maccarianagency.com/svg/logos/reebok-original.svg',
  'https://assets.maccarianagency.com/svg/logos/puma-original.svg',
  'https://assets.maccarianagency.com/svg/logos/under-armour-original.svg',
];

const Partners = () => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={{ xs: 'center', md: 'space-between' }}
      flexWrap={'wrap'}
    >
      {mock.map((item, i) => (
        <Box
          maxWidth={{ xs: 50, md: 60 }}
          key={i}
          marginX={{ xs: 2, md: 3 }}
          marginY={{ xs: 2, md: 3 }}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={item}
            alt="..."
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

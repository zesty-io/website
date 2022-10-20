import { Link, ListItem } from '@mui/material';
import React from 'react';

const ZMyListItem = ({ logo, link, name, sx, ...props }) => {
  return (
    <ListItem
      alignItems="center"
      disablePadding
      sx={{ pb: 1, ...sx }}
      {...props}
    >
      <img src={logo} height={16} width={16} />
      <Link
        href={link}
        underline="none"
        color="text.primary"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        ml={1}
      >
        {name}
      </Link>
    </ListItem>
  );
};

export default ZMyListItem;

import { Link, ListItem } from '@mui/material';
import React from 'react';

const MyListItem = ({ logo, link, name }) => {
  return (
    <ListItem alignItems="center" sx={{ pb: 1 }} disablePadding>
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

export default MyListItem;

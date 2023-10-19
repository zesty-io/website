import { Typography } from '@mui/material';

export const AccountsTableHead = ({ children }) => {
  return (
    <Typography variant="body1" color={'text.secondary'} fontWeight={700}>
      {children}
    </Typography>
  );
};

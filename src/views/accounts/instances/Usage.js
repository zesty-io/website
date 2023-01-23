import { Grid } from '@mui/material';
import { AccountsHeader } from 'components/accounts';

export const Usage = () => {
  const headerProps = {
    title: 'Usage',
    description: `View your usage`,
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}></AccountsHeader>
    </Grid>
  );
};

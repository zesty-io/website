import { useEffect, useState, React } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { CreateTicket, TicketsTable } from 'components/accounts/support';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import { AccountsHeader, AccountsInput } from 'components/accounts';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function Support() {
  const router = useRouter();
  const { zuid } = router.query;
  const [search, setsearch] = useState('');
  const [instance, setinstance] = useState(null);

  useEffect(() => {
    setinstance(zuid);
  }, []);

  const headerProps = {
    title: 'Support',
    description: `Manage your Tickets`,
  };

  const ticketsTableProps = {
    instanceZUID: instance,
    search,
    setsearch,
  };

  return (
    <InstanceContainer>
      <Grid container>
        <AccountsHeader {...headerProps}>
          <AccountsInput
            search={search}
            setsearch={setsearch}
            placeholder=" Search subjects, ticket #"
            width={250}
          />
          <CreateTicket instanceZUID={instance} />
        </AccountsHeader>
        <Grid item xs={12}>
          <TicketsTable {...ticketsTableProps} />
        </Grid>
      </Grid>
    </InstanceContainer>
  );
}

Support.data = {
  container: 'InstanceContainer',
};

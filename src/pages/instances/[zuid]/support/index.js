import { useEffect, useState, React } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { CreateTicket, TicketsTable } from 'components/accounts/support';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import { AccountsHeader, AccountsInput } from 'components/accounts';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { getCookie } from 'cookies-next';

export default function Support() {
  const router = useRouter();
  const { zuid } = router.query;
  const APP_SID = getCookie('APP_SID');

  const [search, setsearch] = useState('');
  const [instance, setinstance] = useState(null);
  const [isLoading, setloading] = useState(true);
  const [instanceTickets, setTickets] = useState([]);

  useEffect(() => {
    setinstance(zuid);
    fetchTickets();
  }, []);

  const headerProps = {
    title: 'Support',
    description: `Manage your Tickets`,
  };

  const fetchTickets = async () => {
    setTickets([]);

    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${APP_SID}`,
        WorkingInstance: zuid,
      },
    };
    await fetch(
      'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/instance/' +
        zuid,
      requestOptions,
    )
      .then((tickets) => tickets.json())
      .then((tickets) => {
        const allTickets = tickets.data?.map((t) => ({
          ...t,
          number: t.ticketNumber,
        }));
        setTickets(allTickets);
        setloading(false);
      });
  };

  const filteredTicket = instanceTickets?.filter(
    (e) =>
      e.subject.toLowerCase().includes(search.toLowerCase()) ||
      e.ticketNumber.toLowerCase().includes(search.toLowerCase()),
  );

  const getPageData = async () => {
    setloading(true);
    await fetchTickets();
    setloading(false);
  };

  const ticketsTableProps = {
    instanceZUID: instance,
    search,
    setsearch,
    filteredTicket,
    isLoading,
    getPageData,
  };

  const createTicketProps = {
    instanceZUID: instance,
    getPageData,
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
          <CreateTicket {...createTicketProps} />
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

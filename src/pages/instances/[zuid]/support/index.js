import { useEffect, useState, React } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { TicketsTable } from 'components/accounts/support';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function Support() {
  const router = useRouter();
  const { zuid } = router.query;
  const [instance, setinstance] = useState(null);
  const [instanceTickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    setTickets([]);
    const tickets = await fetch(
      'https://support-m3rbwjxm5q-uc.a.run.app/?instance=' + zuid,
      {
        method: 'GET',
      },
    )
      .then((tickets) => tickets.json())
      .then((tickets) => {
        const allTickets = tickets.data?.map((t) => ({
          ...t,
          number: t.ticketNumber,
        }));
        setTickets(allTickets);
      });
  };

  useEffect(() => {
    setinstance(zuid);
    fetchTickets();
  }, []);
  return (
    <>
      <InstanceContainer>
        Instance: {instance}
        <TicketsTable instanceZUID={instance} tickets={instanceTickets} />
        {/* <Typography variant="h4" mb={3} color="text.secondary">
        User ZUID: {userInfo?.ZUID} User Email: {userInfo?.email}
      </Typography> */}
      </InstanceContainer>
    </>
  );
}

Support.data = {
  container: 'InstanceContainer',
};

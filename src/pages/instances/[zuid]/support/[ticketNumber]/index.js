import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { Chat } from 'components/accounts/support';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function ticketItem() {
  const [ticket, setticket] = useState({});
  const [loading, setloading] = useState(true);
  const router = useRouter();
  const { zuid } = router.query;

  const req = {
    cookies: {
      APP_SID: getCookie('APP_SID'),
      ZESTY_WORKING_INSTANCE: zuid,
    },
  };

  useEffect(() => {
    const getTicket = async () => {
      setloading(true);
      try {
        const res = await fetchTicketThread(router.query, req);
        console.log(res);
        setticket(() => ({
          ...res,
          threadContent: res.threadContent.reverse(),
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    };

    if (!!router.query && router.query.ticketNumber) {
      getTicket();
    }
  }, []);

  const chatProps = {
    loading,
    ticket,
    req,
    setticket,
  };

  return (
    <>
      <InstanceContainer>
        <Chat {...chatProps} />
      </InstanceContainer>
    </>
  );
}

ticketItem.data = {
  container: 'InstanceContainer',
};

import { useEffect, useState, React } from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Box, Container, Card, Typography, Button, Stack } from '@mui/material';
export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ticketItem() {
  const router = useRouter();
  // const { userInfo, workingInstance } = useZestyStore((state) => state);
  const { zuid } = router.query;
  const ticketID = router.query.ticketNumber;

  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = useState({});
  const [ticket, setTicket] = useState([]);
  const fetchTicket = async () => {
    setTicket([]);
    const ticket = await fetch(
      'https://support-m3rbwjxm5q-uc.a.run.app/?ticketID=' + ticketID,
      {
        method: 'GET',
      },
    )
      .then((currentTicket) => currentTicket.json())
      .then((currentTicket) => {
        setTicket(currentTicket.data);
      });
  };
  const handleGetInstanceSuccess = (res) => {
    console.log(res, 'succ upp');
    setinstance(res.data);
  };
  const handleGetInstanceErr = (res) => {
    setinstance('There was an error getting this isntance');
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceErr(res);
  };
  const getPageData = async () => {
    await Promise.all([getInstance()]);
  };
  // React.useEffect(() => {
  //   setZestyAPI(getZestyAPI(zuid));
  // }, []);
  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Card
            sx={{
              p: { xs: 2, md: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              width: 1,
              height: 1,
            }}
          >
            <Stack spacing={2}>
              <Button
                sx={{ height: '100%' }}
                type="button"
                color="secondary"
                size="small"
                variant="contained"
                onClick={() => router.back()}
              >
                <Typography
                  variant="p"
                  sx={{
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ArrowBackIcon /> Go Back
                </Typography>
              </Button>
              <Typography
                variant={'h5'}
                fontWeight={700}
                align={'left'}
                marginBottom={4}
              >
                {ticket.subject}
              </Typography>
              <Typography
                variant={'p'}
                dangerouslySetInnerHTML={{ __html: ticket.description }}
              ></Typography>
            </Stack>
          </Card>
        </Container>
      </Box>
    </>
  );
}

ticketItem.data = {
  container: 'InstanceContainer',
};

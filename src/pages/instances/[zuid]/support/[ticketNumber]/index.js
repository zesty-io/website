import { useEffect, useState, React } from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  Stack,
  useTheme,
  Chip,
  Skeleton,
  Grid,
} from '@mui/material';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import ZestyImage from 'blocks/Image/ZestyImage';

export default function ticketItem() {
  const theme = useTheme();
  const router = useRouter();
  // const { userInfo, workingInstance } = useZestyStore((state) => state);
  const { zuid } = router.query;
  const ticketID = router.query.ticketNumber;

  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = useState({});
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTicket = async () => {
    setTicket([]);
    setLoading(true);
    const ticket = await fetch(
      'https://support-m3rbwjxm5q-uc.a.run.app/?ticketID=' + ticketID,
      {
        method: 'GET',
      },
    )
      .then((currentTicket) => currentTicket.json())
      .then((currentTicket) => {
        setTicket(currentTicket);
        if (currentTicket.length != 0) {
          setLoading(false);
        }
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

  console.log('ticket', ticket);

  console.log('loading', loading);

  return (
    <>
      <InstanceContainer>
        <Container sx={{ mt: 10 }}>
          <Card
            elevation={0}
            sx={{
              p: { xs: 2, md: 4 },
            }}
          >
            <Button
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

            <Stack direction={'row'} sx={{ mt: 2 }} spacing={2}>
              <Box>
                {loading ? (
                  <>
                    <Skeleton
                      width={400}
                      variant="text"
                      sx={{ fontSize: '1rem' }}
                    />

                    <Skeleton
                      width={200}
                      variant="text"
                      sx={{ fontSize: '1rem' }}
                    />

                    <Skeleton width={100} sx={{ fontSize: '1rem' }} />
                  </>
                ) : (
                  <>
                    <Typography
                      sx={{ color: theme.palette.zesty.zesyZambezi }}
                      variant={'h5'}
                      fontWeight={700}
                      align={'left'}
                    >
                      {ticket?.ticket?.subject}
                    </Typography>

                    <Typography
                      variant={'p'}
                      dangerouslySetInnerHTML={{
                        __html: ticket?.ticket?.description,
                      }}
                    ></Typography>

                    <Chip
                      sx={{ mt: -3, px: 1 }}
                      color="info"
                      size="small"
                      variant="outlined"
                      label={`#${ticket?.ticket?.ticketNumber}`}
                    />
                  </>
                )}
              </Box>

              <Box>
                {loading ? (
                  <>
                    <Skeleton width={100} sx={{ fontSize: '1rem' }} />
                  </>
                ) : (
                  <>
                    <Chip
                      sx={{ px: 1 }}
                      variant="contained"
                      label={`${ticket?.ticket?.status}`}
                      color={
                        ticket?.ticket?.status === 'Open'
                          ? 'success'
                          : 'default'
                      }
                    />
                  </>
                )}
              </Box>
            </Stack>

            <Box sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                <Grid item sx={12} md={8}>
                  <Card sx={{ p: 4 }}>
                    {ticket?.thread?.data?.map((item) => {
                      const start = item.summary.indexOf('----');
                      const end = item.summary.indexOf('----', start + 1);
                      const date = item?.summary?.match(
                        /On\s\w{3},\s\d{2}\s\w{3}\s\d{4}\s\d{2}:\d{2}:\d{2}/,
                      );

                      console.log(date);

                      return (
                        <>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 2,
                              alignItems: 'center',
                            }}
                          >
                            <ZestyImage
                              alt={'author'}
                              src={`https://ui-avatars.com/api/?name=${item.author.firstName}+${item.author.lastName}&rounded=true&size=35`}
                            />

                            <Stack>
                              <Typography
                                sx={{ display: 'block' }}
                                variant={'p'}
                                component="p"
                                dangerouslySetInnerHTML={{
                                  __html: item?.summary.slice(0, start),
                                }}
                              ></Typography>

                              <Typography
                                component="p"
                                sx={{ fontSize: 12 }}
                                variant={'p'}
                                dangerouslySetInnerHTML={{
                                  __html: date,
                                }}
                              ></Typography>
                            </Stack>
                          </Box>
                        </>
                      );
                    })}
                  </Card>
                </Grid>
                <Grid item sx={12} md={4}>
                  <Card variant="outlined">test</Card>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>
      </InstanceContainer>
    </>
  );
}

ticketItem.data = {
  container: 'InstanceContainer',
};

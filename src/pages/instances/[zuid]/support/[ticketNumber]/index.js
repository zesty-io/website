import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  Stack,
  useTheme,
  Grid,
} from '@mui/material';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import ZestyImage from 'blocks/Image/ZestyImage';
import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function ticketItem() {
  const theme = useTheme();
  const [ticket, setticket] = useState({});
  const { ticket: ticketData, threadContent } = ticket || {};
  const router = useRouter();
  const { zuid } = router.query;

  const req = {
    cookies: {
      APP_SID: getCookie('APP_SID'),
      ZESTY_WORKING_INSTANCE: zuid,
    },
  };
  const getTicket = async () => {
    const res = await fetchTicketThread(router.query, req);
    setticket(res);
  };

  useEffect(() => {
    if (!!router.query && router.query.ticketNumber) {
      getTicket();
    }
  }, [router]);

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
                <Typography
                  sx={{ color: theme.palette.zesty.zesyZambezi }}
                  variant={'h5'}
                  fontWeight={700}
                  align={'left'}
                >
                  {ticketData?.subject}
                </Typography>
                {ticket.error && (
                  <Typography
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                    }}
                  >
                    {ticket.error}
                  </Typography>
                )}

                <Typography
                  component="p"
                  variant={'p'}
                  dangerouslySetInnerHTML={{
                    __html: ticketData?.description,
                  }}
                ></Typography>
              </Box>
            </Stack>

            <Box sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 5,
                      minHeight: 300,
                      maxHeight: 700,
                      overflowX: 'hidden',
                      overflowY: 'auto',
                    }}
                  >
                    <Box>
                      {threadContent
                        ?.slice(0)
                        .reverse()
                        .map((item) => {
                          //const end = item.summary.indexOf('----', start + 1);

                          const attachment = item.attachments.length > 0;
                          // Regex to match with HTML Breaks
                          const HTMLBreak = /<br\s*\/?>/gi;

                          // Regex to match img path
                          const IMAGESource = /src="(\/api.*?)"/g;

                          // Grab only text contents and remove replies
                          const content = item?.content
                            .replace(HTMLBreak, '')
                            .replace(
                              IMAGESource,
                              `src="https://desk.zoho.com$1"`,
                            );

                          const options = {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          };
                          const date = new Date(Date.parse(item.createdTime));
                          const responseDate = `${date.toLocaleDateString(
                            'en-US',
                            options,
                          )}  ${date.toLocaleTimeString()}`;

                          return (
                            <Box key={item.threadId} sx={{ py: 1 }}>
                              {item?.author?.type === 'AGENT' ? (
                                <Box
                                  sx={{
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'flex-end',
                                  }}
                                >
                                  <ZestyImage
                                    alt={'author'}
                                    src={`https://ui-avatars.com/api/?name=${item?.author?.firstName}+${item?.author?.lastName}&rounded=true&size=35`}
                                  />

                                  <Stack>
                                    <Typography
                                      sx={{
                                        display: 'block',
                                        background:
                                          theme.palette.zesty.zestyZambezi,
                                        color: theme.palette.common.white,
                                        p: 2,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                        borderBottomRightRadius: 10,
                                      }}
                                      variant={'p'}
                                      component="p"
                                      dangerouslySetInnerHTML={{
                                        __html: content,
                                      }}
                                    ></Typography>
                                    <Box sx={{ display: 'flex' }}>
                                      <Typography
                                        variant="caption1"
                                        sx={{
                                          color: theme.palette.zesty.zestyGrey,
                                          fontSize: 12,
                                          mt: 0.5,
                                        }}
                                      >
                                        {item?.author?.firstName}{' '}
                                        {item?.author?.lastName}{' '}
                                      </Typography>

                                      <Typography
                                        variant="caption1"
                                        sx={{
                                          color: theme.palette.zesty.zestyGrey,
                                          fontSize: 12,
                                          mt: 0.5,
                                        }}
                                      >
                                        {responseDate}
                                      </Typography>
                                    </Box>
                                  </Stack>
                                </Box>
                              ) : (
                                <Box
                                  sx={{
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-end',
                                  }}
                                >
                                  <Stack
                                    sx={{
                                      background:
                                        theme.palette.zesty.zestyOrange,
                                      color: theme.palette.common.white,
                                      p: 2,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                      borderBottomLeftRadius: 10,
                                    }}
                                  >
                                    {attachment && (
                                      <ZestyImage
                                        style={{
                                          borderRadius: 10,
                                          width: '100%',
                                          maxWidth: 700,
                                        }}
                                        alt="test"
                                        src={item?.attachments[0]?.previewurl}
                                      />
                                    )}

                                    <Typography
                                      sx={{
                                        display: 'block',
                                        mt: attachment ? 2 : 0,
                                      }}
                                      variant={'p'}
                                      dangerouslySetInnerHTML={{
                                        __html: content,
                                      }}
                                    ></Typography>
                                  </Stack>

                                  <ZestyImage
                                    alt={'author'}
                                    src={`https://ui-avatars.com/api/?name=${item?.author?.firstName}+${item?.author?.lastName}&rounded=true&size=35`}
                                  />
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                    </Box>
                  </Card>

                  <Typography
                    variant="caption"
                    sx={{ mt: 2, color: theme.palette.zesty.zestyZambezi }}
                  >
                    Ticket correspondence is sent via email
                  </Typography>

                  {/* Hide Response Box  */}
                  {/* <Card
                    sx={{
                      p: 4,
                      borderRadius: 5,
                      mt: 2,
                    }}
                  >
                    <Box component="form">
                      <TextareaAutosize
                        minRows={2}
                        aria-label="Message..."
                        placeholder="Write your response...."
                        style={{
                          outline: 'none',
                          width: '100%',
                          border: 'none',
                          padding: 15,
                        }}
                      />

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          mt: 1,
                          gap: 1,
                        }}
                      >
                        <AttachFileIcon sx={{ cursor: 'pointer' }} />
                        <Button
                          sx={{ px: 2 }}
                          variant="contained"
                          type="submit"
                        >
                          Send
                        </Button>
                      </Box>
                    </Box>
                  </Card> */}
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

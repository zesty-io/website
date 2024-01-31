import { useRouter } from 'next/router';
import {
  Box,
  // Container,
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
// import ZestyImage from 'blocks/Image/ZestyImage';
import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
// import { TextareaAutosize } from '@mui/base/TextareaAutosize';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
import {
  AgentChatBubble,
  ClientChatBubble,
  ChatLoadingSpinner,
} from 'components/accounts/support';

export default function ticketItem() {
  const theme = useTheme();
  const [ticket, setticket] = useState({});
  const { ticket: ticketData, threadContent } = ticket || {};
  const router = useRouter();
  const { zuid } = router.query;
  const [loading, setloading] = useState(true);

  const req = {
    cookies: {
      APP_SID: getCookie('APP_SID'),
      ZESTY_WORKING_INSTANCE: zuid,
    },
  };

  const getTicket = async () => {
    setloading(true);
    try {
      const res = await fetchTicketThread(router.query, req);
      console.log(res);
      setticket(res);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (!!router.query && router.query.ticketNumber) {
      getTicket();
    }
  }, [router]);

  const contentFilter = (content) => {
    // Regex to match with HTML Breaks
    const HTMLBreak = /<br\s*\/?>/gi;

    // Regex to match img path
    const IMAGESource = /src="(\/api.*?)"/g;

    // Regular expression to match from <meta> to the end of the string
    const metaRegex = /<meta[^>]*>[\s\S]*/;

    // Grab only text contents and remove replies
    return content
      .replace(HTMLBreak, '')
      .replace(IMAGESource, `src="https://desk.zoho.com$1"`)
      .replace(metaRegex, '');
  };

  const getResponseTimestamp = (date) => {
    const dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
    };

    const dateObj = new Date(Date.parse(date));

    const responseDate = `${dateObj.toLocaleDateString('en-US', dateOptions)}`;

    const responseTime = `${dateObj.toLocaleTimeString('en-US', timeOptions)}`;

    return { responseDate, responseTime };
  };

  const isDifferentDate = (now, prev) => {
    const dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const nowDate = new Date(Date.parse(now));
    const prevDate = new Date(Date.parse(prev));

    const res =
      nowDate.toLocaleDateString('en-US', dateOptions) !==
      prevDate.toLocaleDateString('en-US', dateOptions);

    return res;
  };

  return (
    <>
      <InstanceContainer>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Card
              elevation={0}
              sx={{
                p: { xs: 2, md: 4 },
              }}
            >
              <Button
                type="button"
                // color="secondary"
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

              {loading ? (
                <ChatLoadingSpinner />
              ) : (
                <>
                  <Stack direction={'row'} sx={{ mt: 2 }} spacing={2}>
                    <Box>
                      <Typography
                        sx={{ color: theme.palette.zesty.zesyZambezi }}
                        variant={'h5'}
                        fontWeight={700}
                        align={'left'}
                      >
                        Subject: {ticketData?.subject}
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
                        sx={{ color: theme.palette.zesty.zesyZambezi }}
                        variant={'p'}
                        fontWeight={500}
                        align={'left'}
                      >
                        Description: {ticketData?.description}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mt: 5 }}>
                    <Card
                      sx={{
                        // background: theme.palette.zesty.zestyZambezi,
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
                          .map((item, index) => {
                            //const end = item.summary.indexOf('----', start + 1);

                            const attachment = item.attachments.length > 0;

                            const content = contentFilter(item?.content);

                            const { responseDate, responseTime } =
                              getResponseTimestamp(item?.createdTime);

                            const isDiffDate =
                              index > 0 &&
                              isDifferentDate(
                                item?.createdTime,
                                threadContent?.slice(0).reverse()[index - 1]
                                  ?.createdTime,
                              );

                            return (
                              <Box key={item.threadId} sx={{ py: 1 }}>
                                {(index === 0 || isDiffDate) && (
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      // gap: 1,
                                      mb: 1,
                                      cursor: 'default',
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: theme.palette.zesty.zestyGrey,
                                        fontSize: 12,
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 5,
                                        border: `1px solid ${theme.palette.zesty.zestyGrey}`,
                                      }}
                                    >
                                      {responseDate}
                                    </Typography>
                                  </Box>
                                )}

                                {item?.author?.type === 'AGENT' ? (
                                  <AgentChatBubble
                                    time={responseTime}
                                    item={item}
                                    attachment={attachment}
                                    content={content}
                                  />
                                ) : (
                                  <ClientChatBubble
                                    time={responseTime}
                                    item={item}
                                    attachment={attachment}
                                    content={content}
                                  />
                                )}
                              </Box>
                            );
                          })}
                      </Box>
                    </Card>
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      }}
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
                        placeholder="Write your response..."
                        style={{
                          outline: 'none',
                          width: '100%',
                          border: 'none',
                          padding: 15,
                          borderRadius: 10,
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
                  </Box>
                </>
              )}
            </Card>
          </Grid>
        </Grid>
      </InstanceContainer>
    </>
  );
}

ticketItem.data = {
  container: 'InstanceContainer',
};

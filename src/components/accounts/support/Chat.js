import { Button, Card, Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import ChatLoadingSpinner from './ChatLoadingSpinner';
import ClientChatBubble from './ClientChatBubble';
import AgentChatBubble from './AgentChatBubble';
import { useTheme } from '@emotion/react';
import addAttachmentPreview from 'lib/supportPortal/addAttachmentPreview';
import { useRouter } from 'next/router';

const Info = ({ title, content }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mb: 5,
      }}
    >
      <Box
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          pb: 1,
          mb: 1,
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={14}
          color={theme.palette.zesyZambezi}
        >
          {title.toUpperCase()}
        </Typography>
      </Box>
      <Typography variant="p" color={theme.palette.zesty.zestyGrey}>
        {content}
      </Typography>
    </Box>
  );
};

const Chat = ({ loading, ticket, setticket, req }) => {
  const theme = useTheme();
  const router = useRouter();
  const { ticket: ticketData, threadContent } = ticket || {};

  const getPreviewURL = async ({
    attachment,
    threadIndex,
    attachmentIndex,
  }) => {
    try {
      const res = await addAttachmentPreview({ attachment, req });
      // console.log(res);

      setticket((prevTicket) => {
        // Ensure the indices are within the array bounds
        if (
          prevTicket.threadContent[threadIndex] &&
          prevTicket.threadContent[threadIndex].attachments[attachmentIndex]
        ) {
          //cloning and updating arrays
          const updatedTicket = {
            ...prevTicket,
            threadContent: prevTicket.threadContent.map((thread, tIndex) => {
              if (tIndex === threadIndex) {
                return {
                  ...thread,
                  attachments: thread.attachments.map((attachment, aIndex) => {
                    if (aIndex === attachmentIndex) {
                      return { ...attachment, previewurl: res };
                    }
                    return attachment;
                  }),
                };
              }
              return thread;
            }),
          };

          return updatedTicket;
        } else {
          // Handle the case where indices are out of bounds
          console.error('Invalid threadContent or attachment index.');
          return prevTicket; // Return the previous state if indices are invalid
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

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
      <Box
        spacing={2}
        sx={{
          pt: 1.5,
          height: '100%',
          display: 'flex',
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        {/**chat box */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            elevation={0}
            sx={{
              px: { xs: 2, md: 4 },
              height: '100%',
              width: '100%',
              '*': {
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            }}
          >
            <Button
              type="button"
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
            <Card
              sx={{
                background: theme.palette.zesty.light,
                px: 4,
                py: 1,
                mt: 1,
                borderRadius: 5,
                height: 700,
                overflowX: 'hidden',
                overflowY: 'auto',
                // bgcolor: 'red',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              {loading ? (
                <ChatLoadingSpinner />
              ) : (
                threadContent?.slice(0).map((item, threadIndex) => {
                  //const end = item.summary.indexOf('----', start + 1);

                  const content = contentFilter(item?.content);

                  const { responseDate, responseTime } = getResponseTimestamp(
                    item?.createdTime,
                  );

                  const isDiffDate =
                    threadIndex > 0 &&
                    isDifferentDate(
                      item?.createdTime,
                      threadContent?.slice(0)[threadIndex - 1]?.createdTime,
                    );

                  const bubbleProps = {
                    time: responseTime,
                    item,
                    content,
                    threadIndex,
                    getPreviewURL,
                  };

                  return (
                    <Box key={item.threadId} sx={{ py: 1 }}>
                      {(threadIndex === 0 || isDiffDate) && (
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
                        <AgentChatBubble {...bubbleProps} />
                      ) : (
                        <ClientChatBubble {...bubbleProps} />
                      )}
                    </Box>
                  );
                })
              )}
            </Card>
          </Card>
        </Box>
        {/**info box */}
        <Box
          sx={{
            borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: 320,
            flex: '0 1 auto',
            height: '100%',
            px: 2,
            minWidth: 300,
            pt: 4,
          }}
        >
          <Info title="ticketID" content={ticketData?.id ?? 'n/a'} />
          <Info title="subject" content={ticketData?.subject ?? 'n/a'} />
          <Info
            title="description"
            content={ticketData?.description ?? 'n/a'}
          />
          <Info title="status" content={ticketData?.status ?? 'n/a'} />
        </Box>
      </Box>
    </>
  );
};

export default Chat;

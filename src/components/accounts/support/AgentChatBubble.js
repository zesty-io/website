import { Box, Stack, Typography, useTheme } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import React from 'react';
import Attachment from './Attachment';

const AgentChatBubble = ({ item, attachment, content, time }) => {
  const theme = useTheme();
  return (
    <>
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
          width={35}
          height={35}
        />

        <Stack>
          <Typography
            sx={{
              color: theme.palette.zesty.zestyGrey,
              fontSize: 12,
              // mt: 0.5,
            }}
          >
            {item?.author?.firstName}, {time}
          </Typography>
          {attachment && (
            // <ZestyImage
            //   style={{
            //     borderRadius: 10,
            //     width: '100%',
            //     maxWidth: 300,
            //     marginBottom: 2,
            //   }}
            //   alt="test"
            //   src={item?.attachments[0]?.previewurl}
            // />
            <Attachment attachments={item?.attachments} />
          )}
          {content && (
            <Typography
              sx={{
                display: 'block',
                background: theme.palette.zesty.agentChatBubble,
                color: theme.palette.text.dark,
                p: 1,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                width: 'fit-content',
              }}
              variant={'p'}
              component="p"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></Typography>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default AgentChatBubble;

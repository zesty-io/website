import { Box, Stack, Typography, useTheme } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import React from 'react';
import Attachment from './Attachment';

const AgentChatBubble = ({
  item,
  content,
  time,
  threadIndex,
  getPreviewURL,
}) => {
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
            }}
          >
            {item?.author?.firstName}, {time}
          </Typography>
          {item?.attachments?.length > 0 && (
            <Attachment
              attachments={item?.attachments}
              threadIndex={threadIndex}
              getPreviewURL={getPreviewURL}
            />
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

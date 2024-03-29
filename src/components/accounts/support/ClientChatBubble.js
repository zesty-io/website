import { Box, Stack, Typography, useTheme } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import React from 'react';
import Attachment from './Attachment';

const ClientChatBubble = ({
  item,
  content,
  time,
  threadIndex,
  getPreviewURL,
}) => {
  const theme = useTheme();
  return (
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
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
              background: theme.palette.zesty.zestyOrange,
              color: theme.palette.common.white,
              p: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              maxWidth: '500px',
              wordWrap: 'break-word',
            }}
            variant={'p'}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></Typography>
        )}
      </Stack>

      <ZestyImage
        alt={'author'}
        src={`https://ui-avatars.com/api/?name=${item?.author?.firstName}+${item?.author?.lastName}&rounded=true&size=35`}
        width={35}
        height={35}
      />
    </Box>
  );
};

export default ClientChatBubble;

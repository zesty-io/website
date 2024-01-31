import { Box, Stack, Typography, useTheme } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import React from 'react';

const ClientChatBubble = ({ item, attachment, content, time }) => {
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
          // gap: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
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
          <ZestyImage
            style={{
              borderRadius: 10,
              width: '100%',
              maxWidth: 300,
              marginBottom: 2,
            }}
            alt="test"
            src={item?.attachments[0]?.previewurl}
          />
        )}

        {content && (
          <Typography
            sx={{
              display: 'block',
              // mt: attachment ? 2 : 0,
              background: theme.palette.zesty.zestyOrange,
              color: theme.palette.common.white,
              p: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              width: 'fit-content',
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

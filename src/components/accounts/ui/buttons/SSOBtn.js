import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { accounts } from 'components/accounts/constants';
import React, { useEffect } from 'react';

const Index = ({
  image = accounts.logos.google,
  title = 'Sign in with Google',
  bodyColor = '#fff',
  logoColor = '#fff',
  textColor = '#333333',
  borderColor = grey[500],
  href,
}) => {
  const handleClick = () => {
    const popup = window.open(href, 'Pop up window');
    popup.postMessage('message', window.location.origin);
  };

  useEffect(() => {
    const redirectLogic = (message) => {
      if (message.origin === 'https://auth.api.zesty.io') {
        if (message.data.source === 'zesty' && message.data.status === '200') {
          let referrer = window.document.referrer;

          referrer =
            window.document.referrer === '' ||
            window.document.referrer.includes('/logout/') ||
            window.document.referrer.includes('/login/')
              ? window.location.origin + '/dashboard/'
              : window.document.referrer;
          message.source.close();

          if (
            referrer.includes('/logout/') ||
            referrer.includes('/login/') ||
            !referrer.indexOf('/docsOverview/') === 0
          ) {
            referrer = window.location.origin + '/dashboard/';
            window.location.href = `${referrer}`;
          } else {
            window.location.href = `${referrer}`;
          }
        }
      }
    };
    window.addEventListener('message', redirectLogic);
    return () => window.removeEventListener('message', redirectLogic);
  }, []);

  return (
    <Stack
      onClick={handleClick}
      direction={'row'}
      gap={1}
      alignItems="center"
      width={1}
      sx={{
        borderRadius: '3px',
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        background: bodyColor,
        '&:hover': {
          filter: 'contrast(120%)',
          boxShadow: 2,
        },
      }}
    >
      <Stack
        p={1}
        bgcolor={logoColor}
        alignItems={'center'}
        justifyItems="center"
        sx={{
          borderRadius: '3px 0 0 3px',
        }}
      >
        <img src={image} alt={title} height={'24px'} width="24px" />
      </Stack>
      <Stack
        width={1}
        textAlign="center"
        sx={{
          color: textColor,
        }}
      >
        <Typography
          fontWeight={'500'}
          mr={6}
          color={textColor}
          whiteSpace={'nowrap'}
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};
export const SSOBtn = React.memo(Index);

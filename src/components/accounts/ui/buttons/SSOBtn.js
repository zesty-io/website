import { Button, Stack, Typography } from '@mui/material';
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
              : window.document.referrer.replace(/^.*\/\/[^\/]+/, '');
          message.source.close();
          const sessionPrevUrl = sessionStorage.getItem('prevUrl');
          const prevUrl = window.document.referrer.replace(/^.*\/\/[^\/]+/, '');

          sessionStorage.removeItem('prevUrl');
          if (prevUrl === sessionPrevUrl || referrer.indexOf('/docs/') === 0) {
            window.location.href = referrer;
          } else {
            window.location.href = '/dashboard/';
          }
        }
      }
    };
    window.addEventListener('message', redirectLogic);
    return () => window.removeEventListener('message', redirectLogic);
  }, []);

  return (
    <Button
      title={title}
      aria-label={title}
      variant="text"
      fullWidth
      onClick={handleClick}
      direction={'row'}
      gap={1}
      alignItems="center"
      width={1}
      sx={{
        pl: '22px',
        py: '8px',
        mt: '16px',
        borderRadius: '4px',
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        background: bodyColor,
        '&:hover': {
          background: borderColor,
        },
      }}
    >
      <Stack
        bgcolor={logoColor}
        alignItems={'center'}
        justifyItems="start"
        sx={{
          borderRadius: '3px 0 0 3px',
          bgcolor: 'transparent',
        }}
      >
        {typeof image === 'string' ? (
          <img src={image} alt={title} height={'24px'} width="24px" />
        ) : (
          image
        )}
      </Stack>
      <Stack
        width={1}
        textAlign="start"
        sx={{
          color: textColor,
          ml: 2,
        }}
      >
        <Typography
          fontWeight={'500'}
          mr={'8px'}
          fontSize={15}
          color={textColor}
          whiteSpace={'nowrap'}
        >
          {title}
        </Typography>
      </Stack>
    </Button>
  );
};
export const SSOBtn = React.memo(Index);

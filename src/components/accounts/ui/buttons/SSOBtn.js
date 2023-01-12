import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { accounts } from 'components/accounts/constants';
import { useRouter } from 'next/router';
import React from 'react';

const Index = ({
  image = accounts.logos.google,
  title = 'Sign in with Google',
  bodyColor = '#fff',
  logoColor = '#fff',
  textColor = '#333333',
  borderColor = grey[500],

  href,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
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

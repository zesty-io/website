import { Link, Stack, Typography, useTheme } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';

const Main = ({ data }) => {
  const overview = { label: 'Overview', name: 'Overview', href: '#overview' };
  const newData = [overview, ...data];
  const [currentHash, setcurrentHash] = useState('#overview');
  const handleHashChange = () => {
    setcurrentHash(window.location.hash);
  };
  const theme = useTheme();

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Stack height={1} width={1} data-testid="table-of-contents">
      <Typography variant="button" color={'black'} fontWeight={700} pl={'20px'}>
        On this Page
      </Typography>
      <Stack px={0}>
        {newData.map((e) => {
          const active = currentHash === e.href ? true : false;
          return (
            <Link
              href={e.href}
              sx={{
                borderLeft: `3px solid ${
                  active ? theme.palette.zesty.zestyOrange : '#ffd5c1'
                }`,
                fontWeight: active ? '600' : '400',
                fontSize: '8px',
                textDecoration: active ? 'none !important' : 'none',
                backgroundColor: active ? '#ffd6c4' : 'white',
                color: active
                  ? `${theme.palette.zesty.zestyOrange} !important`
                  : '#6b7280',
                borderRadius: '0 5px 5px 0',
                pl: '20px',
                pr: '5px',
                py: '5px',
                '&:hover': {
                  color: '#333333',
                  textDecoration: 'underline #333333',
                  borderLeft: `3px solid ${theme.palette.zesty.zestyOrange}`,
                  // bgcolor: '#F2F2F2',
                },
              }}
            >
              <Typography variant="button" whiteSpace={'normal'}>
                {e.name}
              </Typography>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export const TableOfContent = memo(Main);

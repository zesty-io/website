import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const mock = [
  {
    href: '#',
    title: 'Help Center',
    isActive: false,
  },
  {
    href: '#',
    title: 'Articles',
    isActive: false,
  },
  {
    title: 'Account',
    isActive: true,
  },
];

const Breadcrumb = () => {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        {mock.map((item, index) => (
          <span key={index}>
            {item.isActive ? (
              <Typography color="text.primary">{item.title}</Typography>
            ) : (
              <Link
                href={item.href}
                sx={{
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {item.title}
              </Link>
            )}
          </span>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;

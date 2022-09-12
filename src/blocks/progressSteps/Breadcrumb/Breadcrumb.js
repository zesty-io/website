import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const mock = [
  {
    href: '/mindshare/',
    title: 'Blog',
    isActive: false,
  },
  {
    href: '/news/',
    title: 'News',
    isActive: true,
  },
];

const Breadcrumb = ({ array }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {array.map((item, index) => (
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
  );
};

export default Breadcrumb;

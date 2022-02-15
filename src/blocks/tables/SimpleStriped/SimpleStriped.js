import React from 'react';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    name: 'Clara Bertoletti',
    email: 'clara.bertoletti@example.com',
    title: 'Regional Paradigm Technician',
    status: 'Active',
    role: 'Admin',
  },
  {
    name: 'Jhon Anderson',
    email: 'jhon.anderson@example.com',
    title: 'Product Developer',
    status: 'Active',
    role: 'Owner',
  },
  {
    name: 'Chary Smith',
    email: 'chary.smith@example.com',
    title: 'Senior Sales Manager',
    status: 'Active',
    role: 'Member',
  },
  {
    name: 'Clara Bertoletti',
    email: 'clara.bertoletti@example.com',
    title: 'Senior JavaScript Developer',
    status: 'Active',
    role: 'Admin',
  },
  {
    name: 'Jhon Anderson',
    email: 'jhon.anderson@example.com',
    title: 'Accounting Assistant',
    status: 'Active',
    role: 'Owner',
  },
  {
    name: 'Chary Smith',
    email: 'chary.smith@example.com',
    title: 'Senior Executive',
    status: 'Active',
    role: 'Admin',
  },
];

const SimpleStriped = () => {
  const theme = useTheme();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Role
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {mock.map((item, i) => (
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant={'subtitle2'} fontWeight={700}>
                    {item.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={'primary'}
                    variant={'subtitle2'}
                    fontWeight={700}
                    sx={{ cursor: 'pointer' }}
                  >
                    Edit
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SimpleStriped;

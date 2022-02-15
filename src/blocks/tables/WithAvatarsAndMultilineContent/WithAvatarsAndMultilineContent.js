import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    user: {
      name: 'Clara Bertoletti',
      email: 'clara.bertoletti@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    occupation: {
      title: 'Regional Paradigm Technician',
      subtitle: 'Optimization',
    },
    status: 'Active',
    role: 'Admin',
  },
  {
    user: {
      name: 'Jhon Anderson',
      email: 'jhon.anderson@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    },
    occupation: {
      title: 'Product Developer',
      subtitle: 'Tech',
    },
    status: 'Active',
    role: 'Owner',
  },
  {
    user: {
      name: 'Andreas Smith',
      email: 'andreas.smith@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    },
    occupation: {
      title: 'Senior Sales Manager',
      subtitle: 'Marketing & Sales',
    },
    status: 'Active',
    role: 'Member',
  },
  {
    user: {
      name: 'Clara Bertoletti',
      email: 'clara.bertoletti@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    occupation: {
      title: 'Senior JavaScript Developer',
      subtitle: 'Tech',
    },
    status: 'Active',
    role: 'Admin',
  },
  {
    user: {
      name: 'Jhon Anderson',
      email: 'jhon.anderson@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    occupation: {
      title: 'Accounting Assistant',
      subtitle: 'Finance',
    },
    status: 'Active',
    role: 'Owner',
  },
  {
    user: {
      name: 'Andreas Smith',
      email: 'andreas.smith@example.com',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    occupation: {
      title: 'Senior Executive',
      subtitle: 'Operations',
    },
    status: 'Active',
    role: 'Admin',
  },
];

const WithAvatarsAndMultilineContent = () => {
  const theme = useTheme();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.main' }}>
            <TableRow>
              <TableCell>
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color={'text.secondary'}
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <List sx={{ p: 0, m: 0 }}>
                    <ListItem sx={{ p: 0, m: 0 }}>
                      <ListItemAvatar>
                        <Avatar src={item.user.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.user.name}
                        secondary={item.user.email}
                      />
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell>
                  <Typography>{item.occupation.title}</Typography>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.occupation.subtitle}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{
                      bgcolor: alpha(theme.palette.success.light, 0.1),
                      color: theme.palette.success.dark,
                      paddingX: 1.5,
                      paddingY: 0.5,
                      borderRadius: 4,
                      display: 'inline',
                    }}
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

export default WithAvatarsAndMultilineContent;

import { React } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Container from 'components/Container';

const mock = [
  {
    contact: { firstName: 'Clara Bertoletti' },
    subject: 'Regional Paradigm Technician',
    status: 'Active',
    ticketNumber: 116,
  },
  {
    contact: { firstName: 'Jhon Anderson' },
    subject: 'Product Developer',
    status: 'Active',
    ticketNumber: 253,
  },
  {
    contact: { firstName: 'Chary Smith' },
    subject: 'Senior Sales Manager',
    status: 'Active',
    ticketNumber: 834,
  },
  {
    contact: { firstName: 'Clara Bertoletti' },
    subject: 'Senior JavaScript Developer',
    status: 'Active',
    ticketNumber: 343,
  },
  {
    contact: { firstName: 'Jhon Anderson' },
    subject: 'Accounting Assistant',
    status: 'Active',
    ticketNumber: 893,
  },
  {
    contact: { firstName: 'Chary Smith' },
    subject: 'Senior Executive',
    status: 'Active',
    ticketNumber: 563,
  },
];

const TicketsTable = ({ tickets }) => {
  const theme = useTheme();
  const router = useRouter();
  const handleRoute = (ticketNumber) => {
    const currentPath = router.asPath; // to get current route
    router.push(`${currentPath}/${ticketNumber}`);
  };

  return (
    <Container>
      <Typography variant={'h4'} fontWeight={700}></Typography>
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
                  subject
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
                  Ticket #
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets?.map((item, i) => (
              <TableRow
                hover={true}
                onClick={() => handleRoute(item.id)}
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                  cursor: 'pointer',
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant={'subsubject2'} fontWeight={700}>
                    {item.contact.firstName} {item.contact.lastName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subsubject2'}>
                    {item.subject}
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
                  <Typography color={'text.secondary'} variant={'subsubject2'}>
                    {item.ticketNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={'green'}
                    variant={'subsubject2'}
                    fontWeight={700}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleRoute(item.id)}
                  >
                    View
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

export default TicketsTable;

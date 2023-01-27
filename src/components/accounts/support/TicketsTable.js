import React, { useEffect, useMemo, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import { AccountsTable, AccountsTableHead } from 'components/accounts';

const mock = [
  {
    id: 1,
    contact: { firstName: 'Clara Bertoletti' },
    subject: 'Regional Paradigm Technician',
    status: 'Active',
    ticketNumber: 116,
  },
  {
    id: 2,
    contact: { firstName: 'Jhon Anderson' },
    subject: 'Product Developer',
    status: 'Active',
    ticketNumber: 253,
  },
  {
    id: 3,
    contact: { firstName: 'Chary Smith' },
    subject: 'Senior Sales Manager',
    status: 'Active',
    ticketNumber: 834,
  },
  {
    id: 4,
    contact: { firstName: 'Clara Bertoletti' },
    subject: 'Senior JavaScript Developer',
    status: 'Active',
    ticketNumber: 343,
  },
  {
    id: 5,
    contact: { firstName: 'Jhon Anderson' },
    subject: 'Accounting Assistant',
    status: 'Active',
    ticketNumber: 893,
  },
  {
    id: 6,
    contact: { firstName: 'Chary Smith' },
    subject: 'Senior Executive',
    status: 'Active',
    ticketNumber: 563,
  },
];

const TicketsTable = () => {
  const router = useRouter();
  const { zuid } = router.query;

  const [isLoading, setIsLoading] = useState(true);

  const [instanceTickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    setTickets([]);
    const tickets = await fetch(
      'https://support-m3rbwjxm5q-uc.a.run.app/?instance=' + zuid,
      {
        method: 'GET',
      },
    )
      .then((tickets) => tickets.json())
      .then((tickets) => {
        const allTickets = tickets.data?.map((t) => ({
          ...t,
          number: t.ticketNumber,
        }));
        setTickets(allTickets);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const columns = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'contact',
      headerName: 'Name',
      minWidth: 300,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Name</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography variant={'p'} fontWeight={700}>
            {params?.row?.contact.firstName} {params?.row?.contact.lastName}
          </Typography>
        );
      },
    },
    {
      field: 'subject',
      headerName: 'Subject',
      minWidth: 400,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Subject</AccountsTableHead>,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 110,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Status</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography
            color={
              params?.row?.status === 'Active' ? 'green' : 'text.secondary'
            }
            variant={'p'}
            fontWeight={params?.row?.status === 'Active' ? 700 : 400}
          >
            {params?.row?.status}
          </Typography>
        );
      },
    },
    {
      field: 'ticketNumber',
      headerName: 'Ticket #',
      minWidth: 110,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Ticket #</AccountsTableHead>,
    },
    {
      field: 'view',
      headerName: '',
      sortable: false,
      flex: 1,
      minWidth: 80,
      renderCell: (params) => {
        const handleRoute = (ticketNumber) => {
          const currentPath = router.asPath; // to get current route
          router.push(`${currentPath}/${ticketNumber}`);
        };

        return (
          <Button title="View" onClick={() => handleRoute(params?.row?.id)}>
            <Typography variant={'p'}>View</Typography>
          </Button>
        );
      },
    },
  ]);

  return (
    <Container>
      <AccountsTable
        loading={isLoading}
        rows={instanceTickets}
        columns={columns}
        pageSize={100}
        autoHeight={false}
        hasGridToolbar={true}
      />
    </Container>
  );
};

export default TicketsTable;

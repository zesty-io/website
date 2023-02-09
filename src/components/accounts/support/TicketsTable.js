import React, { useMemo } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { AccountsTable, AccountsTableHead } from 'components/accounts';
import { useRouter } from 'next/router';

const TicketsTable = ({ setsearch, filteredTicket, isLoading }) => {
  const router = useRouter();

  const CustomTable = ({ data = [], loading }) => {
    const ROWS = data?.map((e) => {
      return {
        ...e,
        id: e.id,
      };
    });

    const COLUMNS = useMemo(() => [
      {
        field: 'id',
        headerName: 'ID',
        filterable: false,
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
                params?.row?.status === 'Open' ? 'green' : 'text.secondary'
              }
              variant={'p'}
              fontWeight={params?.row?.status === 'Open' ? 700 : 400}
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
        filterable: false,
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
      <AccountsTable
        loading={loading}
        rows={ROWS}
        columns={COLUMNS}
        pageSize={100}
        autoHeight={false}
        hasGridToolbar={true}
        // sortModel={[
        //   {
        //     field: 'ticketNumber',
        //     sort: 'desc',
        //   },
        // ]}
      />
    );
  };

  return (
    <Stack p={4}>
      <CustomTable
        setsearch={setsearch}
        data={filteredTicket}
        loading={isLoading}
      />
    </Stack>
  );
};

export default TicketsTable;

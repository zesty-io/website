import React, { useEffect } from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  AccountsPopover,
  AccountsTable,
  AccountsTableHead,
} from 'components/accounts';
import dayjs from 'dayjs';

export default function DomainListings({
  liveDomains,
  instance,
  instanceDomains,
  devDomains,
  getInstanceDomains,
  deleteDomain,
  loading,
  settings = [],
}) {
  const router = useRouter();

  const { zuid } = router.query;

  useEffect(() => {
    // access necessary endpoints
    getInstanceDomains();
  }, [instanceDomains?.length, zuid, instance?.ZUID]);

  const siteProtocol = settings?.find((e) => e.key === 'site_protocol')?.value;
  const preferredWWW =
    settings?.find((e) => e.key === 'preferred_domain_prefix')?.value === '1'
      ? 'www.'
      : '';

  const ROWS_LIVE_DOMAINS = liveDomains?.map((e) => {
    return {
      ...e,
      id: e.ZUID || Math.random(),
    };
  });

  const ROWS_DEV_DOMAINS = devDomains?.map((e) => {
    return {
      ...e,
      id: e.ZUID || Math.random(),
    };
  });

  const COLUMNS_DOMAINS = ({ title = '' }) => {
    return [
      {
        field: 'id',
        headerName: 'ID',
        hide: true,
      },
      {
        field: 'domain',
        headerName: 'Domain',
        minWidth: 500,
        editable: false,
        sortable: true,
        flex: 1,
        valueGetter: (params) => params.row.domain,
        renderHeader: () => <AccountsTableHead>{title}</AccountsTableHead>,
        renderCell: (params) => {
          let url = '';
          if (
            params.row.domain.includes('webengine') ||
            params.row.domain.includes('zesty.dev')
          ) {
            url = `${siteProtocol}://${params.row.domain}/`;
          } else {
            url = `${siteProtocol}://${preferredWWW}${params.row.domain}/`;
          }
          return (
            <Link
              title={url}
              variant="body2"
              target={'_blank'}
              rel="noreferrer"
              href={url}
            >
              {url}
            </Link>
          );
        },
      },
      {
        field: 'branch',
        headerName: 'Branch',
        width: 250,
        editable: false,
        sortable: false,
        renderHeader: () => <AccountsTableHead>Branch</AccountsTableHead>,
        renderCell: (params) => {
          return <Typography variant="body2">{params.row.branch}</Typography>;
        },
      },
      {
        field: 'createAt',
        headerName: 'Created On',
        width: 300,
        editable: false,
        sortable: false,
        renderHeader: () => <AccountsTableHead>Created On</AccountsTableHead>,
        renderCell: (params) => {
          return (
            <Typography variant="body2">
              {dayjs(params.row.createdAt).format('MMM DD, YYYY')}
            </Typography>
          );
        },
      },

      {
        field: 'action',
        headerName: '',
        width: 110,
        editable: false,
        sortable: false,
        renderCell: (params) => {
          const data = params.row;
          const action = [
            { title: 'Delete Domain', action: () => deleteDomain(data.ZUID) },
          ];
          return (
            <AccountsPopover
              title={
                <Button variant="text" color="primary">
                  <MoreVertIcon color="disabled" />
                </Button>
              }
              id={'actions'}
              items={action}
              colorInvert={false}
            />
          );
        },
      },
    ];
  };

  // const COLUMNS_DEV_DOMAINS = [
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     hide: true,
  //   },
  //   {
  //     field: 'domain',
  //     headerName: 'Domain',
  //     minWidth: 500,
  //     editable: false,
  //     sortable: true,
  //     flex: 1,
  //     valueGetter: (params) => params.row.domain,
  //     renderHeader: () => (
  //       <AccountsTableHead>Stage Preview Domains</AccountsTableHead>
  //     ),
  //     renderCell: (params) => {
  //       let url = '';
  //       if (
  //         params.row.domain.includes('webengine') ||
  //         params.row.domain.includes('zesty.dev')
  //       ) {
  //         url = `${siteProtocol}://${params.row.domain}/`;
  //       } else {
  //         url = `${siteProtocol}://${preferredWWW}${params.row.domain}/`;
  //       }
  //       return (
  //         <Link
  //           title={url}
  //           variant="body2"
  //           target={'_blank'}
  //           rel="noreferrer"
  //           href={url}
  //         >
  //           {url}
  //         </Link>
  //       );
  //     },
  //   },
  //   {
  //     field: 'branch',
  //     headerName: 'Branch',
  //     width: 250,
  //     editable: false,
  //     sortable: false,
  //     renderHeader: () => <AccountsTableHead>Branch</AccountsTableHead>,
  //     renderCell: (params) => {
  //       return <Typography variant="body2">{params.row.branch}</Typography>;
  //     },
  //   },
  //   {
  //     field: 'createAt',
  //     headerName: 'Created On',
  //     width: 300,
  //     editable: false,
  //     sortable: false,
  //     renderHeader: () => <AccountsTableHead>Created On</AccountsTableHead>,
  //     renderCell: (params) => {
  //       return (
  //         <Typography variant="body2">
  //           {dayjs(params.row.createdAt).format('MMM DD, YYYY')}
  //         </Typography>
  //       );
  //     },
  //   },

  //   {
  //     field: 'action',
  //     headerName: '',
  //     width: 110,
  //     editable: false,
  //     sortable: false,
  //     renderCell: (params) => {
  //       const data = params.row;
  //       const action = [
  //         { title: 'Delete Domain', action: () => deleteDomain(data.ZUID) },
  //       ];
  //       return (
  //         <AccountsPopover
  //           title={
  //             <Button variant="text" color="primary">
  //               <MoreVertIcon color="disabled" />
  //             </Button>
  //           }
  //           id={'actions'}
  //           items={action}
  //           colorInvert={false}
  //         />
  //       );
  //     },
  //   },
  // ];

  // const COLUMNS_LIVE_DOMAINS = [
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     hide: true,
  //   },
  //   {
  //     field: 'domain',
  //     headerName: 'Domain',
  //     width: 500,
  //     editable: false,
  //     sortable: true,
  //     flex: 1,
  //     valueGetter: (params) => params.row.domain,
  //     renderHeader: () => (
  //       <AccountsTableHead>Production Live Domains</AccountsTableHead>
  //     ),
  //     renderCell: (params) => {
  //       let url = '';
  //       if (
  //         params.row.domain.includes('webengine') ||
  //         params.row.domain.includes('zesty.dev')
  //       ) {
  //         url = `${siteProtocol}://${params.row.domain}/`;
  //       } else {
  //         url = `${siteProtocol}://${preferredWWW}${params.row.domain}/`;
  //       }

  //       return (
  //         <Link
  //           title={url}
  //           variant="body2"
  //           target={'_blank'}
  //           rel="noreferrer"
  //           href={url}
  //         >
  //           {url}
  //         </Link>
  //       );
  //     },
  //   },
  //   {
  //     field: 'branch',
  //     headerName: 'Branch',
  //     width: 250,
  //     editable: false,
  //     sortable: false,
  //     renderHeader: () => <AccountsTableHead>Branch</AccountsTableHead>,
  //     renderCell: (params) => {
  //       return <Typography variant="body2">{params.row.branch}</Typography>;
  //     },
  //   },
  //   {
  //     field: 'createAt',
  //     headerName: 'Created On',
  //     width: 300,
  //     editable: false,
  //     sortable: false,
  //     renderHeader: () => <AccountsTableHead>Created On</AccountsTableHead>,
  //     renderCell: (params) => {
  //       return (
  //         <Typography variant="body2">
  //           {dayjs(params.row.createdAt).format('MMM DD, YYYY')}
  //         </Typography>
  //       );
  //     },
  //   },

  //   {
  //     field: 'action',
  //     headerName: '',
  //     width: 110,
  //     editable: false,
  //     sortable: false,
  //     renderCell: (params) => {
  //       const data = params.row;
  //       const action = [
  //         { title: 'Delete Domain', action: () => deleteDomain(data.ZUID) },
  //       ];
  //       return (
  //         <AccountsPopover
  //           title={
  //             <Button variant="text" color="primary">
  //               <MoreVertIcon color="disabled" />
  //             </Button>
  //           }
  //           id={'actions'}
  //           items={action}
  //           colorInvert={false}
  //         />
  //       );
  //     },
  //   },
  // ];

  return (
    <>
      <Stack p={4}>
        <AccountsTable
          loading={loading}
          rows={ROWS_LIVE_DOMAINS}
          columns={COLUMNS_DOMAINS({ title: 'Production Live Domains' })}
          pageSize={100}
          autoHeight={true}
        />
      </Stack>
      <Stack p={4}>
        <AccountsTable
          loading={loading}
          rows={ROWS_DEV_DOMAINS}
          columns={COLUMNS_DOMAINS({ title: 'Production Dev Domains' })}
          pageSize={100}
          autoHeight={true}
        />
      </Stack>
    </>
  );
}

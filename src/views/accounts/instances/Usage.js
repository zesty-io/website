import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  AccountsHeader,
  AccountsTable,
  AccountsTableHead,
} from 'components/accounts';
import dayjs from 'dayjs';
import LaunchIcon from '@mui/icons-material/Launch';

const getMonthDates = ({ start = '', end = '' }) => {
  const FORMAT = 'YYYY-MM-DD';

  const createdDate = dayjs(start).format('YYYY-MM-DD');
  const currentDate = dayjs(end).format('YYYY-MM-DD');

  let startDate = new Date(createdDate);
  let endDate = new Date(currentDate);
  const monthDiff = dayjs(endDate).diff(dayjs(startDate), 'month');

  const startDateList = [dayjs(startDate).format(FORMAT)];
  const endDateList = [];
  for (let index = 0; index < monthDiff; index++) {
    let lastDay = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0,
    );

    let rest = startDate.setMonth(startDate.getMonth() + 1, 1);
    let endOfMonth = lastDay.setMonth(lastDay.getMonth() + 1, 0);
    let firstDates = dayjs(rest).format('YYYY-MM-DD');
    startDateList.push(firstDates);
    endDateList.push(dayjs(endOfMonth).format(FORMAT));
  }

  endDateList.push(dayjs(endDate).format(FORMAT));

  const dateList = startDateList
    .map((e, i) => {
      const res = {
        start: e,
        end: endDateList[i],
        id: uuidv4(),
      };
      return res;
    })
    .reverse();

  return dateList;
};

const ReportCard = ({ title = '', data = 0, type = '', _limit = 0 }) => {
  // console.log(limit);
  return (
    <Card sx={{ py: 4, borderRadius: '20px' }}>
      <Typography variant="h4" textAlign={'center'} mb={2}>
        {title}
      </Typography>
      <Typography variant="h3" textAlign={'center'}>
        {type === 'request' ? data : `${data?.toFixed(2)}GB`}
      </Typography>
      {/*  FOR FUTURE REFERENCE */}
      {/* <Stack px={20}>
        <Stack
          sx={{
            width: '100%',
            height: '1rem',
            background: grey[200],
            borderRadius: '10px',
            overflow: 'hidden',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              height: '1rem',
              width: `${(Number(data) / limit) * 100}%`,
              background: '#FF5D0A',
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          ></Box>
        </Stack>
      </Stack> */}
      {/* <Typography variant="h6" textAlign={'center'}>
        / {limit} {type} monthly limit
      </Typography> */}
    </Card>
  );
};
const ThisMonthReport = ({ usage, loading }) => {
  const arr = [
    {
      title: 'Total Requests',
      data: usage?.MediaConsumption?.TotalRequests,
      limit: 200000,
      type: 'request',
    },
    {
      title: 'Throughput/Bandwidth',
      data: usage?.MediaConsumption?.TotalGBs,
      limit: 200,
      type: 'GB',
    },
  ];
  return (
    <Stack width={1} px={4}>
      {/* <Stack width={1}>
        <Typography variant="h5">This month to date</Typography>
      </Stack> */}
      {loading ? (
        <Stack width={1} alignItems="center" py={10}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container px={10} py={5} spacing={8}>
          {arr.map((e) => {
            return (
              <Grid item xs={6}>
                <ReportCard
                  title={e.title}
                  data={e.data}
                  type={e.type}
                  limit={e.limit}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
};

const CustomTable = ({ data, loading, zuid = '' }) => {
  const ROWS = data;
  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'start',
      headerName: 'Date',
      minWidth: 500,
      flex: 1,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.start,
      renderHeader: () => <AccountsTableHead>Date</AccountsTableHead>,
      renderCell: (params) => {
        const month = dayjs(params.row.start).format('MMMM YYYY');

        return (
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={params.row.start}
            variant="body2"
          >
            {month}
          </Typography>
        );
      },
    },
    {
      field: 'action',
      headerName: '',
      width: 200,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const link = `https://reports.zesty.io/usage.html?instanceZUID=${zuid}&dateStart=${params.row.start}&dateEnd=${params.row.end}`;
        const openUrl = (url) => {
          window.open(url, '_blank').focus();
        };

        return (
          <Button
            endIcon={<LaunchIcon />}
            onClick={() => openUrl(link)}
            variant="contained"
          >
            Open Report
          </Button>
        );
      },
    },
  ];

  return (
    <Stack p={4}>
      <Stack width={1}>
        <Typography variant="h5" mb={2}>
          Download Monthly Usage Reports
        </Typography>
      </Stack>
      <Stack px={0}>
        <AccountsTable
          loading={loading}
          rows={ROWS}
          columns={COLUMNS}
          pageSize={100}
          autoHeight={false}
        />
      </Stack>
    </Stack>
  );
};

const Main = ({ zuid, usage, loading }) => {
  const [currentpage, setcurrentpage] = React.useState(1);
  const postperpage = 10;

  const dateList = getMonthDates({
    start: dayjs(usage?.Account?.CreatedAt).format('YYYY-MM-DD'),
    end: dayjs().format('YYYY-MM-DD'),
  });

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = dateList.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(dateList.length / postperpage); i++) {
    pagenum.push(i);
  }

  const handlePageChange = (_event, value) => {
    setcurrentpage(value);
  };

  const headerProps = {
    title: 'Usage',
    description: `View your usage`,
  };
  const tableProps = {
    zuid,
    data: posts,
    loading,
  };

  const monthReports = {
    usage,
    loading,
  };
  return (
    <Grid container>
      <AccountsHeader {...headerProps}></AccountsHeader>
      <ThisMonthReport {...monthReports} />

      <Grid item xs={12}>
        <CustomTable {...tableProps} />
      </Grid>

      <Stack alignItems={'center'} width={1} py={2}>
        {!loading && dateList?.length > 10 && (
          <Pagination
            onClick={() => window.scrollTo(0, 380)}
            count={pagenum?.length}
            page={currentpage}
            onChange={handlePageChange}
            size={'large'}
            color="primary"
          />
        )}
      </Stack>
    </Grid>
  );
};

export const Usage = React.memo(Main);

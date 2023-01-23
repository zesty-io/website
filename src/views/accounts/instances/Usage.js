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
import { AccountsHeader } from 'components/accounts';
import dayjs from 'dayjs';
import LaunchIcon from '@mui/icons-material/Launch';
import { grey } from '@mui/material/colors';

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
      };
      return res;
    })
    .reverse();

  return dateList;
};

const MetricReports = ({ dateList = [], zuid, loading }) => {
  return (
    <Stack width={1} px={4}>
      <Stack width={'11rem'}>
        <Button variant="outlined" color="primary" size="large">
          Metric Reports
        </Button>
      </Stack>

      <Stack px={10}>
        {loading ? (
          <Stack width={1} alignItems="center" py={10}>
            <CircularProgress />
          </Stack>
        ) : (
          <Card
            sx={{
              mt: 4,
              borderRadius: '20px',
            }}
          >
            {dateList.map((e) => {
              const month = dayjs(e.start).format('MMMM YYYY');
              const link = `https://reports.zesty.io/usage.html?instanceZUID=${zuid}&dateStart=${e.start}&dateEnd=${e.end}`;
              const openUrl = (url) => {
                window.open(url, '_blank').focus();
              };
              return (
                <Stack
                  justifyContent="space-between"
                  alignItems={'center'}
                  direction="row"
                  width={1}
                  py={2}
                  px={14}
                  sx={{
                    borderBottom: `1px solid ${grey[300]}`,
                  }}
                >
                  <Typography>{month}</Typography>
                  <Button
                    endIcon={<LaunchIcon />}
                    onClick={() => openUrl(link)}
                    variant="contained"
                  >
                    Open Report
                  </Button>
                </Stack>
              );
            })}
          </Card>
        )}
      </Stack>
    </Stack>
  );
};

const ReportCard = ({ title = '', data = 0, type = '' }) => {
  return (
    <Card sx={{ py: 4, borderRadius: '20px' }}>
      <Typography variant="h4" textAlign={'center'} mb={2}>
        {title}
      </Typography>
      <Typography variant="h6" textAlign={'center'}>
        {type === 'request' ? data : `${data?.toFixed(2)}GB`}
      </Typography>
    </Card>
  );
};
const ThisMonthReport = ({ usage, loading }) => {
  const arr = [
    {
      title: 'Total Requests',
      data: usage?.MediaConsumption?.TotalRequests,
      type: 'request',
    },
    {
      title: 'Throughput/Bandwidth',
      data: usage?.MediaConsumption?.TotalGBs,
      type: 'GB',
    },
  ];
  return (
    <Stack width={1} px={4}>
      <Stack width={'11rem'}>
        <Button variant="outlined" color="primary" size="large">
          This month to date
        </Button>
      </Stack>
      {loading ? (
        <Stack width={1} alignItems="center" py={10}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container px={10} py={5} spacing={8}>
          {arr.map((e) => {
            return (
              <Grid item xs={6}>
                <ReportCard title={e.title} data={e.data} type={e.type} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
};

export const Usage = ({ zuid, usage, loading }) => {
  const [currentpage, setcurrentpage] = React.useState(1);
  const postperpage = 10;

  const headerProps = {
    title: 'Usage',
    description: `View your usage`,
  };

  const dateList = getMonthDates({
    start: dayjs(usage?.Account?.CreatedAt).format('YYYY-MM-DD'),
    end: dayjs().format('YYYY-MM-DD'),
  });

  const monthReports = {
    usage,
    loading,
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = dateList.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(dateList.length / postperpage); i++) {
    pagenum.push(i);
  }

  const metricReportsProps = {
    dateList: posts,
    zuid,
    loading,
  };

  const handlePageChange = (_event, value) => {
    setcurrentpage(value);
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}></AccountsHeader>
      <ThisMonthReport {...monthReports} />
      <MetricReports {...metricReportsProps} />

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

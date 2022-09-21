import { Divider, Paper, Stack, Typography } from '@mui/material';

const DashboardListItem = ({ dashboardLists }) => {
  return dashboardLists?.map((list, index) => (
    <Stack key={index}>
      <Stack direction="row" alignItems="center" mb={1}>
        <img width="30px" height="30px" src={list?.image} />
        <Typography ml={1}>{list?.headerTitle}</Typography>
      </Stack>
      <Stack component={Paper} p={2} py={4} ml={5} elevation={5}>
        <Stack>
          <Stack direction="row">
            <Typography>{list?.itemTitle}</Typography>
          </Stack>
          <Typography color="text.secondary">
            {list?.itemDescription}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2 }} />
    </Stack>
  ));
};

export default DashboardListItem;

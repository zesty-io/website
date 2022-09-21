import { Button, Paper, Stack, Typography } from '@mui/material';

const MyCard = ({ title, description, actionTitle, actionLink }) => {
  return (
    <Stack component={Paper} elevation={5} spacing={2} p={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
      <Button
        size="small"
        variant="contained"
        color="primary"
        href={actionLink}
        sx={{ py: 1 }}
      >
        {actionTitle}
      </Button>
    </Stack>
  );
};

export default MyCard;

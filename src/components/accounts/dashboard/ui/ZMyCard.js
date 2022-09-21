import { Stack, Typography } from '@mui/material';

const MyCard = ({ title, description, children, ...props }) => {
  return (
    <Stack {...props}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
      {children}
    </Stack>
  );
};

export default MyCard;

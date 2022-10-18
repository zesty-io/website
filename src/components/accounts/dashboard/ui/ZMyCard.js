import { Stack, Typography } from '@mui/material';

const MyCard = ({ title, description, children, ...props }) => {
  return (
    <Stack {...props}>
      <Typography variant="h6">{title}</Typography>
      <Typography>{description}</Typography>
      {children}
    </Stack>
  );
};

export default MyCard;

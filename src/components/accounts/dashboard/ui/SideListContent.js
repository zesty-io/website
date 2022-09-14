import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SideListContent = ({ label, children, topAction, bottomAction }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack my={2}>
      <Typography fontWeight="bold" color="text.secondary" mb={2}>
        {label}
      </Typography>
      <Stack
        component={isSM ? Paper : ''}
        sx={{ p: { xs: 1, md: 0 } }}
        elevation={5}
      >
        {topAction}
        {children}
        {bottomAction && isSM && <Divider sx={{ my: 2 }} />}
        {bottomAction}
        {!isSM && <Divider sx={{ my: 2 }} />}
      </Stack>
    </Stack>
  );
};

export default SideListContent;

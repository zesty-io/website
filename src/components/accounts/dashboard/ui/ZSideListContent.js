import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
const ZSideListContent = ({
  label,
  children,
  topAction,
  bottomAction,
  showDivider = true,
  ...props
}) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack {...props}>
      <Typography fontWeight="bold" color="text.primary" mb={2}>
        {label}
      </Typography>
      <Stack
        component={isSM ? Paper : ''}
        sx={{
          p: { xs: 1, md: 0 },
          border: { xs: `1px solid ${grey[400]}`, md: 'none' },
        }}
        elevation={0}
      >
        {topAction}
        {children}
        {bottomAction && isSM && showDivider && <Divider />}
        {bottomAction}
        {!isSM && showDivider && <Divider />}
      </Stack>
    </Stack>
  );
};

export default ZSideListContent;

import {
  Divider,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SideListItems = ({ label, lists, children, bottomAction }) => {
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
        {children}
        <List disablePadding>
          {lists.map((list, index) => (
            <ListItem
              alignItems="center"
              key={index}
              sx={{ pb: 1 }}
              disablePadding
            >
              <img src={list.logo} />
              <Link
                href={list.link}
                underline="none"
                color="text.primary"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                ml={1}
              >
                {list.name}
              </Link>
            </ListItem>
          ))}
        </List>
        {bottomAction && isSM && <Divider sx={{ my: 2 }} />}
        {bottomAction}
        {!isSM && <Divider sx={{ my: 2 }} />}
      </Stack>
    </Stack>
  );
};

export default SideListItems;

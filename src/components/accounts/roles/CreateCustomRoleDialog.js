import {
  Typography,
  // Avatar,
  // Stack,
  // TextField,
  // Autocomplete,
  // IconButton,
  Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
} from '@mui/material';

export const CreateCustomRoleDialog = ({ onClose }) => {
  return (
    <Dialog open onClose={() => onClose?.()}>
      <Typography>Hello hello</Typography>
    </Dialog>
  );
};

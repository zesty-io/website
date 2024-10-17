import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import {
  LocalPoliceOutlined,
  MoreHorizRounded,
  EditRounded,
  DeleteRounded,
} from '@mui/icons-material';

import { useRoles } from 'store/roles';
import { EditCustomRoleDialog } from './EditCustomRoleDialog';
import { DeleteCustomRoleDialog } from './DeleteCustomRoleDialog';

export const CustomRoles = () => {
  const { customRoles } = useRoles((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ZUIDToEdit, setZUIDToEdit] = useState<string>(null);
  const [ZUIDToDelete, setZUIDToDelete] = useState<string>(null);

  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Custom Roles
        </Typography>
        <List sx={{ p: 0 }}>
          {customRoles?.map((role, index) => (
            <Box key={role.ZUID}>
              <ListItemButton
                disableRipple
                key={role.ZUID}
                sx={{
                  p: 2,
                  border: (theme) => `1px solid ${theme.palette.border}`,
                  borderRadius: 2,
                  mb: index + 1 < customRoles?.length ? 1 : 0,
                }}
                onClick={() => {
                  setZUIDToEdit(role.ZUID);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'blue.100' }}>
                    <LocalPoliceOutlined color="info" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                    >
                      {role.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {role.description || ''}
                    </Typography>
                  }
                />
                <IconButton
                  onClick={(evt) => {
                    evt.stopPropagation();
                    setAnchorEl(evt.currentTarget);
                  }}
                >
                  <MoreHorizRounded />
                </IconButton>
              </ListItemButton>
              <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setZUIDToEdit(role.ZUID);
                  }}
                >
                  <ListItemIcon>
                    <EditRounded />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setZUIDToDelete(role.ZUID);
                  }}
                >
                  <ListItemIcon>
                    <DeleteRounded />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          ))}
        </List>
      </Box>
      {!!ZUIDToEdit && (
        <EditCustomRoleDialog
          ZUID={ZUIDToEdit}
          onClose={() => setZUIDToEdit(null)}
        />
      )}
      {!!ZUIDToDelete && (
        <DeleteCustomRoleDialog
          ZUID={ZUIDToDelete}
          onClose={() => setZUIDToDelete(null)}
        />
      )}
    </>
  );
};

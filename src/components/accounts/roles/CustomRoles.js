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

export const CustomRoles = () => {
  const { customRoles } = useRoles((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Custom Roles
        </Typography>
        <List sx={{ p: 0 }}>
          {customRoles?.map((role, index) => (
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
                console.log('open edit custom role');
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
          ))}
        </List>
      </Box>
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
        <MenuItem onClick={() => console.log('open edit modal')}>
          <ListItemIcon>
            <EditRounded />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => console.log('open delete modal')}>
          <ListItemIcon>
            <DeleteRounded />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

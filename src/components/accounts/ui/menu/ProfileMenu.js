import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { grey } from '@mui/material/colors';

const dropdown = [
  { link: '/profile/', label: 'Profile' },
  { link: '/profile/security/', label: 'Security' },
  { link: '/profile/preferences/', label: 'Preferences' },
];

const signOut = [{ link: '/logout', label: 'Logout' }];

export const ProfileMenu = ({ profilePic, userInfo }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (pathname) => {
    setAnchorEl(null);
    if (typeof pathname === 'string') {
      router.push({ pathname });
    }
  };

  return (
    <Box>
      <Box
        title={`${userInfo?.firstName} ${userInfo?.lastName}`}
        id="profile-btn"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        {profilePic}
      </Box>
      <Menu
        id="Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ mt: 2, py: 0 }}
      >
        <Box p={2} sx={{ borderBottom: `1px solid ${grey[300]}` }}>
          <Typography>Logged in as </Typography>
          <Typography
            variant="p"
            sx={{ fontWeight: '800' }}
            data-testid={userInfo?.email}
          >
            {userInfo?.email}
          </Typography>
        </Box>
        <Box>
          {dropdown.map((e, index) => (
            <MenuItem
              key={index}
              onClick={() => handleClose(e.link)}
              data-testid={e.label}
            >
              {e.label}
            </MenuItem>
          ))}
        </Box>
        <Box sx={{ borderTop: `1px solid ${grey[300]}` }}>
          {signOut.map((e, index) => (
            <MenuItem key={index} onClick={() => handleClose(e.link)}>
              {e.label}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { accounts } from 'components/accounts/constants';
import { AccountsNavItem } from 'layouts/Main/components/Topbar/components/NavItem/AccountsNavItem';

export const DeveloperDocMenu = ({ colorInvert }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = (pathname) => {
    setAnchorEl(null);
    if (typeof pathname === 'string') {
      router.push({ pathname });
    }
  };

  return (
    <Box>
      <AccountsNavItem
        title="Documentation"
        id="documentation"
        items={accounts.developerDocs}
        colorInvert={colorInvert}
      />

      <Menu
        id="Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box paddingY={1}>
          {accounts.developerDocs.map((e, index) => (
            <MenuItem
              key={index}
              title={e.label}
              onClick={() => handleClose(e.link)}
            >
              {e.label}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NavItem } from 'layouts/Main/components/Topbar/components';
import { accounts } from 'components/accounts/constants';

export const DeveloperDocMenu = ({}) => {
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
      <NavItem
        title={'Documentation'}
        id={'documentation'}
        items={accounts.developerDocs}
        colorInvert={false}
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
          {accounts.developerDocs.map((e) => (
            <MenuItem title={e.label} onClick={() => handleClose(e.link)}>
              {e.label}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

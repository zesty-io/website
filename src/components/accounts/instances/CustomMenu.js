import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light'
          ? 'rgb(55, 65, 81)'
          : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }),
);

export default function CustomMenu({
  menuName = 'options',
  menuItems,
  handleClick,
  startIcon,
  ...props
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Button
        variant="outlined"
        onClick={handleClickMenu}
        startIcon={startIcon}
        endIcon={<KeyboardArrowDownIcon />}
        color="secondary"
        sx={{ whiteSpace: 'nowrap', height: '100%' }}
        {...props}
      >
        {menuName}
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((menu, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClick(menu.name);
              handleClose();
            }}
            disableRipple
          >
            {menu.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
}

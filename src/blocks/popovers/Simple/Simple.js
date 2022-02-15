import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from 'components/Container';

const mock = [
  {
    title: 'Blog',
    subtitle: 'Lear more about tips, product updates and company culture',
  },
  {
    title: 'Help Center',
    subtitle:
      'Get all of your questions answered in our forums of help support',
  },
  {
    title: 'Guide',
    subtitle: 'Learn how to maximize our platform to get the maximum out of it',
  },
  {
    title: 'Events',
    subtitle:
      'Check out webinars with our masters and learn more about our company conferences',
  },
  {
    title: 'Security',
    subtitle: 'Understand how we take our privacy seriously',
  },
];

const Simple = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Container>
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          sx={{ cursor: 'pointer' }}
          onClick={(e) => handleClick(e)}
        >
          <Typography>Solutions</Typography>
          <ExpandMoreIcon
            sx={{
              marginLeft: 0.5,
              width: 16,
              height: 16,
              transform: open ? 'rotate(180deg)' : 'none',
            }}
          />
        </Box>
        <Popover
          elevation={1}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            '.MuiPaper-root': {
              marginTop: 2,
            },
          }}
        >
          <List
            sx={{
              width: '100%',
              maxWidth: 460,
              padding: 2,
            }}
          >
            {mock.map((item, i) => (
              <ListItem key={i} component={Link} href={'#'}>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Popover>
      </Box>
    </Container>
  );
};

export default Simple;

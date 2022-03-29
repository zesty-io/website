import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Container from 'components/Container';
import BasicForm from './BasicForm';
import CodeBlock from './CodeBlock';

const mock = [
  {
    title: 'Themeable',
    subtitle:
      'Customize any part of our components to match your design needs.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Light and dark UI',
    subtitle:
      'Optimized for multiple color modes. Use light or dark, your choice.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },

];


export default function TryFreeButton({
  text="Try Free",
  target='blank',
  fullWidth=false, 
  component='button',
  color="secondary",
  size='medium', 
  variant='secondary', 
  sx={}
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.target);
    gtag('event', 'Click', {
      'event_category': 'Try Button',
      'event_label': window.location.pathname,
      'value': 1
    });
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
 
  return(
   <Box sx={sx}>
    <Button
      variant={variant}
      color={color}
      component={component}
      target={target}
      fullWidth={fullWidth}
      //href="https://accounts.zesty.io/signup"
      size={size}
      sx={{ cursor: 'pointer' }}
          onClick={(e) => handleClick(e)}
    >
    {text}
    </Button>
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
          <Stack spacing={2} maxWidth={900}>
            <Box padding={2}>
              <Grid container spacing={2}>
            
                  <Grid item xs={12} sm={12}>
                  <Typography><Typography variant="span" fontWeight="800">Marketers</Typography>, organize a guided demo:</Typography>
                    <Box sx={{display: 'flex',marginTop: '16px'}}>
                    <Button component={'a'} href={'/demos/'} sx={{marginRight: '16px'}} color="secondary" variant="contained" size="large">Organize a Guided Demo</Button>
                    {/* <Button variant="outlined" size="large">Watch Product Videos</Button> */}
                    </Box>
                    {/* <BasicForm></BasicForm> */}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography><Typography variant="span" fontWeight="800">Developers</Typography>, launch into a NextJS app powered by Zesty.io from your console:</Typography>
                    <CodeBlock></CodeBlock>
                  </Grid>
              </Grid>
            </Box>
            <Stack
              direction={'row'}
              spacing={2}
              padding={2}
              bgcolor={'alternate.main'}
            >

              {/* <Button
                size={'large'}
                sx={{
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                Watch demo
              </Button> */}
              <Button
                size={'large'}
                onClick={() => { $zoho.salesiq.floatwindow.visible("show"); }}
                sx={{
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
                startIcon={<Icon>chat</Icon>}
              >
                Chat With Us
              </Button>
              <Button
                size={'large'}
                component={'a'}
                href="/contact-new/"
                sx={{
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
              >
                Contact sales
              </Button>
              <Button
                size={'large'}
                component={'a'}
                href={'mailto:sales@zesty.io'}
                sx={{
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
              >
                Email us
              </Button>
            </Stack>
          </Stack>
    </Popover>
  </Box>
 )
};
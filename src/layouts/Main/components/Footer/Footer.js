import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Twitter} from '@mui/material/Icon';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = ({customRouting,colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Grid container marginTop={3} spacing={2} >
      <Grid item xs={2}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/assets/zesty-logo.png'
              : '/assets/zesty-logo-inverted.png'
          }
          height={1}
          width={1}
        />
        </Box>
        <Grid >
          <Grid item xs={3}>

          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Box
          display={'flex'}
          justifyContent={'space-evenly'}
          alignItems={'top'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          {customRouting.map(route => (
           <Grid key={route.zuid}>
            {route.parentZUID == null && route.children.length > 0 &&
              <Grid item marginLeft={4}>
                <Typography marginBottom={1} variant={'h6'} text-transform='capitalize' colorInvert={colorInvert}>
                  {route.title}
                </Typography>
                {route.children.sort((a, b) => a.sort - b.sort).map(childLink => (
                  <Box key={route.zuid} marginBottom={1}>
                    <Link 
                      title={childLink.title} 
                      href={childLink.url}
                      component="a"
                      underline="hover"
                      color="text.primary"
                      >{childLink.title} </Link>
                    </Box>
                ))}

              </Grid>
            }
          </Grid>
        ))}
         
          
        </Box>
      </Grid>
     
      <Grid item marginTop={4} paddingBottom={10} xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Zesty.io Platform, Inc. All Rights Reserved. 
          <Typography marginLeft={1} variant="string" marginRight={1}>|</Typography> 
          <Link underline="none" href="/legal/privacy-policy/">Privacy</Link> 
          <Typography marginLeft={1} variant="string" marginRight={1}>|</Typography> 
          <Link underline="none" href="/legal/end-user-license-agreement/">Terms</Link>
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          This website and application uses cookies, and also collects some information using Google Analytics. Please review our <Link underline="none"
                      color="text.primary" href="/legal/privacy-policy/">Privacy Policy</Link> and <Link underline="none"
                      color="text.primary" href="/legal/end-user-license-agreement/">Terms of Use agreements</Link>.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = ({title, description, logos}) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant={'h5'} dangerouslySetInnerHTML={{__html:title}}>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color={'text.secondary'} fontWeight={400} variant={'body1'} >
           <Box dangerouslySetInnerHTML={{__html:description}} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
            {logos.map((item, i) => (
              <Box maxWidth={86} marginTop={2} marginRight={4} key={i}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item.url}
                  alt="..."
                  // sx={{
                  //   filter:
                  //     theme.palette.mode === 'dark'
                  //       ? 'brightness(0) invert(0.7)'
                  //       : 'none',
                  // }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;

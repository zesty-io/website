/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const CtaSection = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let title = (undefined !== props.title) ? props.title.split('<br>') : ['title','sub'];
  let subtext = (undefined !== props.content) ? props.content.replace(/(<([^>]+)>)/gi, "") : '';
  
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        {props.simple_intro_text}
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          {/* <span dangerouslySetInnerHTML={{__html:props.title}}></span> */}
          {title[0]}{' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
             
            }}
          >
            {title[1]}
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary" dangerouslySetInnerHTML={{__html:subtext}}>
         
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          {props.cta_hero_button_text}
        </Button>
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Explore Now
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;

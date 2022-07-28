/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import TryFreeButton from 'components/cta/TryFreeButton';

const CtaSection = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let title =
    undefined !== props.title ? props.title.split('<br>') : ['title', 'sub'];
  let subtext =
    undefined !== props.content
      ? props.content.replace(/(<([^>]+)>)/gi, '')
      : '';

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: '200',
        }}
        component="h1"
        gutterBottom
        color={'text.secondary'}
      >
        {props.simple_intro_text}
      </Typography>
      <Box marginBottom={2}>
        <Typography
          component="h2"
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 300,
          }}
        >
          {/* <span dangerouslySetInnerHTML={{__html:props.title}}></span> */}
          {title[0]}{' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              fontWeight: 400,
            }}
          >
            {title[1]}
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: subtext }}
        ></Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <TryFreeButton
          variant="contained"
          color="secondary"
          size="large"
          text={props.cta_hero_button_text}
          fullWidth={isMd ? false : true}
        />

        <Box
          component={Button}
          variant="outlined"
          color="secondary"
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

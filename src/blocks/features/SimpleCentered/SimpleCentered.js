/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';

<span class="material-icons-outlined">speed</span>;

const SimpleCentered = ({ header, description, cards = [] }) => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            {header && (
              <Box
                dangerouslySetInnerHTML={{
                  __html: header || FillerContent.header,
                }}
              ></Box>
            )}
          </Box>
        </Box>
        <Grid container spacing={2}>
          {cards.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                  >
                    <Icon>{item.icon_name}</Icon>
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                    align={'center'}
                  >
                    {item.benefit_title}
                  </Typography>
                  <Typography align={'center'} color="text.secondary">
                    {item.benefit_content}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleCentered;

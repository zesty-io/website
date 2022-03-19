/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import { speedIcon, moneyIcon, domainIcon } from './CustomIcons';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const iconMap = {
  speed: speedIcon,
  attach_money: moneyIcon,
  domain_verification: domainIcon,
};

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
                    {/* Icon loop */}
                    {iconMap[item.icon_name]
                      ? iconMap[item.icon_name]
                      : domainIcon}

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

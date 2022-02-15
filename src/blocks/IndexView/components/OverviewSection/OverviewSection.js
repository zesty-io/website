import React from 'react';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

const OverviewSection = ({ title, description, items }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h5'} fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography color={'text.secondary'}>{description}</Typography>
      </Box>
      <Grid container spacing={4}>
        {items.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Link
              underline={'none'}
              color={'text.primary'}
              href={item.href}
              target={item.target || '_self'}
            >
              <Card
                variant={'outlined'}
                sx={{
                  borderRadius: 2,
                  boxShadow: 0,
                  bgcolor: 'background.paper',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <Box
                    padding={3}
                    bgcolor={alpha(theme.palette.divider, 0.03)}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{
                      '& img': {
                        borderRadius: 2,
                      },
                    }}
                  >
                    <Box
                      component={'img'}
                      src={
                        theme.palette.mode === 'dark'
                          ? item.snippetDark
                          : item.snippet
                      }
                      alt={item.title}
                      boxShadow={1}
                    />
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    padding={3}
                  >
                    <Box>
                      <Typography variant={'h6'} fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography color={'text.secondary'}>
                        {item.description}
                      </Typography>
                      {item.components ? (
                        <Typography
                          variant={'caption'}
                          fontWeight={400}
                          marginTop={1}
                        >
                          {`${item.components} components`}
                        </Typography>
                      ) : null}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

OverviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default OverviewSection;

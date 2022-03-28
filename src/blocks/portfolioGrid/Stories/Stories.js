import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from 'next/router';

import FillerContent from 'components/FillerContent';

const Stories = ({ clientInfo, eyeBrow, clientTitle }) => {



  const theme = useTheme();
  const { mode } = theme.palette;
const router = useRouter();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={router.asPath === '/' ? theme.palette.zesty.zestyGrey : 'secondary'}
          align={'center'}
        >
          {eyeBrow}
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={ router.asPath === '/' ? 'h4' : 'h3'}
          align={'center'}
        >
          {/* <br/> tag inject in field */}
          <h3
            dangerouslySetInnerHTML={{
              __html: clientTitle,
            }}
          ></h3>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {clientInfo.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={item?.card_link?.data[0]?.meta?.web?.uri || FillerContent.href}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item?.image?.data[0]?.url || FillerContent.image}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box maxWidth={100} marginY={2}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={
                        item.logo !== ''
                          ? item?.logo?.data[0]?.url
                          : FillerContent.image
                      }
                      alt={item?.title}
                      sx={{
                        filter: mode === 'dark' ? 'contrast(0)' : 'none',
                      }}
                    />
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.summary || FillerContent.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Button
                    size="large"
                    endIcon={
                      <svg
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    }
                  >
                    {item.cta ? item?.cta : ''}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stories;

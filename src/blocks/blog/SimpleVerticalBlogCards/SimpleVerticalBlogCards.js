import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import { useMediaQuery } from '@mui/material';

const SimpleVerticalBlogCards = ({
  header,
  cards,
  cta,
  cta_url,
  title,
  description,
}) => {

  const theme = useTheme();
  const cardList = cards || FillerContent.simpleCards;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  return (
    <Container>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={4}
        >
          {header && (
            <Typography
              textAlign={'center'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Box
                dangerouslySetInnerHTML={{
                  __html: header || FillerContent.header,
                }}
              ></Box>
            </Typography>
          )}

          <Box>
            {title && (
              <Typography fontWeight={700} variant={'h6'} gutterBottom>
                {title || FillerContent.header}
              </Typography>
            )}

            {description && (
              <Typography color={'text.secondary'}>
                {description || FillerContent.description}
              </Typography>
            )}
          </Box>
        </Box>
        <Grid container spacing={4}>
          {cardList?.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                component={'a'}
                href={item?.link || item?.path || item.card_link?.data[0]?.meta?.web?.uri || FillerContent.href}
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
                <Box component={Card} width={1} height={1} borderRadius={2}>
                  <CardMedia
                    image={
                      (item?.image?.data && item?.image?.data[0]?.url) ||
                      (item?.hero_image?.data && item?.hero_image?.data[0]?.url ||item.image)
                    }
                    title={item?.title}
                    sx={{
                      height: { xs: 300, md: 360 },
                      position: 'relative',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(1)'
                          : 'none',
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant={'h6'}
                      fontWeight={700}
                      align={'center'}
                    >
                      {item.title}
                    </Typography>
                    <Box marginY={1}>
                      <Typography
                        variant={'caption'}
                        align={'center'}
                        color={'text.secondary'}
                        component={'i'}
                      >
                        {item?.author?.name}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" align={'center'}>
                      {item.summary || item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          width={1}
          justifyContent={'center'}
          marginTop={{ xs: 2, md: 4 }}
        >
          {cta_url ? (
            <Button
              href={cta_url || '/mindshare'}
              component={Button}
              variant="contained"
              color="secondary"
              size="large"
              marginLeft={2}
            >
              {cta || 'Read More'}
            </Button>
          ) : (
            <TryFreeButton
              component={'a'}
              variant="contained"
              size="large"
              fullWidth={isMd ? false : true}
              text={cta || 'View pages'}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default SimpleVerticalBlogCards;

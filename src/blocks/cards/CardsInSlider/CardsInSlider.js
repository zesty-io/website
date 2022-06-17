import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FillerContent from 'components/globals/FillerContent';

const CardsInSlider = ({ array, eyebrow, title }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {eyebrow}
        </Typography>
        <Typography fontWeight={700} variant={'h3'} align={'center'}>
          {title}
          {/* <br />
          and businesses */}
        </Typography>
      </Box>
      <Slider {...sliderOpts}>
        {array.map((item, i) => (
          <Box key={i} padding={{ xs: 1, sm: 2, md: 3 }}>
            <Box
              component={'a'}
              href={item.link}
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
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box maxWidth={100} marginBottom={2}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={
                        theme.palette.mode === 'dark'
                          ? item.white_logo || FillerContent.clientCards[0].logo
                          : item.logo || FillerContent.clientCards[0].logo
                      }
                      alt={item.title}
                      // sx={{
                      //   filter: mode === 'dark' ? 'contrast(0)' : 'none',
                      // }}
                    />
                  </Box>
                  <Typography
                    align={'center'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.summary}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'center'}>
                  <Button size="large">Learn more</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CardsInSlider;

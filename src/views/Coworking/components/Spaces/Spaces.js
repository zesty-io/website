import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    media: [
      'https://assets.maccarianagency.com/backgrounds/img1.jpg',
      'https://assets.maccarianagency.com/backgrounds/img3.jpg',
      'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    ],
    title: 'Soho Square',
    subtitle: 'Via E. Gola 4, 20147 Milan, Italy',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    media: [
      'https://assets.maccarianagency.com/backgrounds/img3.jpg',
      'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      'https://assets.maccarianagency.com/backgrounds/img1.jpg',
    ],
    title: 'Moose Lab',
    subtitle: 'Via Venini 33, 20150 Milan Italy',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    media: [
      'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      'https://assets.maccarianagency.com/backgrounds/img1.jpg',
      'https://assets.maccarianagency.com/backgrounds/img3.jpg',
      'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    ],
    title: 'Tenoha Space',
    subtitle: 'Via Lagrange 5, 20175 Milan, Italy',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
];

const Spaces = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
          Spaces
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Coworking spaces for remote teams
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          For entrepreneurs, startups and freelancers.
          <br />
          Discover coworking spaces designed to inspire and to connect you to a
          community of motivated people.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Book a space
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
            Explore more
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
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
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.title}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                    '& .slick-slide img': {
                      objectFit: 'cover',
                    },
                    '& .slick-prev, & .slick-next': {
                      zIndex: 2,
                      top: 0,
                      bottom: '100%',
                      left: '100%',
                      right: 0,
                      transform: 'translate(-100%, 50%)',
                      marginLeft: theme.spacing(-2),
                      width: 32,
                      height: 32,
                      '&:before': {
                        fontSize: theme.spacing(3),
                      },
                    },
                    '& .slick-prev': {
                      marginLeft: theme.spacing(-6),
                    },
                    '& .lazy-load-image-background.lazy-load-image-loaded': {
                      display: 'flex !important',
                    },
                  }}
                >
                  <Slider {...sliderOpts}>
                    {item.media.map((img) => (
                      <Box
                        key={img}
                        component={LazyLoadImage}
                        effect="blur"
                        src={img}
                        height={{ xs: 240, sm: 340, md: 280 }}
                      />
                    ))}
                  </Slider>
                  <Box
                    component={'svg'}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                      width: '100%',
                      bottom: 0,
                      position: 'absolute',
                    }}
                  >
                    <path
                      fill={theme.palette.background.default}
                      d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    ></path>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                    align={'left'}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'subtitle2'}
                    color="text.secondary"
                  >
                    {item.subtitle}
                  </Typography>
                  <Box
                    marginTop={2}
                    display={'flex'}
                    justifyContent={'space-between'}
                  >
                    <AvatarGroup max={4}>
                      {item.users.map((u) => (
                        <Avatar key={u} src={u} />
                      ))}
                    </AvatarGroup>
                    <Box display={'flex'} alignItems={'center'}>
                      <Box
                        component={'svg'}
                        width={20}
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        color={colors.yellow[700]}
                        marginRight={1}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </Box>
                      <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                    </Box>
                  </Box>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button>Learn more</Button>
                </CardActions>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Spaces;

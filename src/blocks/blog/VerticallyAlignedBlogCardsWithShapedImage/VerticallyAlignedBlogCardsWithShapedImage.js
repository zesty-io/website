import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';

const VerticallyAlignedBlogCardsWithShapedImage = ({
  title,
  description,
  ctaBtn,
  ctaUrl,
  popularArticles = [],
  titlePosition = 'space-between',
  titleVariant = 'h6',
}) => {
  function makeDate(date) {
    var d = new Date(date);
    var options = {
      year: 'numeric',
      month: 'long',
    };
    var n = d.toLocaleDateString('en-US', options);

    var replace = n.replace(new RegExp(',', 'g'), ' ');
    return replace;
  }

  const theme = useTheme();

  return (
    <Container paddingTop={'0 !important'}>
      <Box
        display={'flex'}
        justifyContent={titlePosition}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography
            paddingTop={1}
            fontWeight={700}
            variant={titleVariant}
            gutterBottom
          >
            {title}
          </Typography>
          {description && (
            <Typography color={'text.secondary'}>{description}</Typography>
          )}
        </Box>

        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          {ctaBtn && (
            <Button
              component={Button}
              href={ctaUrl}
              variant="outlined"
              color="secondary"
              size="large"
              marginLeft={2}
            >
              {ctaBtn}
            </Button>
          )}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {popularArticles.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={`${item.zuid}-VABC`}>
            <Box
              component={'a'}
              href={
                item?.meta?.uri ||
                item?.meta?.web?.uri ||
                item?.path ||
                FillerContent.href
              }
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
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item?.hero_image?.data[0]?.url || item.image}
                  title={item?.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item?.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item?.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar
                        src={
                          (item?.author?.data &&
                            item?.author?.data[0]?.headshot?.data &&
                            item?.author?.data[0]?.headshot?.data[0]?.url) ||
                          item?.author?.image ||
                          FillerContent.image
                        }
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={'text.secondary'}>
                        {(item?.author?.data && item?.author?.data[0]?.name) ||
                          item?.author?.name ||
                          FillerContent.header}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {makeDate(item?.date) || FillerContent.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VerticallyAlignedBlogCardsWithShapedImage;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';
import WYSIWYGRender from 'components/globals/WYSIWYGRender';

const brandHighlights = [
  {
    color: colors.yellow[500],
    title: 'Vertical Logo',
    subtitle:
      'Vertical logo, the go-to variation for standard design applications.',
    width: 1,
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-vertical.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo-vertical.png',
  },
  {
    color: colors.yellow[500],
    title: 'Brand Mark',
    subtitle: 'Individual brand mark used in minimal environments.',
    width: 3,
    assetUrl: 'https://brand.zesty.io/zesty-io-logo.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo.png',
  },
  {
    color: colors.yellow[500],
    title: 'Horizontal Logo',
    width: 1,
    subtitle:
      'Horizontal logo used in environments that do not allow the vertical logo to work.',
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-horizontal.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo-horizontal.png',
  },
  {
    color: colors.yellow[500],
    title: 'Brand Name',
    width: 1,
    subtitle:
      'Brand name without the brand mark is used in envirnoments without spacing to acommodate the brand mark.',
    assetUrl: 'https://brand.zesty.io/zesty-io.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io.png',
  },
];


const brandHighlightsDarkMode = [
  {
    color: colors.yellow[500],
    title: 'Vertical Logo',
    subtitle:
      'Vertical logo, the go-to variation for standard design applications.',
    width: 1,
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-vertical-light-color.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo-vertical-light-color.png',
  },
  {
    color: colors.yellow[500],
    title: 'Brand Mark',
    subtitle: 'Individual brand mark used in minimal environments.',
    width: 3,
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-light.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo-light.png',
  },
  {
    color: colors.yellow[500],
    title: 'Horizontal Logo',
    width: 1,
    subtitle:
      'Horizontal logo used in environments that do not allow the vertical logo to work.',
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.png',
  },
  {
    color: colors.yellow[500],
    title: 'Brand Name',
    width: 1,
    subtitle:
      'Brand name without the brand mark is used in envirnoments without spacing to acommodate the brand mark.',
    assetUrl: 'https://brand.zesty.io/zesty-io.svg',
    assetUrlPng: 'https://brand.zesty.io/zesty-io-light.png',
  },
];

const BrandHighlights = ({
  eyebrowText = 'The Zesty.io Brand',
  title = 'Main Title',
  rich_text = '<p>Rich Text</p>',
  brandPackageURL = 'https://kfg6bckb.media.zestyio.com/ZestyBrandPackage.zip',
}) => {
  const theme = useTheme();
  const brands = theme.palette.mode === 'light' ? brandHighlights : brandHighlightsDarkMode

  const LeftSide = () => (
    <Grid container spacing={4}>
      {brands.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box
            display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
            }}
          >
            <Box component={Card} padding={4} borderRadius={2} width={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <Box marginBottom={2} marginX={item.width * 1} borderRadius={2}>
                  <img
                    src={item.assetUrlPng}
                    alt="Zesty.io Brand Mark"
                    width="100%"
                  />
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.subtitle}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  {/* <Typography>Download</Typography> */}
                  <Button
                    endIcon={<Icon>download</Icon>}
                    component={'a'}
                    href={item.assetUrl}
                    target={'_blank'}
                  >
                    SVG
                  </Button>
                  <Button
                    endIcon={<Icon>download</Icon>}
                    component={'a'}
                    href={item.assetUrlPng}
                    target={'_blank'}
                  >
                    PNG
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const RightSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
        >
          {eyebrowText}
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
          {title}
        </Typography>
        <WYSIWYGRender rich_text={rich_text} />
      </Box>

      <Box marginTop={4}>
        <Button
          variant={'contained'}
          size={'large'}
          endIcon={<Icon>download</Icon>}
          href={brandPackageURL}
        >
          Download Brand Package
        </Button>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <LeftSide />
      </Grid>
      <Grid item alignItems={'center'} xs={12} md={6}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default BrandHighlights;

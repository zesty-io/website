import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Container from 'components/Container';

import BrandHighlights from 'blocks/features/BrandHighlights';
import BrandHistory from 'blocks/features/BrandHistory';
import ColorBlock from 'components/ColorBlock';
import ColorSection from 'components/ColorSection';
import BrandData from '../Brand/data';
import AlternateLogo from 'views/Brand/AlternateLogo';


function Brand({content}){
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    const LeftSide = () => (
      
      <Box>
        <Box marginBottom={2}>
          <Typography
            component={'span'}
            variant="h3"
            sx={{ fontWeight: 700, color: 'common.white' }}
          >
            {content.title}
          </Typography>
        </Box>
        <Typography variant="h6" component="p" sx={{ color: 'common.white' }} dangerouslySetInnerHTML={{__html: content.intro_content }}>
          
        </Typography>
      </Box>
    );
  
    return (
        <>
        <Box marginTop={4}
            position={'relative'}
            sx={{
            backgroundColor:
                theme.palette.mode === 'light'
                ? theme.palette.zesty.darkBlue
                : theme.palette.zesty.darkBlue,
            }}
        >
            <Container paddingTop={0}>
                <Grid container spacing={4}>
                    <Grid item container alignItems={'center'} xs={12} md={8}>
                      <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                        <LeftSide />
                      </Box>
                    </Grid>
                    <Hidden mdDown>
                      <Grid item container alignItems={'center'} xs={12} md={4}>
                        <img src="https://brand.zesty.io/zesty-io-logo-vertical-light-color.svg" alt="Zesty.io Vertical Logo" width="80%" />
                      </Grid>
                    </Hidden>
                </Grid>
                <Box
                  component={'svg'}
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 2000"
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 1,
                    height: '15%',
                  }}
                >
                  <polygon
                    fill={theme.palette.background.paper}
                    points="0,0 0,2000 1000,2000 1000,2000  "
                  />
                </Box>
            </Container>
        </Box>
        <Container paddingY={0} marginBottom={16}>
            <BrandHighlights title={content.brand_name} rich_text={content.brand_name_content} />
        </Container>
        <Box sx={{backgroundColor:theme.palette.background.level2 }}>
          <Container paddingY={5} maxWidth={900}>
            <Grid container spacing={5}>
              <Grid item  alignItems={'center'} xs={12} md={2}>
                  <img src="https://brand.zesty.io/zesty-io-social-icon.svg" width="100%" alt="Zesty.io Social Icon" style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.3)', borderRadius: '50%'}}/>
                  
              </Grid>
              <Grid item  alignItems={'middle'} xs={12} md={10}>
                  <Typography variant="h5" component="h5" marginBottom={1}>Social Media / App Icon</Typography>
                  <Typography paragraph={true}>When using the Zesty brandmark as a social media or application icon, download this version with a white outline and white backdrop.</Typography>
                  <Box marginTop={2} display={'flex'} justifyContent={'left'}>
                    {/* <Box alignItems={'middle'}>Download App Icon</Box> */}
                    <Button
                      endIcon={<Icon>download</Icon>}
                      component={'a'}
                      href="https://brand.zesty.io/zesty-io-social-icon.svg"
                      target={'_blank'}
                    >
                      SVG
                    </Button>
                    <Button
                      endIcon={<Icon>download</Icon>}
                      component={'a'}
                      href="https://brand.zesty.io/zesty-io-social-icon.png"
                      target={'_blank'}
                    >
                      PNG
                    </Button>
                </Box>
              </Grid>
              
            </Grid>
            
          </Container> 
        </Box>
       
        <ColorSection image="https://kfg6bckb.media.zestyio.com/zesty-product-shot-right-side.jpg?width=2000&height=1333" title="Color System" description="asf">
          <>
            <Typography variant="h5" component="h2" marginBottom={2} >Color System</Typography>
            <Grid container spacing={2}>
              {BrandData.colors.map(color => <Grid item spacing={3} sm={6} md={3}>
                <ColorBlock
                  name={color.name}
                  hex={color.hex}
                  ></ColorBlock>
              </Grid>)}
            </Grid>
          </>
        </ColorSection>
        <Box sx={{backgroundColor:theme.palette.background.level2 }}>
          <Container>
          <Typography variant="h4" component="h5" marginBottom={5}>Alternate Logo Options</Typography>
            <Grid container spacing={2}>
            {BrandData.alternateLogos.map(logo => <Grid item spacing={3} sm={12} md={4}><AlternateLogo {...logo}></AlternateLogo></Grid>)}
            </Grid>
          </Container>
        </Box>      

        <Container   marginBottom={16}>
          <BrandHistory/>
        </Container>
    </>
    );
  };

export default Brand;
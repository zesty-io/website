import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Container from 'components/Container';
import BrandHighlights from 'blocks/features/BrandHighlights';

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
                ? theme.palette.primary.main
                : theme.palette.alternate.main,
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
    </>
    );
  };

export default Brand;
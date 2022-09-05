/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Image from 'next/image';
/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';

const Bottom = ({
  content,
  FillerContent,
  theme,
  isMedium,
  isSmall,
  isExtraLarge,
}) => {
  return (
    <Box
      component="section"
      sx={{
        background: `url(${content.bottom_cta_background?.data[0].url}?width=1920)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '100%',
        height: isSmall ? 500 : isMedium ? 850 : isExtraLarge ? 550 : 399,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid sm={12} md={7}>
            <Box
              data-aos-offset="200"
              data-aos="fade-up"
              sx={{
                width: isExtraLarge ? '100%' : 950,
                mt: isExtraLarge ? 0 : -12.5,
              }}
            >
              <Image
                width={951}
                height={519}
                loading="lazy"
                src={`${content.bottom_cta_graphic?.data[0].url}?width=951`}
                alt="zesty.io"
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            sm={12}
            md={5}
          >
            <Box sx={{ width: '100%', maxWidth: 501 }}>
              <MuiMarkdown
                overrides={{
                  span: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'span',
                      sx: {
                        color: theme.palette.zesty.zestyOrange,
                        fontWeight: 'inherit',
                        textAlign: 'inherit',
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      'data-aos-offset': '200',
                      'data-aos': 'fade-up',
                      'data-aos-duration': '1000',
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        textAlign: isMedium ? 'center' : 'left',
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      'data-aos-offset': '200',
                      'data-aos': 'fade-up',
                      'data-aos-duration': '1500',
                      variant: 'h6',
                      component: 'p',
                      sx: {
                        textAlign: isMedium ? 'center' : 'left',
                        mt: 1,
                        color: theme.palette.common.white,
                      },
                    },
                  },
                }}
              >
                {content.bottom_cta_title_and_description ||
                  FillerContent.description}
              </MuiMarkdown>

              <Box
                data-aos-offset="200"
                data-aos="fade-up"
                data-aos-duration="1500"
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              >
                <TryFreeButton
                  text={content.footer_button_text_1 || FillerContent.cta}
                  variant="contained"
                  color="secondary"
                  fullWidth={isMedium}
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 1,
                  }}
                />
                <DemoCta
                  fullWidth={isMedium}
                  href={content.footer_button_link_2?.data[0].meta.web.uri}
                  text={content.footer_button_text_2 || FillerContent.cta}
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;

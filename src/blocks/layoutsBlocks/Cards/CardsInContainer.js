/**
 * MUI Imports
 */
import {
  Box,
  Typography,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Container from 'blocks/container/Container';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const CardsInContainer = ({
  title_and_description,
  data = FillerContent.featuresCards,
  itemtitlecolor,
  isFullWidthSection = true,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const titleColor = itemtitlecolor
    ? itemtitlecolor
    : theme.palette.zesty.zestyZambezi;

  

  return (
    <Box
      component="section"
      sx={{
        mt: 15,
        background: isFullWidthSection && theme.palette.zesty.zestyWhite,
      }}
    >
      <Container
        sx={
          !isFullWidthSection && {
            background: theme.palette.zesty.zestyWhite,
            borderRadius: isMobile ? 0 : 5,
          }
        }
      >
        <Box sx={{ py: 10 }}>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    component: 'span',
                    variant: 'h4',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      textDecoration: 'underline',
                      textDecorationColor:
                        theme.palette.zesty.zestyOrange,
                      textUnderlinePosition: 'under',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: 700,
                      margin: 'auto',
                      mt: 2,
                    },
                  },
                },
              },
            }}
          >
            {title_and_description || FillerContent.header}
          </MuiMarkdown>
          <Grid sx={{ mt: 5 }} container spacing={5}>
            {data?.data?.map((item, index) => (
              <Grid key={index} item sm={12} md={4}>
                <Card
                  component={item.url && 'a'}
                  target={item.url && '_blank'}
                  href={item.url}
                  sx={{
                    py: 5,
                    px: 2,
                    minHeight: item.content ? 355 : 244,
                    textDecoration: 'none',
                    margin: 'auto',
                    position: 'relative',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    <ZestyImage
                      height={294}
                      style={{ width: '100%', maxWidth:294, height:179 }}
                      alt={item.product_name || ''}
                      loading="lazy"
                      src={item.graphic.data[0].url || FillerContent.photos[0].src}
                    />
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: titleColor,
                        textAlign: 'center',
                      }}
                    >
                      {item.product_name || FillerContent.description}
                    </Typography>
                    {item.product_description && (
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          textAlign: 'center',
                          color: theme.palette.zesty.zestyZambezi,
                          mt: 2,
                        }}
                      >
                        {item.product_description || FillerContent.description}
                      </Typography>
                    )}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CardsInContainer;

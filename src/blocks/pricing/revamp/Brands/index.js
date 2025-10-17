import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

import FillerContent from 'components/globals/FillerContent';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';

const Brands = ({
  logoItems = FillerContent.logos,
  heading_text = '',
  textOutside = false,
  maxWidth = 1500,
  variant = 'contained',
  invertLogo = true,
  background = 'transparent',
  marginTop = 0,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const sunsDarkLogoUrl =
    'https://kfg6bckb.media.zestyio.com/sunsdark.1fc97b3c326478bf6afcb60e52679656.png?width=241';

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(heading_text);

  if (!isRichText && heading_text != '') {
    heading_text = `<h2>${heading_text}</h2>`;
  }

  return (
    <Box component="section" sx={{ mt: marginTop }}>
      <Container sx={{ maxWidth: maxWidth }}>
        {textOutside && (
          <Typography
            sx={{
              width: '600px',
              fontSize: { sm: '44px', xs: '36px' },
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyDarkText,
              textAlign: 'center',
              lineHeight: '1.2',
            }}
          >
            More than 10 million people across the world choose us
          </Typography>
        )}
        <Card
          variant={variant}
          sx={{
            border: variant === 'outlined' ? 'none' : '',
            background: background,
          }}
        >
          <CardContent>
            {!textOutside && (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    width: '800px',
                    fontSize: { sm: '44px', xs: '36px' },
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyDarkText,
                    textAlign: 'center',
                    lineHeight: '1.2',
                    mb: 5,
                  }}
                >
                  More than 10 million people across the world choose us
                </Typography>
              </Box>
            )}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
              {logoItems?.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', width: 150 }}>
                  <ZestyImage
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      filter:
                        invertLogo && isDarkMode
                          ? `${
                              item?.customer_name === 'Phoenix Suns'
                                ? 'invert(0)'
                                : 'brightness(0%)'
                            } invert(1)`
                          : '',
                    }}
                    alt={item?.customer_name || ''}
                    src={
                      item.customer_logo?.data[0]?.url ||
                      FillerContent.logos[index].url
                    }
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Brands;

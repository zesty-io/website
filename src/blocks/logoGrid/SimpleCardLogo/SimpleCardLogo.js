// Mui Import

import { Box, Card, CardContent, Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';

// Components Import
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';

/**
 *
 * @param {array} logoItems - array of logo items
 * @param {string} heading_text - logo heading text
 * @param {boolean} textOutside - determine if heading text will appear outside the card or inside
 * @param {boolean} invertLogo - invert logo color on darkmode default true
 * @param {string} background - background color default to transparent
 *
 */

const SimpleCardLogo = ({
  logoItems = FillerContent.logos,
  heading_text = '',
  textOutside = false,
  maxWidth = 1500,
  variant = 'elevation',
  invertLogo = true,
  background ="transparent"
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const sunsDarkLogoUrl =
    'https://kfg6bckb.media.zestyio.com/sunsdark.1fc97b3c326478bf6afcb60e52679656.png?width=241';

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(heading_text);

  if (!isRichText && heading_text) {
    heading_text = `<h2>${heading_text}</h2>`;
  }

  return (
    <Box component="section">
      <Container sx={{ maxWidth: maxWidth }}>
        {textOutside && (
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mb: 4,
                    },
                  },
                },
              },
            }}
          >
            {heading_text}
          </MuiMarkdown>
        )}
        <Card
          variant={variant}
          sx={{
            py: 2,
            border: variant === 'outlined' ? 'none' : '',
            background: background,
          }}
        >
          <CardContent>
            {!textOutside && (
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h2',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          mb: 4,
                        },
                      },
                    },
                  },
                }}
              >
                {heading_text}
              </MuiMarkdown>
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
                <Box key={index} sx={{ display: 'flex' }}>
                  <ZestyImage
                    loading="lazy"
                    style={{
                      width:"100%",
                      height:"auto",
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
                    src={item.customer_logo?.data[0]?.url || FillerContent.logos[0].url }
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

export default SimpleCardLogo;

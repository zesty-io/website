/**
 * MUI Imports
 */
import { Box, Card, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown-jsx';

/**
 *
 * @param {array} data - array items that is needed to loop through cards
 * @param {string} features_header - string header text
 * @param {number} header_size - header size
 * @param {string} feature_description - feature description
 * @param {string} textHighlight - text you want to highlight on header
 * @param {string} background - background options can be one of the two "zesty" || "chevron" default is none
 * @param {number} icon_width - override default icon width set as 77
 * @param {number} icon_height - override default icon height set as 60
 * @param {boolean} center - center card items including logo, title and description
 * @param {string} card_name_color - card name title color default is zestyOrange
 * @param {string} header_color - header title color default is zestyDarkText
 * @param {string} cta_button_text - call to action text hidden if empty
 *
 */

const ZestyDrives = ({
  data,
  features_header,
  header_size = 48,
  header_color,
  textHighlight = 'Zesty',
  center = false,
  theme,
  isSmall,
  isDarkMode,
}) => {
  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(features_header);

  if (!isRichText && features_header) {
    features_header = `<h2>${features_header}</h2>`;
  }
  return (
    <Box
      component="section"
      paddingBottom={isSmall ? 0 : 15}
      sx={{
        position: 'relative',
        mt: 5,
        zIndex: '500',
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.common.white,
      }}
    >
      <Container maxWidth="false">
        <Box sx={{ py: isSmall ? 5 : 10 }}>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: header_color
                        ? header_color
                        : theme.palette.zesty.zestyDarkText,
                      textAlign: 'center',
                      fontWeight: 700,
                    },
                  },
                },
              },
            }}
          >
            {features_header.replace(
              textHighlight,
              `<span>${textHighlight}</span>`,
            )}
          </MuiMarkdown>
        </Box>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          {data?.map((e, i) => {
            return (
              <Card
                key={i}
                sx={{
                  width: isSmall ? '100%' : '23rem',
                  minHeight: 200,
                  padding: '3rem 2rem',
                  background: theme.palette.common.white,
                  py: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    minHeight: 200,
                    height: '100%',
                    display: 'flex',
                    justifyContent: center ? 'center' : 'flex-start',
                    flexDirection: 'column',
                    alignItems: center ? 'center' : 'flex-start',
                  }}
                >
                  <Typography
                    component={'h3'}
                    variant={'h3'}
                    sx={{
                      py: 2,
                      color: theme.palette.zesty.zestyBlue,
                      fontWeight: 800,
                      textAlign: center ? 'center' : 'left',
                    }}
                  >
                    {e?.feature_name}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'p'}
                    sx={{
                      textAlign: center ? 'center' : 'left',
                      color: isDarkMode
                        ? theme.palette.zesty.zestyDarkBlue
                        : theme.palette.secondary.darkCharcoal,
                      fontSize: '16px',
                      fontWeight: 400,
                      mt: 2,
                    }}
                  >
                    {e?.content}
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ZestyDrives;

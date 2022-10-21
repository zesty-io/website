/**
 * MUI Imports
 */
import { Box, Card, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Local Assets
 */
import s_curve from '../../../../public/assets/images/headless-cms/sCurve.svg';

/**
 * Components Import
 */
import ZestyImage from 'blocks/Image/ZestyImage';
import DemoCta from 'components/cta/DemoCta';

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

const WhyZesty = ({
  data,
  title_eyebrow,
  features_header,
  header_size = 48,
  header_color,
  card_name_color,
  textHighlight = 'Zesty',
  icon_width = 67,
  icon_height = 60,
  center = false,
  cta_button_text = '',
  cta_button_link,
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
      paddingBottom={isSmall ? 5 : 15}
      sx={{
        position: 'relative',
        zIndex: '500',
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          margin: 'auto',
          display: 'block',
          width: '100%',
          zIndex: -99,
        }}
        component="img"
        alt=""
        src={s_curve.src}
      />
      <Container maxWidth="xl">
        <Box sx={{ py: 10, zIndex: 100 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              color: theme.palette.zesty.zestyOrange,
            }}
          >
            {title_eyebrow || ''}
          </Typography>
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  mt: 3,
                  variant: 'p',
                  component: 'h2',
                  sx: {
                    color: header_color
                      ? header_color
                      : theme.palette.zesty.zestyDarkText,
                    fontSize: isSmall ? 24 : header_size,
                    textAlign: 'center',
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
          <Box
            sx={{
              mt: 7,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DemoCta
              icon={false}
              sx={{
                minWidth: '13%',
                background: theme.palette.zesty.zestyOrange,
                color: theme.palette.common.white,
                '&:hover': {
                  background: theme.palette.zesty.zestyRed,
                },
              }}
              target="_self"
              text={cta_button_text}
              href={cta_button_link}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          {data.map((e, i) => {
            return (
              <div key={i}>
                <Card
                  sx={{
                    width: '20rem',
                    minHeight: 320,
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
                    <ZestyImage
                      loading="lazy"
                      width={icon_width}
                      height={icon_height}
                      src={e?.icon_image}
                      alt={e.feature_name}
                    />
                    <Typography
                      component={'h3'}
                      variant={'p'}
                      sx={{
                        py: 2,
                        color: card_name_color
                          ? card_name_color
                          : theme.palette.zesty.zestyOrange,
                        fontWeight: 500,
                        fontSize: '20px',
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
                        fontWeight: 'light',
                      }}
                    >
                      {e?.content}
                    </Typography>
                  </Box>
                </Card>
              </div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyZesty;

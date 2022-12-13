/**
 * MUI Imports
 */
import {
  Box,
  Card,
  Container as ContainerMUI,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'markdown-to-jsx';
/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Local assets
 */
import chevronLeft from '../../../../public/assets/images/chevron-left.svg';
import zesty from '../../../../public/assets/images/zesty.svg';

/**
 * Components Import
 */
import ZestyImage from 'blocks/Image/ZestyImage';
import TryFreeButton from 'components/cta/TryFreeButton';
import Container from 'blocks/container/Container';

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
 * @param {string} background_color - override default section container background
 *
 */

const Features = ({
  data = FillerContent.featuresCards,
  features_header = '',
  header_size = 32,
  header_color,
  card_name_color,
  feature_description,
  textHighlight = 'Zesty',
  background = '', // options "zesty" || "chevron"
  icon_width = 67,
  icon_height = 60,
  center = false,
  cta_button_text = '',
  background_color = '',
  isFullWidthSection = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isWideScreen = useMediaQuery(theme.breakpoints.between(2000,99999))
  const isDarkMode = theme.palette.mode === 'dark';

  const bracketImg = chevronLeft.src || FillerContent.dashboard_image;
  const zestyImg = zesty.src || FillerContent.dashboard_image;

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(features_header);

  if (!isRichText ) {
    features_header = `<h2>${features_header || FillerContent.header}</h2>`;
  }

  const ConditionalContainer = ({ condition, children }) =>
    condition ? (
      <ContainerMUI>{children}</ContainerMUI>
    ) : (
      <Container sx={isMobile ? { p: 0 } : { pb: isFullWidthSection ? 20 : 0 }}>
        <Box
          sx={{
            background: isDarkMode
              ? theme.palette.zesty.zestyDarkBlue
              : background_color,
            borderRadius: isMobile ? 0 : 5,
            px: isMobile ? 4 : 17,
            pb: isMobile ? 10 : 15,
            pt: isMobile ? 0 : 4,
          }}
        >
          {children}
        </Box>
      </Container>
    );

  return (
    <Box
      component="section"
      paddingBottom={isMobile ? 10 : 15}
      sx={{
        position: 'relative',
        zIndex: '20',
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : background_color && isFullWidthSection
          ? background_color
          : theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          zIndex: '-10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        {background === 'chevron' && (
          <Box component="img" src={bracketImg} alt="bg" />
        )}
      </Box>
      <Box
        sx={{
          zIndex: '-10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
          width: '100%',
        }}
      >
        {background === 'zesty' && (
          <Box
            component="img"
            sx={{ width: '100%', maxWidth: 1920, display: isWideScreen ? 'none' : "block" }}
            src={zestyImg}
            alt="bg"
          />
        )}
      </Box>
      <ConditionalContainer condition={isFullWidthSection}>
        <Box sx={{ py: 10 }}>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'p',
                    component: 'h2',
                    sx: {
                      color: header_color
                        ? header_color
                        : theme.palette.zesty.zestyZambezi,
                      fontSize: isMobile ? 24 : header_size,
                      textAlign: 'center',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: {
                      textAlign: 'center',
                      color: isDarkMode
                        ? theme.palette.common.white
                        : theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    variant: 'p',
                    component: 'span',
                    sx: {
                      fontSize: 'inherit',
                      color: theme.palette.zesty.zestyOrange,
                    },
                  },
                },
              },
            }}
          >
            {features_header?.replace(
              textHighlight,
              `<span>${textHighlight}</span>`,
            ) }
          </MuiMarkdown>


{feature_description &&      <MuiMarkdown
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
                      fontSize: isMobile ? 24 : header_size,
                      textAlign: 'center',
                      fontWeight: 700,
                      mt: 2,
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: {
                      textAlign: 'center',
                      color: isDarkMode
                        ? theme.palette.zesty.zestyDarkBlue
                        : theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    variant: 'p',
                    component: 'span',
                    sx: {
                      fontSize: 'inherit',
                      color: theme.palette.zesty.zestyOrange,
                    },
                  },
                },
              },
            }}
          >
            {feature_description || `<p>${FillerContent.description}</p>`}
          </MuiMarkdown> }
     


          {cta_button_text && (
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TryFreeButton text={cta_button_text} variant="contained" />
            </Box>
          )}
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
          {data?.map((e, i) => {
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
                          : theme.palette.zesty.zestyDarkBlue,
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
      </ConditionalContainer>
    </Box>
  );
};

export default Features;

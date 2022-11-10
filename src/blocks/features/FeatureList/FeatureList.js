/**
 * Mui Imports
 */
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

/**
 *
 * @param {string} header - string header and description (wysiwyg_basic)
 * @param {string} headerColor - header title color default is zestyZambezi
 * @param {array} data - array items that is needed to loop through list
 *
 */

const FeatureList = ({
  header,
  headerColor,
  data,
}) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        py: 15,
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          options={{
            overrides: {
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h3',
                  sx: {
                    color: headerColor
                      ? headerColor
                      : theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: ' center',
                  },
                },
              },
              span: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h3',
                  sx: {
                    color: headerColor
                      ? headerColor
                      : theme.palette.zesty.zestyZambezi,
                    fontWeight: 'bold',
                    textAlign: ' center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  mt: 2,
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: ' center',
                  },
                },
              },
            },
          }}
        >
          {header || FillerContent.header}
        </MuiMarkdown>
        <Box sx={{ mt: 5 }}>
          {data?.map((item, i) => (
            <Grid sx={{ my: 5 }} container spacing={3}>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
                item
                sm={12}
                md={6}
              >
                <Typography
                  component="h3"
                  variant="h4"
                  color={
                    isDarkMode
                      ? theme.palette.zesty.zestyWhite
                      : theme.palette.zesty.zestyOrange
                  }
                  sx={{
                    fontWeight: 'bold',
                    textAlign: isMedium ? 'center' : 'left',
                  }}
                >
                  {item?.feature_name || FillerContent.header}
                </Typography>
                <Typography
                  component="p"
                  variant="h6"
                  color={theme.palette.zesty.zestyZambezi}
                  sx={{ textAlign: isMedium ? 'center' : 'left', mt: 3 }}
                >
                  {item?.content || FillerContent.description}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                item
                sm={12}
                md={6}
              >
                <ZestyImage
                  alt={item?.feature_name || FillerContent.description}
                  loading="lazy"
                  style={{
                    width: '100%',
                    maxWidth: '600',
                    height: 'auto',
                  }}
                  width={600}
                  height={500}
                  src={item?.icon_image || FillerContent.photos[0].src}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureList;

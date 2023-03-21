/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Demos
 * Name: demos
 * Model ZUID: 6-ccf3cd8a82-16sw3z
 * File Created On: Thu Mar 10 2022 10:14:31 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * header_title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccf3cd8a82-16sw3z
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import { React } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/globals/FillerContent';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar, Grid, Box, Container } from '@mui/material';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';

const Demo = ({ content }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container sx={{ sm: 1, md: 1236, py: 15 }}>
      <Grid container>
        <Grid
          sx={{
            px: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Box>
              <MuiMarkdown
                options={{
                  overrides: {
                    h1: {
                      component: Typography,
                      props: {
                        variant: 'h3',
                        fontWeight: 'bold',
                        component: 'h1',
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'body1',
                        component: 'p',
                        lineHeight: 1.2,
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                }}
              >
                {content?.demo_description || FillerContent.description}
              </MuiMarkdown>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: 2,
                mt: 4,
              }}
            >
              {content?.g2_badges?.data.map((item, index) => (
                <Box key={index}>
                  <ZestyImage
                    width={100}
                    height={120}
                    style={{ width: 'auto', height: 'auto' }}
                    src={item?.badge_image?.data[0].url || FillerContent.href}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ my: 4 }}>
              {content?.testimonial?.data.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      lineHeight: 1.2,
                      fontStyle: 'italic',
                      color: theme.palette.zestyZambezi,
                    }}
                  >
                    {item?.review || FillerContent.description}
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Avatar
                      src={
                        item?.reviewer_headshot?.data[0]?.url ||
                        FillerContent.photos[0].src
                      }
                      alt={item?.reviewer_name || ''}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{
                          lineHeight: 1.2,
                          color: theme.palette.zestyZambezi,
                        }}
                      >
                        {item?.reviewer_name || FillerContent.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{
                          lineHeight: 1.2,
                          color: theme.palette.zestyZambezi,
                          fontWeight: 'bold',
                        }}
                      >
                        {item?.reviewer_title || FillerContent.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ mt: isMobile ? 4 : 0 }} item xs={12} md={6}>
          <Box>
            <ZohoFormEmbed
              height={content.form_height || 600}
              formURL={content.form_link || ''}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 10 }}>
        <SimpleCardLogo
          variant="outlined"
          heading_text={content?.logos_h2}
          logoItems={content?.logos?.data}
        />

        <DarkBlueCta
          sx={{ mt: 15, py: 10 }}
          cta_text={content?.cta_button}
          cta_secondary_link={
            content?.cta_button_secondary_link?.data[0].meta.web.uri
          }
          cta_secondary_text={content?.cta_button_secondary}
          header_content={content?.bottom_cta}
        />
      </Box>
    </Container>
  );
};

export default Demo;

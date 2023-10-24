/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: freestyle 
 * Name: freestyle 
 * Model ZUID: 6-bcf781c4e4-pbcmpl
 * File Created On: Fri Oct 20 2023 20:52:41 GMT+0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * hero_eyebrow (text)
 * hero_promo_video (text)
 * hero_title (text)
 * hero_primary_cta_text (text)
 * hero_primary_cta_link (text)
 * hero_description (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-bcf781c4e4-pbcmpl
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Resources from 'components/marketing/IntegrationsIndividualPage/Resources';
import FillerContent from 'components/globals/FillerContent';
import dynamic from 'next/dynamic';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import Feature from 'components/marketing/IntegrationsIndividualPage/Feature';
import TryFreeButton from 'components/cta/TryFreeButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from 'components/Container';
import MuiMarkdown from 'markdown-to-jsx';
const SimpleHeroWithImageAndCtaButtons = dynamic(
  () => import('blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons'),
  {
    ssr: false,
  },
);
function Freestyle({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isDarkMode,
    content,
    FillerContent,
  };

  const headerProps = {
    title: content.hero_title || FillerContent.header,
    video: content.hero_promo_video || FillerContent.image,
    description: content.hero_description || FillerContent.description,
    cta_left: content.hero_primary_cta_text || FillerContent.cta,
    backgroundColor: theme.palette.zesty.zestyDarkBlue,
    isDarkBackground: true,
  };

  console.log(content);

  const faqProps = {
    title: content?.faq_title || FillerContent.header,
    faqs: content?.faqs?.data || [],
  };

  const popularFeaturesProps = {
    title: content?.popular_features || FillerContent.header,
    data: content?.freestyle_popular_features?.data || [],
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...headerProps} />{' '}
      <Resources {...pageData} />
      <Box sx={{ mt: -10 }}>
        <Feature {...pageData} />
      </Box>
      <Box sx={{ pt: 10 }}>
        <SimpleCardLogo
          heading_text={content?.logos_title}
          logoItems={content?.logos?.data}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              width: '100%',
              maxWidth: 500,
              borderRadius: 50,
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                mt: 2,
                color: theme.palette.zesty.zestyZambezi,
              }}
            >
              Have a questions? Give us a call and we walk you through it
            </Typography>
            <TryFreeButton variant="text" size="small" color="secondary" />
          </Card>
        </Box>

        <Box sx={{ py: 10 }}>
          <Container>
            <Typography
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 4,
              }}
              variant="h4"
              component="h2"
            >
              {faqProps?.title}
            </Typography>
            <Grid container spacing={4}>
              {faqProps.faqs.map((faq) => {
                return (
                  <Grid key={faq.meta.zuid} item sm={4}>
                    <Accordion defaultExpanded>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          sx={{ color: theme.palette.zesty.zestyZambezi }}
                        >
                          {faq?.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <MuiMarkdown
                          options={{
                            overrides: {
                              p: {
                                component: Typography,
                                props: {
                                  sx: {
                                    color: theme.palette.zesty.zestyZambezi,
                                    mb: 4,
                                  },
                                },
                              },
                            },
                          }}
                        >
                          {faq?.answer}
                        </MuiMarkdown>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ background: theme.palette.zesty.zestyWhite, py: 10 }}>
          <Container>
            <Typography
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 4,
              }}
              variant="h4"
              component="h2"
            >
              {popularFeaturesProps.title}
            </Typography>
            <Grid container spacing={4}>
              {popularFeaturesProps.data.map((feature) => {
                return (
                  <Grid item sm={4}>
                    <Card sx={{ position: 'relative' }}>
                      <CardContent>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            color: theme.palette.zesty.zestyZambezi,
                            mb: 2,
                            minHeight: 20,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{ color: theme.palette.zesty.zestyZambezi }}
                        >
                          {feature.description}
                        </Typography>

                        <Button
                          sx={{ mt: 4 }}
                          variant="contained"
                          color="secondary"
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Freestyle;

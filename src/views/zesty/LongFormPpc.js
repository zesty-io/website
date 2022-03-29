/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: PPC-Long Form 
 * Name: long_form_ppc 
 * Model ZUID: 6-94f2effbd8-835mzf
 * File Created On: Tue Mar 29 2022 12:52:58 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_h2 (text)
 * hero_cta_primary_text (text)
 * hero_cta_primary_link (link)
 * hero_cta_secondary_text (text)
 * hero_cta_secondary_link (link)
 * who_is_zesty_h2 (text)
 * zesty_benefits (one_to_many)
 * logos_h3 (text)
 * logos (one_to_many)
 * _what_is_image (images)
 * _what_is_title_and_description (wysiwyg_basic)
 * outline_of_benefits (wysiwyg_basic)
 * benefits_image (images)
 * how_it_works (wysiwyg_basic)
 * how_it_works_image (images)
 * testimonial (one_to_one)
 * contact_form_h3 (text)
 * contact_form_description (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-94f2effbd8-835mzf
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import SimpleHeroWithCta from 'blocks/heroes/SimpleHeroWithCta';
import SimpleCentered from 'blocks/features/SimpleCentered';
import LogoGridSimpleCentered from 'blocks/logoGrid/LogoGridSimpleCentered';
import HeroWithIllustrationAndSearchBar from 'blocks/heroes/HeroWithIllustrationAndSearchBar';
import FeatureGridWithBackgrounds from 'blocks/features/FeatureGridWithBackgrounds';
import Container from 'components/Container';
import { alpha, useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import TryFreeButton from 'components/cta/TryFreeButton';
import FillerContent from 'components/FillerContent';
import HeroWithIllustrationAndCta from 'blocks/heroes/HeroWithIllustrationAndCta';
import { ContactUs } from 'blocks/formLayouts';

const NewsletterWithImage = ({ image, header, testimonial }) => {
  const theme = useTheme();

  const testimonials = testimonial || FillerContent.testimonialCard;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box marginBottom={3}>
              <Grid item xs={12} md={9}>
                <Box
                  dangerouslySetInnerHTML={{
                    __html: header || FillerContent.rich_text,
                  }}
                ></Box>
              </Grid>
            </Box>
            <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
              <Grid container spacing={4}>
                {testimonials.map((item, i) => (
                  <Grid item xs={12} md={12} key={i}>
                    <Box
                      width={1}
                      height={1}
                      component={Card}
                      display={'flex'}
                      flexDirection={'column'}
                      boxShadow={1}
                      bgcolor={i === 1 ? 'primary.main' : 'none'}
                    >
                      <CardContent
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Box marginBottom={1}>
                          <Box display={'flex'} justifyContent={'flex-start'}>
                            {[1, 2, 3, 4, 5].map((item) => (
                              <Box
                                key={item}
                                color={theme.palette.secondary.main}
                              >
                                <svg
                                  width={18}
                                  height={18}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Typography
                          color={
                            i === 1
                              ? theme.palette.common.white
                              : 'text.secondary'
                          }
                        >
                          {item.feedback}
                        </Typography>
                      </CardContent>
                      <Box flexGrow={1} />
                      <CardActions sx={{ paddingBottom: 2 }}>
                        <ListItem
                          component="div"
                          disableGutters
                          sx={{ padding: 0 }}
                        >
                          <ListItemAvatar>
                            <Avatar src={item.avatar} />
                          </ListItemAvatar>
                          <ListItemText
                            sx={{ margin: 0 }}
                            primary={item.name}
                            secondary={item.title}
                            primaryTypographyProps={{
                              color:
                                i === 1
                                  ? theme.palette.common.white
                                  : 'text.primary',
                            }}
                            secondaryTypographyProps={{
                              color:
                                i === 1
                                  ? theme.palette.common.white
                                  : 'text.secondary',
                            }}
                          />
                        </ListItem>
                      </CardActions>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box component={Card} boxShadow={3} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image={
                image ||
                'https://assets.maccarianagency.com/backgrounds/img4.jpg'
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const HowItWorks = ({
  // header is dangerouse title and description
  header,
  images,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const styleSx = {
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '20%',
      zIndex: 1,
      top: 0,
      left: 0,
      height: '100%',
    },
  };

  return (
    <>
      <Container sx={styleSx}>
        <Box position={'relative'} zIndex={2}>
          <Grid item xs={12} md={9}>
            <Box
              dangerouslySetInnerHTML={{
                __html: header || FillerContent.rich_text,
              }}
            ></Box>
          </Grid>
        </Box>
      </Container>
      <FeatureGridWithBackgrounds images={images || FillerContent.demos} />
    </>
  );
};

function LongFormPpc({ content }) {
  console.log(content, 'CONTENT');
  return (
    <>
      {/* HERO */}
      <SimpleHeroWithCta
        title={content.hero_h1 || FillerContent.header}
        description={content.hero_h2 || FillerContent.description}
        primaryCta={content.hero_cta_primary_text || FillerContent.cta}
        secondaryCTA={content.hero_cta_secondary_text || FillerContent.cta}
        secondaryCtaLink={content.hero_cta_secondary_link || FillerContent.href}
      />

      {/* Who Zesty is */}
      {/* header should be html*/}
      <SimpleCentered
        header={content.who_is_zesty_h2 || FillerContent.header}
        cards={content.zesty_benefits || []}
      />

      {/* Who Zesty works with */}
      <LogoGridSimpleCentered
        title={content.logos_h3 || FillerContent.header}
        imageCollection={content.logos?.data || [FillerContent.image]}
      />

      {/* What is a DXP? */}
      <HeroWithIllustrationAndSearchBar
        titleAndDescription={
          content._what_is_title_and_description || FillerContent.rich_text
        }
        image={content._what_is_image || FillerContent.image}
      />

      {/* How it works */}
      {/* ******************************j */}
      <HowItWorks
        header={content.how_it_works || FillerContent.header}
        images={content.how_it_works_image}
      />

      {/* Benefits */}
      <NewsletterWithImage
        header={content.outline_of_benefits || FillerContent.header}
        image={content.benefits_image || FillerContent.image}
        testimonial={null}
      />

      {/* Form */}
      <ContactUs
        title={content.contact_form_h3 || FillerContent.header}
        description={
          content.contact_form_description || FillerContent.description
        }
      />
    </>
  );
}

export default LongFormPpc;

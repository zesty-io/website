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
import LogoGridSimpleCentered from 'blocks/logoGrid/LogoGridSimpleCentered';
import HeroWithIllustrationAndSearchBar from 'blocks/heroes/HeroWithIllustrationAndSearchBar';
import FeatureGridWithBackgrounds from 'blocks/features/FeatureGridWithBackgrounds';
import Container from 'components/Container';
import { alpha, useTheme } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
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
import { useRouter } from 'next/router';
import ExploreZesty from './ExploreZestyPage';
import { zestyLink } from 'lib/zestyLink';
import MuiMarkdown from 'mui-markdown';
import * as helper from 'utils';
import tech_stack from '../../../public/assets/images/headless-cms/tech-stack.png';
import HeroWithFormAndBackgroundGradient from 'blocks/heroes/HeroWithFormAndBackgroundGradient';

function LongFormPpc({ content }) {
  const router = useRouter();

  if (router.asPath === '/ppc/explore/') {
    return <ExploreZesty />;
  }
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollToContactUs = () => {
    document
      .getElementById('contact-us')
      .scrollIntoView({ behavior: 'smooth' });
  };

  const formContent = {
    leadDetail: 'Adwords',
    businessType: 'Direct',
    leadSource: 'Advertisement',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: content.cta_footer_cta || FillerContent.cta,
    modalTitle: 'Thank you for submitting your information.',
    modalMessage: 'Our team will be in touch soon to discuss next steps.',
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true },
    customButtonStyle: { display: 'flex', justifyContent: 'center' },
    phoneNumber: true,
  };

  const headerProps = {
    title: content.title || FillerContent.header,
    subtitle: content.sub_title || FillerContent.description,
    description: content.header_description || FillerContent.description,
    image:
      (content.header_image?.data && content.header_image?.data[0]?.url) ||
      FillerContent.image,
    cta_right_text: content.cta_right_text || FillerContent.cta,
    cta_right_url:
      (content.cta_right_url &&
        zestyLink(content.navigationTree, content.cta_right_url)) ||
      zestyLink(content.navigationTree, FillerContent.contact_zuid),
  };

  return (
    <>
      {/* HERO */}
      {router.asPath === '/ppc/headless-cms/' ? (
        <SimpleHeroWithCta
          title={content.hero_h1 || FillerContent.header}
          description={content.hero_h2 || FillerContent.description}
          primaryCta={content.hero_cta_primary_text || FillerContent.cta}
          secondaryCTA={content.hero_cta_secondary_text || FillerContent.cta}
          onClick={scrollToContactUs}
        />
      ) : (
        <Box sx={{ position: 'relative', py: 10 }}>
          <Hero scrollToContactUs={scrollToContactUs} {...headerProps} />
        </Box>
      )}

      {/* Who Zesty is */}
      <Box
        sx={{
          background: theme.palette.zesty.zestyDarkBlue,
          py: 15,
        }}
      >
        <SimpleCentered
          header={content.who_is_zesty_h2 || FillerContent.header}
          cards={content.zesty_benefits?.data || []}
        />
      </Box>

      {/* Who Zesty works with */}
      <Box sx={{ py: 10 }}>
        <LogoGridSimpleCentered
          title={content.logos_h3 || FillerContent.header}
          imageCollection={content.logos?.data || [FillerContent.image]}
        />
      </Box>

      {/* What is a DXP? */}
      <Box sx={{ pt: 10 }} bgcolor={'alternate.main'}>
        <HeroWithIllustrationAndSearchBar
          titleAndDescription={
            content._what_is_title_and_description || FillerContent.rich_text
          }
          image={
            (content._what_is_image?.data &&
              content._what_is_image?.data[0].url) ||
            FillerContent.image
          }
        />
        <BgDecorations theme={theme} />
      </Box>

      {/* How it works */}

      {router.asPath === '/ppc/headless-cms/' ? (
        <HowItWorks
          header={content.how_it_works || FillerContent.header}
          images={content.how_it_works_image?.data}
        />
      ) : (
        <Section5Features
          isDarkMode={isDarkMode}
          content={content}
          theme={theme}
          isMobile={isMobile}
        />
      )}

      {/* Benefits */}
      <Box
        sx={{ py: isMobile ? 10 : 20 }}
        bgcolor={theme.palette.zesty.zestyDarkBlue}
      >
        <NewsletterWithImage
          header={content.outline_of_benefits || FillerContent.header}
          image={
            (content.benefits_image?.data &&
              content.benefits_image?.data[0]?.url) ||
            FillerContent.image
          }
          testimonial={content.testimonial?.data}
        />
      </Box>

      {router.asPath === '/ppc/headless-cms/' ? null : (
        <TechStack content={content} theme={theme} isMobile={isMobile} />
      )}

      {/* Form */}
      {router.asPath === '/ppc/content-management-system/' ? (
        <PpcShortForm theme={theme} content={content} />
      ) : (
        <ContactUsForm
          theme={theme}
          content={content}
          formContent={formContent}
        />
      )}
    </>
  );
}

const ContactUs = ({ title, description, content, formContent }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.common.white,
        paddingTop: '3rem',
        paddingBottom: '1rem',
        borderRadius: '15px',
        paddingX: '3rem',
      }}
      maxWidth={600}
      margin={'0 auto'}
    >
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{
            fontWeight: 700,
            color: theme.palette.common.black,
          }}
          align={'center'}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.common.black,
          }}
          align={'center'}
        >
          {description}
        </Typography>
      </Box>
      <Box paddingBottom={6} textAlign="center">
        <StandardFormWithSelect {...formContent} />
      </Box>
    </Box>
  );
};

const NewsletterWithImage = ({ image, header, testimonial }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const testimonials = testimonial || FillerContent.testimonialCard;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box marginBottom={3}>
              <Grid item xs={12}>
                <MuiMarkdown
                  style={{ width: '100%' }}
                  overrides={{
                    h2: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h2',
                        sx: {
                          color: theme.palette.common.white,
                          fontWeight: 'bold',
                          lineHeight: 1.2,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h6',
                        component: 'p',
                        sx: { color: theme.palette.common.white },
                      },
                    },
                    ul: {
                      component: Typography,
                      props: {
                        component: 'ul',
                        sx: {
                          paddingLeft: 2,
                          mt: 3,
                          color: theme.palette.common.white,
                        },
                      },
                    },
                  }}
                >
                  {header}
                </MuiMarkdown>
              </Grid>
            </Box>
            <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
              <Grid container spacing={4}>
                {testimonials.map((item, i) => (
                  <Grid item xs={12} key={i}>
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
                          {item.review || item.feedback}
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
                            <Avatar
                              src={
                                (item.reviewer_headshot?.data &&
                                  item.reviewer_headshot?.data[0]?.url) ||
                                item.avatar
                              }
                            />
                          </ListItemAvatar>
                          <ListItemText
                            sx={{ margin: 0 }}
                            primary={item.reviewer_title || item.name}
                            secondary={item.company || item.title}
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
          <Box
            component="img"
            height={1}
            width={1}
            src={
              image || 'https://assets.maccarianagency.com/backgrounds/img4.jpg'
            }
          />
          {/* <Box component={Card} boxShadow={3} height={1} width={1}></Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

const SimpleCentered = ({ header, description, cards = [] }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant={'p'}
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? '24px' : '35px',
                color: theme.palette.common.white,
                textAlign: 'center',
              }}
            >
              {header || FillerContent.header}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={isMobile ? 4 : 8}>
          {cards?.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  marginTop={4}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.4)}
                    color={theme.palette.primary.main}
                  >
                    <Icon>{item.icon_name}</Icon>
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500, marginTop: '1rem' }}
                    align={'center'}
                    color={theme.palette.zesty.white}
                  >
                    {item.key_attribute_title || FillerContent.header}
                  </Typography>
                  <Typography
                    align={'center'}
                    color={theme.palette.zesty.white}
                  >
                    {item.key_attribute_description ||
                      FillerContent.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const BgDecorations = ({ theme }) => {
  return (
    <Box
      component={'svg'}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 100.1"
      sx={{
        width: '100%',
        marginBottom: theme.spacing(-1),
      }}
    >
      <path
        fill={theme.palette.background.paper}
        d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
      ></path>
    </Box>
  );
};

const TechStack = ({ theme, isMobile, content }) => {
  return (
    <Box
      component="section"
      sx={{ px: 4, background: theme.palette.zesty.zestySeaShell }}
    >
      <Box
        sx={{
          py: 15,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Typography
                sx={{ color: theme.palette.zesty.zestyZambezi }}
                variant="h4"
                component="h3"
              >
                {content.tech_stack_integration}
              </Typography>

              <MuiMarkdown
                overrides={{
                  h2: {
                    component: 'h2',
                    props: {
                      style: {
                        color: theme.palette.zesty.zestyZambezi,
                        fontSize: isMobile ? 30 : 48,
                        lineHeight: 1.2,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  span: {
                    component: 'span',
                    props: {
                      style: { color: theme.palette.zesty.zestyOrange },
                    },
                  },
                }}
              >
                {content.tech_stack_header}
              </MuiMarkdown>

              <Typography
                sx={{
                  mt: 2,

                  color: theme.palette.zesty.zestyZambezi,
                }}
                variant="h5"
                component="p"
              >
                {content.tech_stack_description}
              </Typography>

              <Box sx={{ width: '100%', mt: 4 }}>
                <Button
                  href={
                    content.tech_stack_integration_link.data[0].meta.web.uri
                  }
                  component={'a'}
                  target="_blank"
                  fullWidth={isMobile}
                  variant="contained"
                  sx={{
                    background: theme.palette.zesty.zestyOrange,
                    color: theme.palette.common.white,
                    px: 6,
                  }}
                  size="large"
                >
                  See All
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box sx={{ mt: isMobile ? 4 : 0 }}>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={tech_stack.src}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const ContactUsForm = ({ theme, content, formContent }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          (content.form_background_image?.data &&
            content.form_background_image?.data[0]?.url) ||
          FillerContent.image
        }) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />

      <Box
        id="contact-us"
        sx={{
          position: 'relative',
          padding: isMobile ? '5rem 0' : '10rem 0',
          zIndex: 2,
        }}
      >
        <ContactUs
          title={content.contact_form_h3 || FillerContent.header}
          description={
            content.contact_form_description || FillerContent.description
          }
          content={content}
          formContent={formContent}
        />
      </Box>
    </Box>
  );
};

const Hero = ({
  title,
  subtitle,
  description,
  image,
  cta_right_text,
  cta_right_url,
  scrollToContactUs,
}) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Grid
        sx={{ py: isMobile ? 5 : 0 }}
        container
        spacing={4}
        flexDirection={isMobile ? 'column-reverse' : 'row'}
      >
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.zesty.zestyZambezi,
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="p"
                component="h3"
                color="text.secondary"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                }}
              >
                {description || FillerContent.description}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Box
                onClick={() => scrollToContactUs()}
                component={Button}
                variant="contained"
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                fullWidth={isMd ? false : true}
                sx={{
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.zesty.zestyOrange,
                }}
              >
                {cta_right_text || FillerContent.cta}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
        >
          <Box
            component={'img'}
            height={1}
            width={1}
            src={image || FillerContent.dashboard_image}
            alt="headless cms image"
            borderRadius={2}
            maxWidth={600}
            sx={{
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const Section5Features = ({ content, theme, isMobile, isDarkMode }) => {
  const arr = content.features.data;
  console.log(arr);
  const bracketImg =
    content.dxp_background_images?.data[0]?.url ||
    FillerContent.dashboard_image;
  return (
    <Box
      paddingBottom={isMobile ? 20 : 20}
      sx={{
        position: 'relative',
        zIndex: '500',
        background: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        {/* <img src={bracketImg} alt="bg" /> */}
      </Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 4 : 10}
            paddingBottom={isMobile ? 4 : 10}
            sx={{
              color: isDarkMode
                ? theme.palette.zesty.zestyGrey
                : theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontSize: isMobile ? '24px' : '48px',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.features_header,
                'Zesty',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
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
          {arr?.map((e) => {
            return (
              <div>
                <Card
                  sx={{
                    width: '20rem',
                    height: '22rem',
                    padding: '3rem 2rem',
                    background: theme.palette.common.white,
                  }}
                >
                  {e.icon_image && (
                    <img src={e.icon_image?.data[0].url} alt="" />
                  )}

                  <Typography
                    component={'p'}
                    variant={'p'}
                    paddingTop={4}
                    paddingBottom={2}
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      textAlign: 'left',
                      fontSize: '20px',
                    }}
                  >
                    {e?.feature_name}
                  </Typography>
                  <Typography
                    component={'h2'}
                    variant={'p'}
                    sx={{
                      color: isDarkMode
                        ? theme.palette.zesty.zestyGrey
                        : theme.palette.zesty.zestyZambezi,
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: 'light',
                    }}
                  >
                    {e?.content}
                  </Typography>
                </Card>
              </div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

const SimpleHeroWithCta = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCTA,
  onClick,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      style={{ marginTop: isMobile ? '0rem' : '1rem', marginBottom: '1rem' }}
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '20%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box paddingTop={isMobile ? 0 : 1} position={'relative'} zIndex={2}>
        <Box marginBottom={4}>
          <Typography
            variant="p"
            component={'h1'}
            color="text.primary"
            align={'center'}
            sx={{
              fontSize: isMobile ? '35px' : '48px',
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="p"
            component="h2"
            color="text.secondary"
            sx={{
              fontSize: '20px',
              fontWeight: 400,
            }}
            align={'center'}
          >
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'center' }}
          justifyContent={'center'}
        >
          <TryFreeButton
            component={'a'}
            variant="contained"
            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
            size="large"
            fullWidth={isMd ? false : true}
            text={primaryCta}
          />
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', sm: 'auto', md: 'auto' }}
          >
            <Button
              component={'a'}
              onClick={onClick}
              variant="outlined"
              color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
              size="large"
              fullWidth={isMd ? false : true}
            >
              {secondaryCTA}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
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
            {/* <Box
              dangerouslySetInnerHTML={{
                __html: header || FillerContent.rich_text,
              }}
            ></Box> */}
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      fontWeight: 'bold',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: { lineHeight: 1.5, mt: 2 },
                  },
                },
              }}
            >
              {header || FillerContent.rich_text}
            </MuiMarkdown>
          </Grid>
        </Box>
      </Container>
      <FeatureGridWithBackgrounds images={images || FillerContent.demos} />
    </>
  );
};

const PpcShortForm = ({ content }) => {
  const theme = useTheme();

  const formContent = {
    leadDetail: 'Adwords',
    businessType: 'Direct',
    leadSource: 'Advertisement',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: FillerContent.cta,
    modalTitle: 'Thank you for submitting your information.',
    modalMessage: 'Our team will be in touch soon to discuss next steps.',
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true },
    buttonFullWidth: true,
    hidePrivacySection: true,
    messageLabel: 'Is there anything you would like to cover in the demo?',
    phoneNumber: true,
  };
  return (
    <Box id="contact-us">
      <HeroWithFormAndBackgroundGradient
        headelineTitle={content.contact_form_h3 || FillerContent.header}
        description={
          content.request_demo_description || FillerContent.description
        }
        imageCollection={
          content.logos?.data?.slice(0, 3) || [FillerContent.image]
        }
        backgroundImage={content.form_background_image.data[0].url}
        form_title={content.form_title || FillerContent.header}
        formContent={formContent}
      />
    </Box>
  );
};

export default LongFormPpc;

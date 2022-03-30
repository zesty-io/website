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
import * as yup from 'yup';
import { useFormik } from 'formik';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import { zestyLink } from 'lib/zestyLink';

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: '#fff',
  },

  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: '#FF5D0A',
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: '#FF5D0A',
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: '#fff',
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: '#FF5D0A',
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: '#FF5D0A',
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: '#fff',
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: '#FF5D0A',
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: '#FF5D0A',
  },
});

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup.string().trim().required('Please specify your message'),
});

const ContactUs = ({ title, description, content }) => {
  const theme = useTheme();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const styles = (theme) => ({
    multilineColor: {
      color: 'red',
    },
  });
  return (
    <Box
      sx={{
        background: theme.palette.common.white,
        paddingTop: '3rem',
        paddingBottom: '1rem',
        borderRadius: '15px',
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
      <Box paddingBottom={6}>
        <form onSubmit={formik.handleSubmit}>
          <Grid sx={{ padding: '0 3rem' }} container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{
                  height: 54,
                }}
                inputProps={{ style: { color: theme.palette.common.white } }}
                color="primary"
                label="First name"
                variant="outlined"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="secondary"
                size="medium"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid sx={{ margin: '2rem 0' }} item xs={12}>
          <Divider />
        </Grid>
        <Grid item container justifyContent={'center'} xs={12}>
          <Box>
            <Typography component="p" variant="body2" align="left">
              By clicking on "submit" you agree to our{' '}
              <Box
                component="a"
                href={
                  zestyLink(content.navigationTree, '7-713ae23-wg19b5') ||
                  FillerContent.href
                }
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Privacy Policy
              </Box>
              .
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

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

const SimpleCentered = ({ header, description, cards = [] }) => {
  const theme = useTheme();

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
                fontSize: '35px',
                color: theme.palette.common.white,
                textAlign: 'center',
              }}
            >
              {header || FillerContent.header}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
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
      <FeatureGridWithBackgrounds images={FillerContent.demos} />
    </>
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

  return (
    <Container
      style={{ marginTop: '2rem', marginBottom: '5rem' }}
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
      <Box paddingTop={6} position={'relative'} zIndex={2}>
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            color="text.primary"
            align={'center'}
            sx={{
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400, whiteSpace: 'nowrap' }}
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
function LongFormPpc({ content }) {
  const theme = useTheme();

  const scrollToContactUs = () => {
    document
      .getElementById('contact-us')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {/* HERO */}
      <SimpleHeroWithCta
        title={content.hero_h1 || FillerContent.header}
        description={content.hero_h2 || FillerContent.description}
        primaryCta={content.hero_cta_primary_text || FillerContent.cta}
        secondaryCTA={content.hero_cta_secondary_text || FillerContent.cta}
        onClick={scrollToContactUs}
      />

      {/* Who Zesty is */}
      {/* header should be html*/}
      <Box
        sx={{
          background: theme.palette.zesty.zestyDarkBlue,
          padding: '5rem 0',
        }}
      >
        <SimpleCentered
          header={content.who_is_zesty_h2 || FillerContent.header}
          cards={content.zesty_benefits?.data || []}
        />
      </Box>

      {/* Who Zesty works with */}
      <LogoGridSimpleCentered
        title={content.logos_h3 || FillerContent.header}
        imageCollection={content.logos?.data || [FillerContent.image]}
      />

      {/* What is a DXP? */}
      <Box bgcolor={'alternate.main'}>
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
      </Box>

      {/* How it works */}
      {/* ******************************j */}
      <HowItWorks
        header={content.how_it_works || FillerContent.header}
        images={content.how_it_works_image}
      />

      {/* Benefits */}
      <Box marginTop={6} padding={8} bgcolor={'alternate.main'}>
        <NewsletterWithImage
          header={content.outline_of_benefits || FillerContent.header}
          image={
            (content.benefits_image?.data &&
              content.benefits_image?.data[0]?.url) ||
            FillerContent.image
          }
          testimonial={null}
        />
      </Box>

      {/* Form */}

      <Box
        // minHeight={300}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          background:
            'url(https://assets.maccarianagency.com/backgrounds/img19.jpg) no-repeat center',
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
            padding: '12rem 0',
            zIndex: 2,
          }}
        >
          <ContactUs
            title={content.contact_form_h3 || FillerContent.header}
            description={
              content.contact_form_description || FillerContent.description
            }
            content={content}
          />
        </Box>
      </Box>
    </>
  );
}

export default LongFormPpc;

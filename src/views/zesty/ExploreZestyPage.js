/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Homepage
 * Name: homepage
 * Model ZUID: 6-e48cfbfea7-d9b9dt
 * File Created On: Thu Apr 21 2022 23:09:30 GMT+0800 (Philippine Standard Time)
 *
 * Model Fields:
 *
 * title (text)
 * content (wysiwyg_advanced)
 * image (images)
 * subtitle (text)
 * cta_text (text)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-92cafcf28c-n5tcpc.manager.zesty.io/schema/6-e48cfbfea7-d9b9dt
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import TryFreeButton from 'components/cta/TryFreeButton';
import FillerContent from 'components/globals/FillerContent';
import WYSIWYGRender from 'components/globals/WYSIWYGRender';
import { useRouter } from 'next/router';
import React from 'react';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const HeroWithIllustrationAndCta = ({
  title,
  subtitle,
  description = '',
  image,
  button_left_text,
  button_left_link,
  hero_button_right,
  button_right_link,
  content,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let titleSplits = title?.split('<br>');
  const scrollToContactUs = () => {
    document
      .getElementById('contact-us')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Box
      position={'relative'}
      sx={{ backgroundColor: theme.palette.alternate.main }}
    >
      {' '}
      <Container>
        {' '}
        <Grid container spacing={4} flexDirection={{ xs: 'column', md: 'row' }}>
          {' '}
          <Grid item container alignItems={'center'} xs={12} md={6}>
            {' '}
            <Box>
              {' '}
              <Box>
                {' '}
                <Typography
                  variant="h6"
                  component="h1"
                  color="text.secondary"
                  sx={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></Typography>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  component={'h3'}
                  color="text.primary"
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? '38px' : '60px',
                    margin: '0',
                    lineHeight: isMobile ? '46px' : '65px',
                  }}
                >
                  {titleSplits && titleSplits[0]}
                </Typography>
              </Box>
              <Box marginBottom={2}>
                <Typography
                  variant="p"
                  component={'h3'}
                  color={theme.palette.zesty.zestyOrange}
                  sx={{
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {titleSplits && titleSplits[1]}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  component="h2"
                  color="text.secondary"
                  sx={{ fontWeight: 400, fontSize: isMobile ? '18px' : '20px' }}
                  marginBottom={6}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <TryFreeButton
                  component={'a'}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  text={button_left_text}
                ></TryFreeButton>

                {hero_button_right && (
                  <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    width={{ xs: '100%', md: 'auto' }}
                  >
                    <Button
                      component={'a'}
                      onClick={scrollToContactUs}
                      // href={button_right_link || '#'}
                      variant="outlined"
                      color="secondary"
                      size="large"
                      fullWidth={isMd ? false : true}
                    >
                      {hero_button_right}
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={1}
              width={1}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box height={1} width={1} maxWidth="100%">
                <Box
                  component={'img'}
                  src={image}
                  width={1}
                  height={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.8)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <LogoGridSimpleCentered
          title={'          '}
          imageCollection={content.logos?.data || [FillerContent.image]}
        />
      </Container>
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
          fill={theme.palette.zesty.zestyBlue}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};
const LogoGridSimpleCentered = ({ title, imageCollection, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images =
    imageCollection?.map(
      (e) => e.customer_logo?.data && e.customer_logo?.data[0]?.url,
    ) || mock;

  return (
    <Container>
      <Box paddingY={8}>
        <Box marginBottom={4}>
          {title && (
            <Typography
              gutterBottom
              align={'center'}
              variant={'p'}
              component={'h3'}
              fontWeight={700}
              fontSize={'24px'}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              color={'text.secondary'}
              align={'center'}
              variant={'h6'}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box
          display="flex"
          gap={isMobile ? 2 : 4}
          flexWrap="wrap"
          justifyContent={'center'}
        >
          {images?.map((item, i) => (
            <Box marginTop={2} key={i}>
              <Box
                component="img"
                // height={2}
                // width={2}
                src={item}
                alt="..."
                sx={{
                  height: 'auto',
                  width: '12rem',
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'grayscale(100%) brightness(0) invert(0) ',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
const FeaturesWithMobileScreenshot = ({
  header,
  content,
  image,
  index,
  feature_list_h1,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      {feature_list_h1 && (
        <Typography
          variant="p"
          component="h2"
          color="text.primary"
          sx={{
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '32px',
          }}
        >
          {feature_list_h1 || FillerContent.header}
        </Typography>
      )}
      <Grid
        display={'flex'}
        flexDirection={
          isMobile ? 'column' : index !== 1 ? 'row' : 'row-reverse'
        }
        container
        spacing={isMobile ? 0 : 4}
      >
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          order={{ xs: 3, sm: 2 }}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {header}
              </Typography>
            </Box>
            <Grid container order={{ sm: 2, md: 1 }}>
              <WYSIWYGRender
                customClass="circle-icons"
                rich_text={content || FillerContent.rich_text}
              ></WYSIWYGRender>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: 'none',
            backgroundImage: '',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'start',
            marginTop: isMobile ? '1rem' : '4rem',
          }}
          order={{ sm: 1, md: 2 }}
        >
          <img
            height={isMobile ? 200 : 320}
            src={
              image
                ? image
                : theme.palette.mode === 'light'
                ? FillerContent.mobileImage.light
                : FillerContent.mobileImage.dark
            }
            alt={header || FillerContent.header}
            style={{
              marginBottom: isMobile ? '3rem' : '1rem',
              objectFit: 'contain',
              borderRadius: '2rem',
              transform: isMobile ? 'scale(.80)' : 'scale(.70)',
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
const switchName = (id) => {
  switch (id) {
    case 0:
      return 'content-management';
    case 1:
      return 'digital-asset-management';
    case 2:
      return 'webengine';
    default:
      return 'content-management';
  }
};
const Stories = ({ clientInfo, eyeBrow, clientTitle }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClick = (id) => {
    document
      .getElementById(switchName(id))
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Box paddingY={8}>
      {' '}
      <Box marginBottom={4}>
        {' '}
        <Typography
          sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
          gutterBottom
          color={
            router.asPath === '/' ? theme.palette.zesty.zestyGrey : 'secondary'
          }
          align={'center'}
        >
          {' '}
          {eyeBrow}{' '}
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={router.asPath === '/' ? 'h4' : 'h3'}
          align={'center'}
        >
          {/* <br/> tag inject in field */}
          <Typography
            variant="p"
            component={'h3'}
            fontSize={35}
            color={theme.palette.common.white}
            dangerouslySetInnerHTML={{
              __html: clientTitle,
            }}
          ></Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {clientInfo.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              onClick={() => handleClick(i)}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                justifyItems={'center'}
                padding={4}
              >
                <Box
                  sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={case_study_cards[i].img} alt="" />
                </Box>
                <Box sx={{}} component={CardContent}>
                  <Typography
                    align={'center'}
                    variant={'p'}
                    component={'h3'}
                    color="textSecondary"
                    paddingBottom={4}
                    whiteSpace={isMobile ? 'normal' : 'nowrap'}
                  >
                    {item.feature_name || FillerContent.description}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.content || FillerContent.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ContactUsForm = ({ theme, content, formContent }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      marginTop={isMobile ? 4 : 16}
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
          padding: isMobile ? '5rem 0' : '12rem 0',
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

function ExploreZesty({ content }) {
  console.log('explore content', content);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

  const hero_image = 'https://hkrhwx6h.media.zestyio.com/Group-19.png';
  const heroProps = {
    title: content.hero_h1,
    description: content.hero_h2 || '',
    subtitle: content.simple_intro_text,
    image: hero_image || FillerContent.image,
    button_left_text: content.hero_cta_primary_text || FillerContent.header,

    button_left_link: content.hero_cta_primary_link || FillerContent.header,
    hero_button_right: content.hero_cta_secondary_text,
    button_right_link: '#contact-us' || FillerContent.header,
    content,
  };

  return (
    <>
      {/* Hero section */}
      <HeroWithIllustrationAndCta {...heroProps} />

      {/* Logo section  */}

      {/* Stories section */}
      <Box
        marginBottom={isMobile ? 11 : 12}
        paddingBottom={isMobile ? 6 : 12}
        bgcolor={theme.palette.zesty.zestyBlue}
      >
        <Container>
          <Stories
            eyeBrow={'   ' || FillerContent.header}
            clientTitle={
              content._what_is_title_and_description || FillerContent.header
            }
            clientInfo={content.key_features?.data || []}
          />
        </Container>
      </Box>

      <Box id="content-management">
        <FeaturesWithMobileScreenshot
          index={0}
          header={'   ' || FillerContent.header}
          content={content.how_it_works || FillerContent.rich_text}
          image={
            (content?.how_it_works_image?.data &&
              content?.how_it_works_image?.data[0]?.url) ||
            FillerContent.image
          }
        />
      </Box>
      <Box id="digital-asset-management" paddingY={isMobile ? 6 : 12}>
        <FeaturesWithMobileScreenshot
          index={1}
          header={'  ' || FillerContent.header}
          content={content.outline_of_benefits || FillerContent.rich_text}
          image={
            (content.benefits_image?.data &&
              content.benefits_image?.data[0]?.url) ||
            FillerContent.image
          }
        />
      </Box>
      <Box id="webengine">
        <FeaturesWithMobileScreenshot
          index={2}
          header={'  ' || FillerContent.header}
          content={content.additional_benefit || FillerContent.rich_text}
          image={
            (content.additional_benefit_image?.data &&
              content.additional_benefit_image?.data[0]?.url) ||
            FillerContent.image
          }
        />
      </Box>
      {/* form */}
      <ContactUsForm
        theme={theme}
        content={content}
        formContent={formContent}
      />
    </>
  );
}

export default ExploreZesty;

const case_study_cards = [
  {
    img: 'https://hkrhwx6h.media.zestyio.com/content-management.f1cb27a519bdb5b6ed34049a5b86e317.png',
    title: 'Content Management',
    description:
      'Through one central hub, you can control content for all of your brands, websites and channels—and you don’t need to be a tech whiz to do it.',
  },
  {
    img: 'https://hkrhwx6h.media.zestyio.com/asset-management.f1cb27a519bdb5b6ed34049a5b86e317.png',
    title: 'Digital Asset Management',
    description:
      'Have your entire media library stored through our Micro DAM, where files can be easily accessed wherever and whenever you need.',
  },
  {
    img: 'https://hkrhwx6h.media.zestyio.com/rendering.f1cb27a519bdb5b6ed34049a5b86e317.png',
    title: 'WebEngine Server-Side Rendering',
    description:
      'WebEngine guides your digital experience from database to deployment without third-party hosting hassles, plus the speeds we deliver are next-gen fast.',
  },
];

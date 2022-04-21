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
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { HeroWithIllustrationAndCta } from 'blocks/heroes';
import { WithSwiperAndBrandBackgroundColor } from 'blocks/logoGrid';
import { ReviewsWithSimpleBoxes } from 'blocks/testimonials';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import FillerContent from 'components/FillerContent';
import WYSIWYGRender from 'components/WYSIWYGRender';
import { useRouter } from 'next/router';
import React from 'react';

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
        spacing={4}
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
            backgroundColor: 'transparent',
            backgroundImage: '',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
          order={{ sm: 1, md: 2 }}
        >
          <Box
            component={'img'}
            src={
              image
                ? image
                : theme.palette.mode === 'light'
                ? FillerContent.mobileImage.light
                : FillerContent.mobileImage.dark
            }
            alt={header || FillerContent.header}
            width={1}
            height={1}
            sx={{
              marginBottom: isMobile ? '3rem' : '1rem',
              objectFit: 'contain',
              borderRadius: '2.5rem',
              transform: isMobile ? 'scale(.80)' : 'scale(.70)',
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
const Stories = ({ clientInfo, eyeBrow, clientTitle }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();
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
          <h3
            dangerouslySetInnerHTML={{
              __html: clientTitle,
            }}
          ></h3>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {clientInfo.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={
                item?.card_link?.data[0]?.meta?.web?.uri || FillerContent.href
              }
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
                  <img src={item.img} alt="" />
                </Box>
                <Box sx={{}} component={CardContent}>
                  <Typography
                    align={'center'}
                    variant={'p'}
                    component={'h3'}
                    color="textSecondary"
                    paddingBottom={4}
                    whiteSpace={'nowrap'}
                  >
                    {item.title || FillerContent.description}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.description || FillerContent.description}
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
      marginTop={10}
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

const url = 'https://www.zesty.io/ppc/explore?toJSON';

const fetchCardsData = async (uri, setFunc) => {
  const res = await fetch(uri).then((response) => response.json());
  res && (await setFunc(res));
};

function ExploreZesty() {
  const [content, setcontent] = React.useState([]);

  React.useEffect(() => {
    fetchCardsData(url, setcontent);
  }, []);

  const theme = useTheme();

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
  };

  const hero_image = 'https://hkrhwx6h.media.zestyio.com/Group-19.png';
  const heroProps = {
    title: content.hero_h1,
    description: content.hero_h2 || '',
    subtitle: content.simple_intro_text,
    image: hero_image || FillerContent.image,
    button_left_text: content.hero_cta_primary_text || FillerContent.header,

    button_left_link: content.hero_cta_primary_link || FillerContent.header,
    hero_button_right: '',
    button_right_link:
      content.hero_hero_button_left_link?.data[0]?.url || FillerContent.header,
  };

  console.log(content.logos, 1111111111111111);
  return (
    <>
      {/* Hero section */}
      <HeroWithIllustrationAndCta {...heroProps} />

      {/* Logo section  */}
      <Container>
        <WithSwiperAndBrandBackgroundColor
          logos={content?.logos?.data || FillerContent.logos}
        />
      </Container>
      {/* Stories section */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Stories
            eyeBrow={'EVERYTHING YOU NEED' || FillerContent.header}
            clientTitle={'ALL IN ONE PLACE.' || FillerContent.header}
            clientInfo={case_study_cards1 || []}
          />
        </Container>
      </Box>

      <FeaturesWithMobileScreenshot
        index={0}
        header={content.header || FillerContent.header}
        content={content.how_it_works || FillerContent.rich_text}
        image={
          'https://hkrhwx6h.media.zestyio.com/screen-analytics.png' ||
          FillerContent.image
        }
      />
      <FeaturesWithMobileScreenshot
        index={1}
        header={content.header || FillerContent.header}
        content={content.outline_of_benefits || FillerContent.rich_text}
        image={
          'https://hkrhwx6h.media.zestyio.com/screen.png' || FillerContent.image
        }
      />
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

const case_study_cards1 = [
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

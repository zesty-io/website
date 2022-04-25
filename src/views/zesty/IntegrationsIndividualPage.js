/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Integrations-Individual Pages 
 * Name: integrations_individual_pages 
 * Model ZUID: 6-88e5918e85-tmg13p
 * File Created On: Thu Apr 07 2022 01:46:58 GMT+0800 (Philippine Standard Time)
 * * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (text)
 * cta_primary_text (text)
 * cta_secondary_text (text)
 * integration_benefits_h2 (text)
 * integration_benefits (one_to_many)
 * feature_description_1 (wysiwyg_basic)
 * feature_description_2 (wysiwyg_basic)
 * feature_description_3 (wysiwyg_basic)
 * testimonial (one_to_one)
 * logos_title (text)
 * logos (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-88e5918e85-tmg13p
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import LogoGridSimpleCentered from 'blocks/logoGrid/LogoGridSimpleCentered';
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
import CodeBlock from 'components/cta/CodeBlock';
import ReactPlayer from 'react-player';
import { textAlign } from '@mui/system';
import { CtaSimpleCentered } from 'blocks/cta';

const WithCompanyLogo = ({ title, header, content, logo }) => {
  const theme = useTheme();

  return (
    <Box
      textAlign={'center'}
      bgcolor={'alternate.main'}
      sx={{ marginBottom: '2rem' }}
    >
      <Container>
        <Grid item xs={12} md={9}>
          <Box
            sx={{ fontSize: '1.6rem' }}
            dangerouslySetInnerHTML={{ __html: title || FillerContent.header }}
          ></Box>
        </Grid>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          {logo && (
            <Box
              component="img"
              height={1}
              width={1}
              src={
                logo ||
                'https://assets.maccarianagency.com/svg/logos/google-original.svg'
              }
              alt="..."
              maxWidth={{ xs: 80, sm: 100, md: 120 }}
              marginBottom={2}
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          )}
          <Typography
            variant="h5"
            fontWeight={400}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box dangerouslySetInnerHTML={{ __html: content }}></Box>
          </Typography>
        </Box>
        {header && (
          <Typography
            variant="p"
            component="h2"
            color="text.primary"
            sx={{
              fontWeight: '700',
              textAlign: 'center',
              fontSize: '22px',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            {header || FillerContent.header}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

const HeroWithIllustrationAndSearchBar = ({
  bgColor = 'alternate.main',
  titleAndDescription,
  description,
  image,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  search,
  onChange,
  rowReverse = false,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box bgcolor={bgColor} padding={{ xs: 2, md: 4 }} borderRadius={2}>
        <Grid
          flexDirection={
            rowReverse ? 'row-reverse' : isMobile ? 'column-reverse' : 'initial'
          }
          container
          spacing={4}
        >
          <Grid
            item
            container
            xs={12}
            md={6}
            alignItems={'center'}
            sx={{ position: 'relative' }}
          >
            <Box marginBottom={4}>
              <Grid paddingLeft={rowReverse ? 0 : 0} item xs={12} md={9}>
                <Box
                  dangerouslySetInnerHTML={{ __html: titleAndDescription }}
                ></Box>
              </Grid>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                {primaryCta && (
                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={!isMd}
                  >
                    {primaryCta}
                  </Box>
                )}

                {secondaryCta && (
                  <Box
                    component={Button}
                    color="primary"
                    size="large"
                    fullWidth={!isMd}
                    marginTop={{ xs: 1, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    startIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </Box>
                    }
                  >
                    {secondaryCta}
                  </Box>
                )}
              </Box>
            </Box>
            {search && (
              <Box
                sx={{
                  width: '100%',
                  background: theme.palette.background.paper,
                  [theme.breakpoints.up('md')]: {
                    position: 'absolute',
                    bottom: 0,
                    transform: 'translateY(100%)',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '0 !important',
                  },
                }}
              >
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    sx={{
                      background: theme.palette.background.paper,
                      boxShadow: 4,
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </Box>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={1}
              width={1}
              display={'flex'}
              justifyContent={'center'}
            >
              <Box
                height={1}
                width={1}
                maxWidth={{ xs: 600, md: '100%' }}
                maxHeight={500}
              >
                <Box
                  component={'img'}
                  src={
                    image ||
                    'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
                  }
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'contain',
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
      </Box>
    </Container>
  );
};
const ContactUs = ({ title, description, content, isMobile }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // background: theme.palette.common.white,
        paddingTop: '3rem',
        paddingBottom: '1rem',
        borderRadius: '15px',
        paddingX: isMobile ? '1rem' : '3rem',
      }}
      maxWidth={600}
      margin={'0 auto'}
    >
      <Box
        display="block"
        sx={{ width: isMobile ? 'auto' : '33vw' }}
        marginX={'auto'}
      >
        <Typography
          variant="h4"
          color={theme.palette.common.white}
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          paddingY={4}
          color={theme.palette.common.white}
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          {description}
        </Typography>
        <CodeBlock
          bgcolor={theme.palette.zesty.zestyOrange}
          fontSize="14px"
          color={theme.palette.common.white}
        />
      </Box>
      {/* <CtaSimpleCentered
        headerColor={theme.palette.common.white}
        ctaTitle={title || FillerContent.header}
        description={description || FillerContent.description}
        ctaLeft={'Try Free'}
        ctaRight={'Arrange a guided demo'}
        ctaRightHref="/demos"
      /> */}
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
              <Grid item xs={12} md={9}>
                <Box
                  sx={{
                    fontSize: isMobile ? '.8rem' : '1rem',
                    whiteSpace: 'normal',
                  }}
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
                    {item.title || FillerContent.header}
                  </Typography>
                  <Typography
                    align={'center'}
                    color={theme.palette.zesty.white}
                  >
                    {item.description || FillerContent.description}
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
      <FeatureGridWithBackgrounds images={images || FillerContent.demos} />
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
  videoUrl,
  videoHeader,
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
      <VideoPlayer
        videoHeader={videoHeader}
        videoUrl={videoUrl}
        isMobile={isMobile}
        theme={theme}
      />
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
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}
            align={'center'}
          >
            {description}
          </Typography>
        </Box>
        <Box
          display="block"
          sx={{ width: isMobile ? 'auto' : '33vw' }}
          marginX={'auto'}
        >
          <CodeBlock
            bgcolor={theme.palette.zesty.zestyDarkBlue}
            fontSize="14px"
            color={theme.palette.common.white}
          />
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

const ContactUsForm = ({ theme, content }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          (content.background_image_footer?.data &&
            content.background_image_footer?.data[0]?.url) ||
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
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} -80%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />

      <Box
        id="contact-us"
        sx={{
          position: 'relative',
          padding: isMobile ? '5rem 1rem' : '10rem 0',
          zIndex: 2,
        }}
      >
        <ContactUs
          title={content.form_title || FillerContent.header}
          description={content.form_description || FillerContent.description}
          content={content}
          isMobile={isMobile}
        />
      </Box>
    </Box>
  );
};

const VideoPlayer = ({ videoUrl, theme, isMobile, videoHeader }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: isMobile ? '-50vh' : '-70vh',
        left: '50%',
        transform: 'translate(-50%,0)',
        borderRadius: '7px',
        // boxShadow: '-3px 2px 37px -1px rgba(0,0,0,0.30)',
        backgroundClip: 'padding-box ',
      }}
    >
      <Typography
        variant="p"
        component={'h2'}
        color="text.primary"
        align={'center'}
        sx={{
          fontSize: isMobile ? '25px' : '35px',
          fontWeight: 700,
          marginBottom: '2rem',
        }}
      >
        {videoHeader}
      </Typography>
      <ReactPlayer
        width={isMobile ? '90vw' : '50vw'}
        height={isMobile ? '33vh' : '60vh'}
        url={videoUrl}
        muted={false}
        playing={false}
        loop={true}
        controls={true}
        // light
      />
    </div>
  );
};
function IntegrationsIndividualPage({ content }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollToContactUs = () => {
    document
      .getElementById('contact-us')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <Box paddingBottom={1}>
        <SimpleHeroWithCta
          title={content.hero_h1 || FillerContent.header}
          description={content.hero_description || FillerContent.description}
          primaryCta={content.hero_cta_primary_text || FillerContent.cta}
          secondaryCTA={content.hero_cta_secondary_text || FillerContent.cta}
          onClick={scrollToContactUs}
          videoUrl={content.video_link || FillerContent.videoUrl}
          videoHeader={content.video_header}
        />
      </Box>

      {/* Platform Description */}
      <Box
        marginTop={isMobile ? 20 : 45}
        paddingTop={isMobile ? 30 : 35}
        paddingBottom={isMobile ? 10 : 10}
        bgcolor={theme.palette.zesty.zestyDarkBlue}
      >
        <Container>
          <Box
            fontSize={isMobile ? 18 : 23}
            textAlign={'center'}
            color={'#fff'}
            dangerouslySetInnerHTML={{
              __html: content.integration_platform_description,
            }}
          ></Box>
        </Container>
      </Box>

      {/* Marketer Benefits*/}
      <Box bgcolor={'alternate.secondary'}>
        <Typography
          variant="p"
          component={'h2'}
          color="text.primary"
          align={'center'}
          sx={{
            fontSize: isMobile ? '25px' : '35px',
            fontWeight: 700,
            paddingTop: '5rem',
          }}
        >
          {content.feature_h2}
        </Typography>
        <HeroWithIllustrationAndSearchBar
          bgColor={theme.palette.common.white}
          titleAndDescription={
            content.feature_description_1 || FillerContent.rich_text
          }
          image={
            (content.feature_1_image?.data &&
              content.feature_1_image?.data[0].url) ||
            FillerContent.image
          }
        />
      </Box>

      {/* Marketer Benefits*/}
      <Box bgcolor={'alternate.main'}>
        <HeroWithIllustrationAndSearchBar
          titleAndDescription={
            content.feature_description_2 || FillerContent.rich_text
          }
          image={
            (content.feature_2_image?.data &&
              content.feature_2_image?.data[0].url) ||
            FillerContent.image
          }
          bgColor={'alternate.secondary'}
          rowReverse={true}
        />
        {/* <BgDecorations theme={theme} /> */}
      </Box>

      {/* Marketer Benefits*/}
      <Box bgcolor={'alternate.secondary'}>
        <HeroWithIllustrationAndSearchBar
          bgColor={theme.palette.common.white}
          titleAndDescription={
            content.feature_description_3 || FillerContent.rich_text
          }
          image={
            (content.feature_3_image?.data &&
              content.feature_3_image?.data[0].url) ||
            FillerContent.image
          }
        />
      </Box>

      {/* Developer Benefits */}
      <Box
        paddingY={15}
        sx={{
          background: theme.palette.zesty.zestyDarkBlue,
        }}
      >
        <SimpleCentered
          header={content.integration_benefits_h2 || FillerContent.header}
          cards={
            content.integration_benefits?.data || [
              FillerContent.header,
              FillerContent.header,
              FillerContent.header,
            ]
          }
        />
      </Box>

      {/* Easy to Get Started + Social Proof */}
      <WithCompanyLogo
        title={content.benefit_above_testimonial || FillerContent.header}
        header={
          content?.testimonial?.data[0].reviewer_title || FillerContent.header
        }
        logo={''}
        content={
          content?.testimonial?.data[0].review || FillerContent.rich_text
        }
      />
      {/* <Box padding={isMobile ? 0 : 8} bgcolor={'alternate.main'}>
        <NewsletterWithImage
          header={content.benefit_above_testimonial || FillerContent.header}
          image={
            (content.testimonial?.data &&
              content.testimonial?.data[0]?.reviewer_headshot) ||
            FillerContent.image
          }
          testimonial={content.testimonial?.data}
        />
      </Box> */}

      {/* Logos */}
      <Box paddingBottom={4}>
        <LogoGridSimpleCentered
          title={content.logos_title || FillerContent.header}
          imageCollection={content.logos?.data || [FillerContent.image]}
        />
      </Box>

      {/* Form */}
      <ContactUsForm theme={theme} content={content} />
    </>
  );
}

export default IntegrationsIndividualPage;

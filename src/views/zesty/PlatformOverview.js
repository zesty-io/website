/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Product Overview
 * Name: product_overview
 * Model ZUID: 6-8294d9f1a4-c1tn1n
 * File Created On: Wed Feb 23 2022 07:25:45 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8294d9f1a4-c1tn1n
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import FullScreenHeroWithPromoImagesAndTypedText from 'blocks/heroes/FullScreenHeroWithPromoImagesAndTypedText/FullScreenHeroWithPromoImagesAndTypedText.js';
import FeaturesWithCardRepresentation from 'blocks/features/FeaturesWithCardRepresentation/FeaturesWithCardRepresentation.js';
import SimpleVerticalBlogCards from 'blocks/blog/SimpleVerticalBlogCards/SimpleVerticalBlogCards';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage';
import CtaWithInputField from 'blocks/cta/CtaWithInputField/CtaWithInputField';
import FillerContent from 'components/FillerContent';
const mock = [
  {
    title: 'Your brand platform',
    description:
      'Monetize your website and manage all guest interactions with your own brand, logo and domains.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration4.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration4--dark.svg',
  },
  {
    title: 'Mobile compatible platform',
    description:
      'Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg',
  },
  {
    label: 'Client portal access',
    title: 'Simple customer dashboards',
    description:
      'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration2.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration2--dark.svg',
  },
];

const ProductOverviewComp = ({ title, description, cards }) => {
  const cardsList = cards || mock;
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Our work
          </Typography>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
            <Box
              dangerouslySetInnerHTML={{
                __html: title || FillerContent.header,
              }}
            ></Box>
          </Typography>
          <Box
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></Box>

          {/* <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            align={'center'}
          >
            Unlike teams from big agencies, we will treat your project as ours.
            We will walk you through our smooth and simple process.
          </Typography> */}
          <Box marginTop={2} display={'flex'} justifyContent={'center'}>
            {/* <Button
              color={'primary'}
              variant={'contained'}
              size={'large'}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={20}
                  height={20}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            >
              Contact us
            </Button> */}
          </Box>
        </Box>
        <Grid container spacing={4}>
          {cardsList?.map((item, i) => (
            <Grid
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              key={i}
              item
              container
              xs={12}
              spacing={4}
              direction={i % 2 === 1 ? 'row-reverse' : 'row'}
            >
              <Grid item container alignItems={'center'} xs={12} sm={6}>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.header || item.title}
                  </Typography>
                  <Typography
                    color={'text.secondary'}
                    fontWeight={400}
                    variant={'body1'}
                  ></Typography>
                  <Typography color="text.secondary">
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: item.content || item.description,
                      }}
                    />
                  </Typography>
                  {/* <Button
                    size={'large'}
                    sx={{ marginTop: 2 }}
                    endIcon={
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Learn more
                  </Button> */}
                </Box>
              </Grid>
              <Grid
                item
                container
                justifyContent={'center'}
                alignItems={'center'}
                xs={12}
                sm={6}
              >
                <Box
                  component={'img'}
                  // src={`${
                  //   theme.palette.mode === 'light'
                  //     ? item.illustration
                  //     : item.illustrationDark
                  // }`}
                  src={item.image || FillerContent.illustration_image}
                  alt={item.header || item.title}
                  width={1}
                  maxWidth={'80%'}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

function PlatformOverview({ content }) {
  const headerProps = {
    title: content?.title,
    description: content?.header_description,
    images: content?.header_image,
    cta_left:
      content?.cta_left?.data && content?.cta_left?.data[0]?.button_text,
    cta_right:
      content?.cta_right?.data && content?.cta_right?.data[0]?.button_text,
    cta_left_url:
      content?.cta_left?.data &&
      content?.cta_left?.data[0]?.internal_link?.data[0]?.meta?.web?.url,
    cta_right_url:
      content?.cta_right?.data &&
      content?.cta_right?.data[0]?.internal_link?.data[0]?.meta?.web?.url,
  };
  return (
    <>
      {/* Header */}
      <FullScreenHeroWithPromoImagesAndTypedText {...headerProps} />

      {/* Product Overview  */}
      <ProductOverviewComp
        title={content?.benefits_header}
        cards={content?.platform_overview_cards?.data}
      />

      {/* Features */}
      <FeaturesWithCardRepresentation
        description={''}
        cards={content?.features_tiles?.data}
      />

      {/* Case Study  */}
      <SimpleVerticalBlogCards
        header={content?.case_studies_header}
        cards={content?.case_studies?.data}
        cta={content?.cta.data && content?.cta?.data[0].button_text}
        cta_url={
          content?.cta.data &&
          content?.cta?.data[0].internal_link.data[0].meta.web.url
        }
      />

      {/* Link To Blog */}
      <VerticallyAlignedBlogCardsWithShapedImage
        title={'Industry insights'}
        description={
          'Stay up-to-date with the latest in digital experience, content management, and more.'
        }
      />

      {/* Final Cta  */}
      <CtaWithInputField
        title={'Subscribe to the zestiest newsletter in the industry'}
        description={
          'Get the latest from the Zesty team, from whitepapers to product updates.'
        }
        cta={'Subscribe'}
      />
      {/*<div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
                 <h2>Accessible Zesty.io JSON Object</h2>
                 <pre>{JSON.stringify(content, null, 2)}</pre>
             </div>
                     */}
    </>
  );
}

export default PlatformOverview;

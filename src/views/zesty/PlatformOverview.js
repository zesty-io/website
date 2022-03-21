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

import React, { useState, useEffect } from 'react';
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
import CircularProgressWithLabel from '@mui/material/CircularProgress';
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

const ProductOverviewComp = ({ cards, benefits_title_h2 }) => {
  const theme = useTheme();
  const cardsList = cards || mock;
  return (
    <Container>
      <Box>
        <Box
          marginBottom={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant={'h2'}
            gutterBottom
            sx={{ fontWeight: 700 }}
            align={'center'}
          >
            {benefits_title_h2}
          </Typography>
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
                    variant={'h3'}
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
                  src={
                    (item?.image?.data && item?.image?.data[0]?.url) ||
                    FillerContent.illustration_image
                  }
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
  const [isLoaded, setIsLoaded] = useState(true);
  const [allArticles, setAllArticles] = useState([]);

  let zestyURL =
    (undefined === process.env.PRODUCTION) == 'true' || process.env.PRODUCTION
      ? process.env.zesty.production
      : process.env.zesty.stage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoaded(true);
        const uri = `${zestyURL}/-/all-articles-hydrated.json?limit=3`;

        const response = await fetch(uri);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const articles = await response.json();

        setAllArticles(articles);
      };

      fetchData();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    } finally {
      setIsLoaded(false);
    }
  }, []);
  const theme = useTheme();
  const headerProps = {
    title: content?.title || FillerContent.header,
    description: content?.header_description || FillerContent.description,
    h1_title: content?.h1_title || FillerContent.header,
    images: content?.header_image?.data || FillerContent.image,
    cta_left:
      (content?.cta_left?.data && content?.cta_left?.data[0]?.button_text) ||
      FillerContent.header,
    cta_right:
      (content?.cta_right?.data && content?.cta_right?.data[0]?.button_text) ||
      FillerContent.header,
    cta_left_url:
      (content?.cta_left?.data &&
        content?.cta_left?.data[0]?.internal_link?.data[0]?.meta?.web?.url) ||
      FillerContent.header,
    cta_right_url:
      (content?.cta_right?.data &&
        content?.cta_right?.data[0]?.internal_link?.data[0]?.meta?.web?.url) ||
      FillerContent.header,
  };

  return (
    <>
      {/* Header */}
      <FullScreenHeroWithPromoImagesAndTypedText {...headerProps} />

      {/* Product Overview  */}
      <>
        <Container>
          <Box marginBottom={4}>
            <Typography variant="p" sx={{ fontWeight: 400 }} align={'center'}>
              <Box
                dangerouslySetInnerHTML={{
                  __html: content?.benefits_header || FillerContent.header,
                }}
              ></Box>
            </Typography>

            <Box marginTop={2} display={'flex'} justifyContent={'center'}></Box>
          </Box>
        </Container>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
          }}
        >
          <ProductOverviewComp
            benefits_title_h2={content?.benefits_title_h2}
            title={''}
            cards={content?.platform_overview_cards?.data}
          />
        </Box>
      </>

      {/* Features */}
      <FeaturesWithCardRepresentation
        description={content?.features_header}
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


      {/* Industry Insights > Latest Blogs articles */}

      {isLoaded ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgressWithLabel />
        </Box>
      ) : (
        <VerticallyAlignedBlogCardsWithShapedImage
          title={'Industry Insights'}
          description={
            'Stay up-to-date with the latest in digital experience, content management and more.'
          }
          popularArticles={allArticles}
          ctaBtn="Read more"
          ctaUrl={/mindshare/}
        />
      )}

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

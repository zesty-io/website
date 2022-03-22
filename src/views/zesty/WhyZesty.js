/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Why Zesty
 * Name: why_zesty
 * Model ZUID: 6-8eb7dc85be-bjf80f
 * File Created On: Wed Feb 23 2022 14:50:40 GMT+0100 (Central European Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8eb7dc85be-bjf80f
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useEffect, useState } from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FeaturesWithIllustration from 'blocks/features/FeaturesWithIllustration';
import FeaturesWithMobileScreenshot from 'blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import WithBorderedCardsAndBrandColor from 'blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor.js';
import CtaWithCoverImage from 'blocks/cta/CtaWithCoverImage/CtaWithCoverImage.js';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js';
import CtaWithInputField from 'blocks/cta/CtaWithInputField/CtaWithInputField.js';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import { Container, filledInputClasses, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

import FillerContent from 'components/FillerContent';

const OverviewProcessComp = ({ content, image }) => {
  return (
    <Container sx={{ marginBottom: '1rem', padding: '2rem' }}>
      <Grid container justify="center">
        <Box justifyContent="center" alignItems="center">
          <Typography
            variant="h5"
            alignItems={'center'}
            sx={{ textAlign: 'center' }}
            gutterBottom
          >
            <Box
              dangerouslySetInnerHTML={{
                __html: content || FillerContent.header,
              }}
            ></Box>
          </Typography>
          <Container>
            {image && (
              <Box
                component={'img'}
                src={image}
                alt={FillerContent.header}
                width={1}
                height={1}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  justifyContent: 'center',
                }}
              />
            )}
          </Container>
        </Box>
      </Grid>
    </Container>
  );
};

/* ------------------------------------------------------------------- */

function WhyZesty({ content }) {
  const theme = useTheme();
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

  let overview_text =
    undefined !== content.hybrid_vs_headless_content
      ? content.hybrid_vs_headless_content
      : 'Failed to load content.';
  let image_url =
    undefined !== content.hybrid_vs_headless_image
      ? content.hybrid_vs_headless_image
      : 'https://pzcvtc6b.media.zestyio.com/content-management.png';

  const headerProps = {
    mainTitle: content.header_title_main || FillerContent.header,
    title: content.header_title || FillerContent.header,
    image:
      (content.header_image?.data && content.header_image?.data[0]?.url) ||
      FillerContent.image,
    description: content.header_description || FillerContent.description,
    cta_left:
      (content.cta_left.data && content.cta_left?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_right:
      (content.cta_right?.data && content.cta_right?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_left_url:
      (content.cta_left?.data &&
        content.cta_left?.data[0]?.internal_link.data[0]?.meta?.web?.url) ||
      FillerContent.href,
    cta_right_url:
      (content.cta_right.data &&
        content.cta_right?.data[0]?.internal_link.data[0]?.meta?.web?.url) ||
      FillerContent.href,
  };

  return (
    <>
      {/* Header */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <SimpleHeroWithImageAndCtaButtonsPage {...headerProps} />
      </Box>

      {/* Overview of process */}
      <OverviewProcessComp
        image={
          (content.overview_of_process_image.data &&
            content.overview_of_process_image.data[0].url) ||
          ''
        }
        content={content.overview_of_process_text || FillerContent.rich_text}
      />

      {/* Benefits */}
      {content.benefits?.data?.map((e, i) => {
        return (
          <FeaturesWithMobileScreenshot
            index={i}
            content={e.benefit_content || FillerContent.rich_text}
            header={e.header || FillerContent.header}
            image={
              (e.benefit_image?.data && e.benefit_image?.data[0]?.url) ||
              FillerContent.image
            }
          />
        );
      })}

      {/* HYBRID VS HEADLESS */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <FeaturesWithIllustration
          wysiwyig_type="icon-box"
          rich_text={overview_text}
          image_url={image_url}
        />
      </Box>

      {/* PROOF POINTS */}
      <WithBorderedCardsAndBrandColor
        cards={content.proof_points.data || FillerContent.emptyList}
        content={content.proof_points_content || FillerContent.rich_text}
      />

      {/* CASE STUDY */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginBottom: '4rem',
        }}
      >
        {content.case_study?.data?.map((e) => (
          <CtaWithCoverImage
            key={e.title || FillerContent.header}
            title={e.title || FillerContent.header}
            summary={e.summary || FillerContent.description}
            cta={e.cta || FillerContent.cta}
            cta_url={e.link || FillerContent.href}
            image={
              (e.image?.data && e.image?.data[0].url) || FillerContent.image
            }
          />
        ))}
      </Box>

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

      {/* FINAL CTA */}
      <CtaWithInputField
        title={'Subscribe to the zestiest newsletter in the industry'}
        description={
          'Get the latest from the Zesty team, from whitepapers to product updates.'
        }
        cta={'Subscribe'}
      />
    </>
  );
}

export default WhyZesty;

/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Mindshare
 * Name: mindshare
 * Model ZUID: 6-2346b0-2t7vcn
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * description (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-2346b0-2t7vcn
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/FillerContent';

import Container from 'components/Container';

import HeroWithBackgroundAndFullSearchBar from 'blocks/heroes/HeroWithBackgroundAndFullSearchBar/';
import HorizontallyAlignedBlogCardWithShapedImage from 'blocks/blog/HorizontallyAlignedBlogCardWithShapedImage';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage';
import BlogCardsWithFullBackgroundImage from 'blocks/blog/BlogCardsWithFullBackgroundImage';
import PopularArticles from 'blocks/blog/popularArticles/PopularArticles';
import Newsletter from 'blocks/newsletters/Newsletter';

function Mindshare({ content }) {
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
        const uri = `${zestyURL}/-/all-articles-hydrated.json?limit=140`;

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

  const chipsTitle = content.popular_categories
    ? Object.keys(content.popular_categories.data).map(
        (item) => content?.popular_categories?.data[item]?.category,
      )
    : FillerContent.missingDataArray;

  const onSearchHandler = (evt, value) => {
    if (!value) return;
    window.open(value.uri);
  };

  return (
    <>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <HeroWithBackgroundAndFullSearchBar
          image={content.hero_image?.data[0]?.url || FillerContent.image}
          title={content.title || FillerContent.header}
          subTitle={content.subtitle || FillerContent.description}
        />

        <Container>
          {/* Search Filter */}
          {/* <Autocomplete
            sx={{
              borderRadius: 1,
              marginTop: '-9rem',
              position: 'relative',
              zIndex: 3,
              paddingY: '0 !important',
              backgroundColor: theme.palette.background.paper,
            }}
            onChange={onSearchHandler}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={allArticles}
            getOptionLabel={(option) => {
              return option.title;
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Articles" />
            )}
          /> */}
          {/* Popular_categories */}
          <Box>
            {chipsTitle.map((item) => (
              <Chip
                key={item}
                label={item}
                component="a"
                href={`/mindshare/${item.toLowerCase().replace(/\s/g, '-')}`}
                clickable
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </Container>
        {/* Featured Articles */}
        <HorizontallyAlignedBlogCardWithShapedImage
          featuredLink={
            content.featured_article.data[0]?.meta?.web?.uri ||
            FillerContent.href
          }
          featuredImage={
            content.featured_article.data[0]?.hero_image?.data[0]?.url ||
            FillerContent.image
          }
          featuredTitle={
            content.featured_article?.data[0]?.title || FillerContent.header
          }
          featuredDescription={
            content.featured_article?.data[0]?.description ||
            FillerContent.description
          }
          featureAvatar={
            content.featured_article?.data[0]?.author?.data[0].headshot?.data[0]
              .url || FillerContent.image
          }
          featureName={
            content.featured_article?.data[0]?.author?.data[0]?.name ||
            FillerContent.image
          }
          featuredAuthorLink={
            content.featured_article?.data[0].author?.data[0].meta.web.uri ||
            FillerContent.href
          }
          featuredDate={
            content?.featured_article?.data[0]?.date || FillerContent.date
          }
        />

        {/*  Top Insights */}
        <VerticallyAlignedBlogCardsWithShapedImage
          title={content.top_articles_title || FillerContent.header}
          description={
            content.top_articles_description || FillerContent.description
          }
          popularArticles={
            content.popular_articles.data || FillerContent.missingDataArray
          }
        />

        {/* Case Studies */}
        <BlogCardsWithFullBackgroundImage
          title={content.case_studies_title || FillerContent.header}
          description={
            content.case_studies_description || FillerContent.description
          }
          caseStudy={
            content?.case_studies?.data || FillerContent.missingDataArray
          }
        />

        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }} >
          <Container paddingTop={'0 !important'} >
            {/*  Latest Articles W/PAGINATION */}
            {isLoaded ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgressWithLabel />
              </Box>
            ) : (
              <PopularArticles
                title={
                  content.additional_insights_title || FillerContent.header
                }
                description={
                  content.additional_insights_description ||
                  FillerContent.description
                }

                articles={allArticles}
              />
            )}
          </Container>
        </Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        {/* CTA */}
        <Newsletter
          title={content.cta_title}
          description={content.cta_description}
          ctaBtn={content.cta_link}
        />
      </Container>


    </>
  );
}

export default Mindshare;

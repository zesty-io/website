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
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [authors, setAuthors] = useState([]);

  //Search Filter
  const [value, setValue] = useState(null);



  useEffect(() => {
    try {
      const fetchData = async () => {
        const uri = `${zestyURL}/-/gql/articles.json`;

        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const articles = await response.json();

        const authorZUID = articles.map((article) => article.author);

        const dedupeAuthorZUID = [...new Set(authorZUID)];

        const getAuthors = dedupeAuthorZUID.map(async (getaAuthor) => {
          const authorResponse = await fetch(
            `${zestyURL}/-/instant/${getaAuthor}.json`,
          );

          const authorsInfo = await authorResponse.json();

          let authorData = {
            authorImage: authorsInfo.data[0].content.headshot.data[0].url,
            authorName: authorsInfo.data[0].content.name,
            authorZUID: authorsInfo.data[0].content.zuid.data[0].zuid,
          };

          return authorData;
        });

        const latestArticles = articles;

        setIsLoaded(true);
        setAllArticles(latestArticles);
        Promise.all(getAuthors).then((author) => setAuthors(author));
      };

      fetchData();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  }, []);

  const chipsTitle = content.popular_categories
    ? Object.keys(content.popular_categories.data).map(
        (item) => content.popular_categories.data[item]?.category,
      )
    : FillerContent.missingDataArray;

  let zestyURL =
    undefined === process.env.PRODUCTION || process.env.PRODUCTION == 'true'
      ? process.env.zesty.production
      : process.env.zesty.stage;

  const onSearchHandler = (evt, value) => {
    if (!value) return;
    window.open(value.uri);
  };

  return (
    <>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <HeroWithBackgroundAndFullSearchBar
          image={content.hero_image?.data[0].url}
          title={content.title}
          subTitle={content.subtitle}
        />

        <Container>
          {/* Search Filter */}
          <Autocomplete
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
            chipsTitle={chipsTitle}
          />
          {/* Popular_categories */}
          <Box paddingTop={4}>
            {chipsTitle.map((item) => (
              <Chip
                key={item}
                label={item}
                component="a"
                href=""
                clickable
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </Container>
        {/* Featured Articles */}
        <HorizontallyAlignedBlogCardWithShapedImage
          featured={content.featured_article.data[0]}
        />

        {/* Popular Articles */}
        <VerticallyAlignedBlogCardsWithShapedImage
          title={content.top_articles_title}
          description={content.top_articles_description}
          ctaBtn={content.top_article_cta}
          popularArticles={
            content.popular_articles.data || FillerContent.missingDataArray
          }
        />

        {/* Case Studies */}
        <BlogCardsWithFullBackgroundImage
          title={content.case_studies_title}
          description={content.case_studies_description}
          ctaBtn={content.case_studies_cta}
          caseStudy={content.case_studies.data}
        />

        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
          <Container paddingTop={'0 !important'}>
            {/*  Fetch ALL ARTICLES W/PAGINATIONS */}
            <PopularArticles
              title={content.additional_insights_title}
              description={content.additional_insights_description}
              ctaBtn={content.additional_insights_cta}
              articles={allArticles}
              authors={authors}
            />
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

      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Mindshare;

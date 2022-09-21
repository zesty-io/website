/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Category
 * Name: category
 * Model ZUID: 6-2ab5d0-tmzw9s
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * category (text)
 * sort_order (sort)
 * description (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-2ab5d0-tmzw9s
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React, { useEffect, useState } from 'react';

import { FullScreenHeroWithImageSlider, SlashImageHero } from 'blocks/heroes';
import { Breadcrumb } from 'blocks/progressSteps';
import { Result } from 'blocks/formLayouts';
import { CtaWithInputField } from 'blocks/cta';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';
// filler content
import FillerContent from 'components/globals/FillerContent';

import Container from 'components/Container';
import { Typography } from '@mui/material';

function Category({ content }) {
  const theme = useTheme();
  let zestyURL = content.zestyProductionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;

  // news array state
  const [categoryArr, setCategoryArr] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  // search states
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [term, setTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [hideLoad, setHideLoad] = useState(false);
  // current page for pagination
  const [page, setPage] = useState(0);
  const [breadcrumb, setBreadcrumb] = useState([
    {
      href: `/mindshare/`,
      title: `Blog`,
      isActive: false,
    },
    {
      href: `${content.path}`,
      title: content.category,
      isActive: true,
    },
  ]);

  // use effect pull in news articles
  useEffect(() => {
    try {
      const fetchNews = async () => {
        const url = `${zestyURL}/-/articlesbycategory.json?category=${content.meta.zuid}&page=${page}&limit=6`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const news = await response.json();
        setHideLoad(false);
        setCategoryArr(news);
        setAllArticles(news);
      };

      fetchNews();
    } catch (err) {
      console.error(`Could Not Find Results: ${error}`);
    }
  }, []);

  // search value
  const handleOnChange = (evt) => {
    evt.preventDefault();
    // handle empty search value
    if (evt.target.value === null || evt.target.value === '') {
      setCategoryArr(allArticles);
      setPage(0);
      setNotFound(false);
      setHideLoad(false);
    }
    setSearchValue(evt.target.value);
  };
  // form submission
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    try {
      const searchArticles = async () => {
        const url = `${zestyURL}/-/searchnewsarticles.json?q=${searchValue}&category=${content.meta.zuid}&page=${page}&limit=6`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const searchData = await response.json();
        if (!searchData.length) {
          setNotFound(true);
          setCategoryArr([]);
          setTerm(searchValue);
          return;
        }
        setHideLoad(true);
        setNotFound(false);
        setCategoryArr(searchData);
      };
      searchArticles();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  };
  // load more on click
  const handleOnClick = async () => {
    try {
      setPage((page += 6));
      const url = `${zestyURL}/-/articlesbycategory.json?category=${content.meta.zuid}&page=${page}&limit=6`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.length) {
        // add conditional rendering to hide the load more button
        setHideLoad(true);
      }
      setCategoryArr([...categoryArr, ...data]);
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  };

  return (
    <>
      {/* hero */}
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
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
        <Box position={'relative'} zIndex={3}>
          <SlashImageHero
            title={content.category || FillerContent.header}
            description={content.description || FillerContent.description}
            image={
              content.header_image?.data[0]?.url ||
              FillerContent.category_fallback_image
            }
          />
        </Box>
      </Box>
      {/* search and articles */}
      <Container paddingY={{ xs: 1, sm: 2, md: 4 }}>
        <Box sx={{ marginBottom: '16px' }}>
          <Breadcrumb array={breadcrumb || FillerContent.breadcrumb} />
        </Box>
        <Result
          array={categoryArr}
          onChange={handleOnChange}
          value={searchValue}
          term={term}
          onSubmit={handleOnSubmit}
          notFound={notFound}
          onClick={handleOnClick}
          hideLoad={hideLoad}
        />
      </Container>
      {/* cta */}
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <CtaWithInputField
            title={'Subscribe to the zestiest newsletter in the industry'}
            description={
              'Get the latest from the Zesty team, from whitepapers to product updates.'
            }
            cta={'Subscribe'}
          />
        </Container>
      </Box>
    </>
  );
}

export default Category;

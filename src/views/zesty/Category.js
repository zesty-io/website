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

import { SimpleHeroWithSingleCta } from 'blocks/heroes';
import VerticalMinimalDesignedBlogCardsPage from 'blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards';
import { Breadcrumb } from 'blocks/progressSteps';
import { Result } from 'blocks/formLayouts';
import { Newsletter } from 'blocks/newsletters';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// filler content
import FillerContent from 'components/FillerContent';

import Container from 'components/Container';
import { Typography } from '@mui/material';

function Category({ content }) {
  const theme = useTheme();

  // news array state
  const [newsArr, setNewsArr] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [searchedArticles, setSearchedArticles] = useState([])
  const [searchValue, setSearchValue] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState([
    {
      href: '/news',
      title: 'News',
      isActive: false,
    },
    {
      href: '/news',
      title: 'Search Results',
      isActive: true,
    },
  ]);

  // use effect pull in news articles
  useEffect(() => {
    try {
      const fetchNews = async () =>{
        const url = `${zestyURL}/-/allnewsarticles.json`;
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`HTTP error: ${response.status}`);
        }
        const news = await response.json();
        console.log(news);
        setNewsArr(news);
        setAllArticles(news);
      }

      fetchNews();

    } catch(err){
      console.error(`Could Not Find Results: ${error}`);
    }
  }, []);

  
  let zestyURL =
    undefined === process.env.PRODUCTION || process.env.PRODUCTION == 'true'
      ? process.env.zesty.production
      : process.env.zesty.stage;
  // search value 
  const handleOnChange = (evt) => {
    console.log(evt.target.value);
    setSearchValue(evt.target.value);
  }
  // form submission
  const handleOnSubmit = (evt) =>{
    evt.preventDefault();
    console.log(evt);
    try{
      const searchArticles = async () => {
        console.log(searchValue);
        const url = `${zestyURL}/-/searchnewsarticles.json?q=${searchValue}`;
        console.log(url);
        const response = await fetch(url);
        console.log(response);
        if(!response.ok){
          throw new Error(`HTTP error: ${response.status}`);
        }
        const searchData = await response.json();
        console.log(searchData);
        if(!searchData.length){
          console.log('need conditional rendering');
          setNotFound(true);
          return;
        }
        // set news articles
        setNewsArr(searchData);
        // empty input
        setSearchValue('');

      }
      searchArticles();
    } catch (error){
      console.error(`Could Not Find Results: ${error}`);
    }
  };



  return (
    <>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={2}>
          <Breadcrumb
          array={breadcrumb || FillerContent.breadcrumb} />
        </Container>
      </Box>
      <Container>
        <SimpleHeroWithSingleCta
          title={content.category || FillerContent.header}
          description={content.description || FillerContent.description}
          cta={content.cta_button || FillerContent.cta}
          ctaHref={content.cta_href.data[0]?.meta.web.uri || FillerContent.href}
        />
      {/* </Container>
      <Container> */}
        <Result array={newsArr}
        onChange={handleOnChange}
        value={searchValue}
        onSubmit={handleOnSubmit}
        notFound={notFound} /> 
      </Container>
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
          <Newsletter />
        </Container>
      </Box>

      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div> */}
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
      </div>
    </>
  );
}

export default Category;

/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Homepage 
 * Name: homepage 
 * Model ZUID: 6-31079c-vdg69q
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * content (wysiwyg_advanced)
 * image (images)
 * customer_logo_heading (text)
 * main_headline (text)
 * main_description (wysiwyg_advanced)
 * og_image (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-31079c-vdg69q
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';
import HeroWithIllustrationAndCta from 'blocks/heroes/HeroWithIllustrationAndCta/HeroWithIllustrationAndCta';
import WithSwiperAndBrandBackgroundColor from 'blocks/logoGrid/WithSwiperAndBrandBackgroundColor';
import FeaturesWithIllustration from 'blocks/features/FeaturesWithIllustration';
import WithOverlappedCards from 'blocks/team/WithOverlappedCards';
import ReviewsWithSimpleBoxes from 'blocks/testimonials/ReviewsWithSimpleBoxes';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage';
import CtaWithInputField from 'blocks/cta/CtaWithInputField';
import FillerContent from 'components/FillerContent';
import { Button, Grid } from '@mui/material';
//import { BasicModal } from 'components/ZestyExplorer';

let zestyURL =
  (undefined === process.env.PRODUCTION) == 'true' || process.env.PRODUCTION
    ? process.env.zesty.production
    : process.env.zesty.stage;

const getCardData = async (setcardData) => {
  const uri = `${zestyURL}/?toJSON`;
  const res = await fetch(uri).then((response) => response.json());
  res && (await setcardData(res.featured_case_studies.data));
};
const getReviewsData = async (setReviewsData) => {
  const uri = `${zestyURL}/-/reviews.json`;
  const res = await fetch(uri).then((response) => response.json());
  res && (await setReviewsData(res));
};
function Homepage({ content }) {
  const theme = useTheme();
  const [modal, setModal] = React.useState(false);
  const [cardData, setcardData] = React.useState();
  const [reviewsData, setReviewsData] = React.useState();
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [allArticles, setAllArticles] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  React.useEffect(() => {
    getCardData(setcardData);
    getReviewsData(setReviewsData);
    // latest articles
    try {
        const fetchData = async () => {
          const uri = `${zestyURL}/-/allarticles.json?limit=3`;
  
          const response = await fetch(uri);
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
  
          const articles = await response.json();
          setIsLoaded(true);
          setAllArticles(articles);
        };
  
        fetchData();
      } catch (error) {
        console.error(`Could Not Find Results: ${error}`);
      }
  }, []);
  let image_url = content?.zesty_benefits_image
    ? content.zesty_benefits_image.data[0].url
    : 'https://pzcvtc6b.media.zestyio.com/content-management.png';
  const heroProps = {
    title: content.title,
    subtitle: content.simple_intro_text,
    image: content.main_image.data[0].url || FillerContent.image,
    button_left_text: content.hero_button_left || FillerContent.header,

    button_left_link:
      content.hero_hero_button_left_link?.data[0]?.url || FillerContent.header,
    button_right_text: content.hero_button_left || FillerContent.header,
    button_right_link:
      content.hero_hero_button_left_link?.data[0]?.url || FillerContent.header,
  };
  
  return (
      
    <>
     {/*
     {modal && (
        <BasicModal content={content} onClose={() => setModal(false)} />
      )}
      */}
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <HeroWithIllustrationAndCta {...heroProps} />
      <WithSwiperAndBrandBackgroundColor logos={content.homepage_logos?.data} />
      <FeaturesWithIllustration
        rich_text={content.zesty_benefits}
        image_url={image_url}
      />
      <Box bgcolor={'alternate.main'}>
        <WithOverlappedCards list={cardData || []} />
        <ReviewsWithSimpleBoxes
          header={content.testimonials_content}
          list={content.testimonials.data || []}
        />
      </Box>
      {/* Latest Articles */}
      <VerticallyAlignedBlogCardsWithShapedImage
      ctaBtn={'View More' || FillerContent.cta}
        popularArticles={allArticles || FillerContent.missingDataArray}
        />
      <CtaWithInputField />
      <Grid container marginBottom={4} justifyContent="center">
        <Button
          onClick={() => {
            setModal(!modal);
          }}
          variant="outlined"
        >
          View Page Data
        </Button>
      </Grid>
      {/*<div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px', whiteSpace: 'pre-wrap', overflow: 'hidden'}}>
                 <h2>Accessible Zesty.io JSON Object</h2>
                 <pre>{JSON.stringify(content, null, 2)}</pre>
             </div>
             {/* End of Zesty.io output example */}
    </>
  );
}

export default Homepage;

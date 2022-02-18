import FullScreenHeroWithImageSliderPage from '../../pages/blocks/heroes/full-screen-hero-with-image-slider.js'
function About({content}) {
  return (
    <>
      <FullScreenHeroWithImageSliderPage></FullScreenHeroWithImageSliderPage>
      <h2 dangerouslySetInnerHTML={{__html:content.title}}></h2>
      <div dangerouslySetInnerHTML={{__html:content.content}}></div>
    </>
  );
};

export default About;

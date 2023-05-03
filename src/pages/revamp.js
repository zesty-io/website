import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import Hero from 'revamp/ui/Hero';
import BlackHero from 'revamp/ui/BlackHero';
import Stats from 'revamp/ui/Stats';
import SingleTestimonial from 'revamp/ui/SingleTestimonial';
import TabsSection from 'revamp/ui/TabsSection';
import GridFeature from 'revamp/ui/GridFeature';
import FeatureTwoCTA from 'revamp/ui/FeatureTwoCTA';
import FeatureStatistics from 'revamp/ui/FeatureStatistics';
import FeatureTestimonial from 'revamp/ui/FeatureTestimonial';
import EnterpriseGrowth from 'revamp/ui/EnterpriseGrowth';
import LightHero from 'revamp/ui/LightHero';
import FeatureBulletWithTestimonials from 'revamp/ui/FeatureBulletWithTestimonials';
import CaseStudyHero from 'revamp/ui/CaseStudyHero';
import BlogHero from 'revamp/ui/BlogHero';
import revampTheme from 'theme/revampTheme';
import HomePage from 'revamp/ui/HomePage';
import HomePage2 from 'revamp/ui/HomePage2';
import BlogPage from 'revamp/ui/BlogPage';
import SecurityFeature from 'revamp/ui/SecurityFeature';
import AuthorSection from 'revamp/ui/AuthorSection';
import BlogCard from 'revamp/ui/BlogCard';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import HeroForm from 'revamp/ui/HeroForm';
import BlogPageHeader from 'revamp/ui/BlogPageHeader';
import ContentSectionOnlyText from 'revamp/ui/ContentSectionOnlyText';
import FeatureSectionTopTextBottomImage from 'revamp/ui/FeatureSectionTopTextBottomImage';
import HeroTextImageWithStatsBelow from 'revamp/ui/HeroTextImageWithStatsBelow';
import Grid3Testimonials from 'revamp/ui/Grid3Testimonials';
import GridFeatureList from 'revamp/ui/GridFeatureList';
import GridCompetitorListing from 'revamp/ui/GridCompetitorListing';
import ImageTransition from 'revamp/ui/ImageTransition';

const components = [
  'Hero | Stacked | Light',
  'Hero | Side by Side',
  'Hero | Stacked | Dark',
  'Hero | Case Study',
  'Hero | Blog',
  'Hero | With Form',
  'Hero | Text Left Image Right with Stats Below',

  'Stats | Side by Side',
  'Single Testimonial',

  'Feature Section | Tabs',
  'Feature Section | 3 Column Grid',

  'Feature Section | Left Text Right Image | Two CTA',
  'Feature Section | Left Image Right Text | Two CTA',

  'Feature Section | Left Text Right Image | No CTA',
  'Feature Section | Left Image Right Text | No CTA',

  'Feature Section | Left Text Right Image | with Statistic',
  'Feature Section | Left Image Right Text | with Statistic',

  'Feature Section | Left Text Right Image | with Testimonial',
  'Feature Section | Left Image Right Text | with Testimonial',

  'Feature Section | Left Text Right Image | with Bullet Points and Testimonial',
  'Feature Section | Left Image Right Text | with Bullet Points and Testimonial',

  'Enterprise Growth Section',

  'Home Page',
  'Home Page 2',
  'Content Section | Rich Text',
  'Security Feature',
  'Content Section | Author and Tags',
  'Blog Card',
  'Big Blog Card',
  'Get Demo Section | Long Form',
  'Get Demo Section | Short Form',
  'Blog Page Header',
  'Content Section | Only Text',
  'Feature Section | Top Text Bottom Image',
  'Grid | 3 Testimonials',
  'Grid | Feature List without Image | Light',
  'Grid | Feature List without Image | Dark',
  'Grid | Feature List with Image | Light',
  'Grid | Feature List with Image | Dark',
  'Grid | Competitor Listing',
  'Image Transition',
];

const revamp = () => {
  const [component, setComponent] = useState('');

  const renderComponent = () => {
    // Hero
    if (component === 'Hero | Stacked | Light') return <LightHero />;
    if (component === 'Hero | Side by Side') return <Hero />;
    if (component === 'Hero | Stacked | Dark') return <BlackHero />;
    if (component === 'Hero | Case Study') return <CaseStudyHero />;
    if (component === 'Hero | Blog') return <BlogHero />;
    if (component === 'Hero | With Form') return <HeroForm />;
    if (component === 'Hero | Text Left Image Right with Stats Below')
      return <HeroTextImageWithStatsBelow />;

    if (component === 'Stats | Side by Side') return <Stats />;
    if (component === 'Single Testimonial') return <SingleTestimonial />;

    // FEATURES
    if (component === 'Feature Section | Tabs') return <TabsSection />;
    if (component === 'Feature Section | 3 Column Grid') return <GridFeature />;

    if (component === 'Feature Section | Left Text Right Image | Two CTA')
      return <FeatureTwoCTA />;
    if (component === 'Feature Section | Left Image Right Text | Two CTA')
      return <FeatureTwoCTA isImageRight={false} />;

    if (component === 'Feature Section | Left Text Right Image | No CTA')
      return <FeatureTwoCTA hasCTA={false} />;
    if (component === 'Feature Section | Left Image Right Text | No CTA')
      return <FeatureTwoCTA isImageRight={false} hasCTA={false} />;

    if (
      component === 'Feature Section | Left Text Right Image | with Statistic'
    )
      return <FeatureStatistics />;
    if (
      component === 'Feature Section | Left Image Right Text | with Statistic'
    )
      return <FeatureStatistics isImageRight={false} />;

    if (
      component === 'Feature Section | Left Text Right Image | with Testimonial'
    )
      return <FeatureTestimonial />;
    if (
      component === 'Feature Section | Left Image Right Text | with Testimonial'
    )
      return <FeatureTestimonial isImageRight={false} />;

    if (
      component ===
      'Feature Section | Left Text Right Image | with Bullet Points and Testimonial'
    )
      return <FeatureBulletWithTestimonials />;
    if (
      component ===
      'Feature Section | Left Image Right Text | with Bullet Points and Testimonial'
    )
      return <FeatureBulletWithTestimonials isImageRight={false} />;

    if (component === 'Enterprise Growth Section') return <EnterpriseGrowth />;

    if (component === 'Home Page') return <HomePage />;
    if (component === 'Home Page 2') return <HomePage2 />;
    if (component === 'Content Section | Rich Text') return <BlogPage />;
    if (component === 'Security Feature') return <SecurityFeature />;
    if (component === 'Content Section | Author and Tags')
      return <AuthorSection />;
    if (component === 'Blog Card') return <BlogCard />;
    if (component === 'Big Blog Card') return <BlogCard isBig />;
    if (component === 'Get Demo Section | Long Form') return <GetDemoSection />;
    if (component === 'Get Demo Section | Short Form')
      return <GetDemoSection isLong={false} />;
    if (component === 'Blog Page Header') return <BlogPageHeader />;
    if (component === 'Content Section | Only Text')
      return <ContentSectionOnlyText />;
    if (component === 'Feature Section | Top Text Bottom Image')
      return <FeatureSectionTopTextBottomImage />;
    if (component === 'Grid | 3 Testimonials') return <Grid3Testimonials />;

    if (component === 'Grid | Feature List without Image | Light')
      return <GridFeatureList />;
    if (component === 'Grid | Feature List without Image | Dark')
      return <GridFeatureList isDark />;

    if (component === 'Grid | Feature List with Image | Light')
      return <GridFeatureList hasImage />;
    if (component === 'Grid | Feature List with Image | Dark')
      return <GridFeatureList isDark hasImage />;
    if (component === 'Grid | Competitor Listing')
      return <GridCompetitorListing />;
    if (component === 'Image Transition') return <ImageTransition />;

    return 'Please select a component';
  };

  const { palette } = useTheme();

  return (
    <ThemeProvider theme={() => revampTheme(palette.mode)}>
      {renderComponent()}

      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel>Component</InputLabel>
        <Select
          value={component}
          label="Component"
          onChange={(e) => setComponent(e.target.value)}
        >
          {components.map((c, index) => (
            <MenuItem value={c} key={index}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default revamp;

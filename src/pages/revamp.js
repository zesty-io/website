import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import revampTheme from 'theme/revampTheme';

const Hero = dynamic(() => import('revamp/ui/Hero'));
const BlackHero = dynamic(() => import('revamp/ui/BlackHero'));
const Stats = dynamic(() => import('revamp/ui/Stats'));
const SingleTestimonial = dynamic(() => import('revamp/ui/SingleTestimonial'));
const TabsSection = dynamic(() => import('revamp/ui/TabsSection'));
const GridFeature = dynamic(() => import('revamp/ui/GridFeature'));
const FeatureTwoCTA = dynamic(() => import('revamp/ui/FeatureTwoCTA'));
const FeatureStatistics = dynamic(() => import('revamp/ui/FeatureStatistics'));
const FeatureTestimonial = dynamic(() =>
  import('revamp/ui/FeatureTestimonial'),
);
const EnterpriseGrowth = dynamic(() => import('revamp/ui/EnterpriseGrowth'));
const LightHero = dynamic(() => import('revamp/ui/LightHero'));
const FeatureBulletWithTestimonials = dynamic(() =>
  import('revamp/ui/FeatureBulletWithTestimonials'),
);
const CaseStudyHero = dynamic(() => import('revamp/ui/CaseStudyHero'));
const BlogHero = dynamic(() => import('revamp/ui/BlogHero'));
const HomePage = dynamic(() => import('revamp/ui/HomePage'));
const HomePage2 = dynamic(() => import('revamp/ui/HomePage2'));
const BlogPage = dynamic(() => import('revamp/ui/BlogPage'));
const SecurityFeature = dynamic(() => import('revamp/ui/SecurityFeature'));
const AuthorSection = dynamic(() => import('revamp/ui/AuthorSection'));
const BlogCard = dynamic(() => import('revamp/ui/BlogCard'));
const GetDemoSection = dynamic(() => import('revamp/ui/GetDemoSection'));
const HeroForm = dynamic(() => import('revamp/ui/HeroForm'));
const BlogPageHeader = dynamic(() => import('revamp/ui/BlogPageHeader'));
const ContentSectionOnlyText = dynamic(() =>
  import('revamp/ui/ContentSectionOnlyText'),
);
const FeatureSectionTopTextBottomImage = dynamic(() =>
  import('revamp/ui/FeatureSectionTopTextBottomImage'),
);
const HeroTextImageWithStatsBelow = dynamic(() =>
  import('revamp/ui/HeroTextImageWithStatsBelow'),
);
const Grid3Testimonials = dynamic(() => import('revamp/ui/Grid3Testimonials'));
const GridFeatureList = dynamic(() => import('revamp/ui/GridFeatureList'));
const GridCompetitorListing = dynamic(() =>
  import('revamp/ui/GridCompetitorListing'),
);
const ImageTransition = dynamic(() => import('revamp/ui/ImageTransition'));
const MediaPage = dynamic(() => import('revamp/ui/MediaPage'));
const CustomIFrame = dynamic(() => import('revamp/ui/CustomIFrame'));

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
  'Media Page',
  'Schedule a Meeting Booking Widget',
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
    if (component === 'Media Page') return <MediaPage />;
    if (component === 'Schedule a Meeting Booking Widget')
      return <CustomIFrame />;

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

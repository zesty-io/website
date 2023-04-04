import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
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
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import DemoForm from 'components/cta/DemoForm';

const components = [
  'Hero',
  'Black Hero',
  'Stats',
  'Single Testimonial',
  'Tabs Section',
  'Grid Feature',
  'Feature Two CTA',
  'Feature Statistics',
  'Feature Testimonial',
  'Enterprise Growth',
  'Feature Bullet Points with Testimonial',
  'Light Hero',
  'Case Study Hero',
  'Blog Hero',
  'Home Page',
  'Home Page 2',
  'Blog Page',
  'Security Feature',
  'StandardFormWithSelect',
  'StandardFormWithSelectNoSelect',
  'DemoForm',
];
const revamp = () => {
  const [component, setComponent] = useState('');

  const renderComponent = () => {
    if (component === 'Hero') return <Hero />;
    if (component === 'Black Hero') return <BlackHero />;
    if (component === 'Stats') return <Stats />;
    if (component === 'Single Testimonial') return <SingleTestimonial />;
    if (component === 'Tabs Section') return <TabsSection />;
    if (component === 'Grid Feature') return <GridFeature />;
    if (component === 'Feature Two CTA') return <FeatureTwoCTA />;
    if (component === 'Feature Statistics') return <FeatureStatistics />;
    if (component === 'Feature Testimonial') return <FeatureTestimonial />;
    if (component === 'Enterprise Growth') return <EnterpriseGrowth />;
    if (component === 'Feature Bullet Points with Testimonial')
      return <FeatureBulletWithTestimonials />;
    if (component === 'Light Hero') return <LightHero />;
    if (component === 'Case Study Hero') return <CaseStudyHero />;
    if (component === 'Blog Hero') return <BlogHero />;
    if (component === 'Home Page') return <HomePage />;
    if (component === 'Home Page 2') return <HomePage2 />;
    if (component === 'Blog Page') return <BlogPage />;
    if (component === 'Security Feature') return <SecurityFeature />;
    if (component === 'StandardFormWithSelect')
      return <StandardFormWithSelect />;
    if (component === 'StandardFormWithSelectNoSelect')
      return <StandardFormWithSelect hideSelect={true} />;
    if (component === 'DemoForm') return <DemoForm />;

    return 'Please select a component';
  };

  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      {renderComponent()}

      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel>Component</InputLabel>
        <Select
          value={component}
          label="Component"
          onChange={(e) => setComponent(e.target.value)}
        >
          {components.map((c, index) => (
            <MenuItem key={index} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default revamp;

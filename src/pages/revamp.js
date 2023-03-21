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
import revampTheme from 'theme/revampTheme';

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

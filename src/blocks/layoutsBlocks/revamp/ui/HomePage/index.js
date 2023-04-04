import { Stack } from '@mui/material';
import React from 'react';
import EnterpriseGrowth from '../EnterpriseGrowth';
import FeatureBulletWithTestimonials from '../FeatureBulletWithTestimonials';
import GridFeature from '../GridFeature';
import Hero from '../Hero';
import SingleTestimonial from '../SingleTestimonial';
import Stats from '../Stats';
import TabsSection from '../TabsSection';

const HomePage = () => {
  return (
    <Stack>
      <Hero />
      <TabsSection />
      <GridFeature />
      <SingleTestimonial />
      <Stats />
      <EnterpriseGrowth />
      <FeatureBulletWithTestimonials />
    </Stack>
  );
};

export default HomePage;

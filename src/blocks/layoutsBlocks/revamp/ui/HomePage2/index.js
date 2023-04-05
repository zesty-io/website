import { Stack } from '@mui/material';
import React from 'react';
import BlackHero from '../BlackHero';
import EnterpriseGrowth from '../EnterpriseGrowth';
import FeatureBulletWithTestimonials from '../FeatureBulletWithTestimonials';
import GridFeature from '../GridFeature';
import SingleTestimonial from '../SingleTestimonial';
import Stats from '../Stats';
import TabsSection from '../TabsSection';

const HomePage2 = () => {
  return (
    <Stack>
      <BlackHero />
      <TabsSection />
      <GridFeature />
      <SingleTestimonial />
      <Stats />
      <EnterpriseGrowth />
      <FeatureBulletWithTestimonials />
    </Stack>
  );
};

export default HomePage2;

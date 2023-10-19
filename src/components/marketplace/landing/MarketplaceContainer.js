/**
 * Components Imports
 */
import FeaturedApps from './FeaturedApps';
import MainApps from './MainApps';

const MarketplaceContainer = ({ featured_entities }) => {
  return (
    <>
      <FeaturedApps featuredApps={featured_entities} />
      <MainApps />
    </>
  );
};

export default MarketplaceContainer;

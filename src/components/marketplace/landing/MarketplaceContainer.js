/**
 * Components Imports
 */
import FeaturedApps from './FeaturedApps';
import MainApps from './MainApps';
import Filters from './Filters';

/**
 * MUI Imports
 */
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * React Imports
 */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MarketplaceContainer = ({
  title,
  description,
  features_logos,
  hero_image,
  hero_image_mobile,
  marketEntityTypes,
  marketTags,
  marketEntities,
}) => {
  const router = useRouter();
  const [isMarketplace, setIsMarketplace] = useState(true);

  console.log(router.asPath);

  useEffect(() => {
    router.asPath === '/marketplace/'
      ? setIsMarketplace(true)
      : setIsMarketplace(false);
  }, []);

  console.log(isMarketplace);

  return (
    <>
      <FeaturedApps />
      <Grid container>
        <Grid item sm={12} md={isMarketplace ? 12 : 4}>
          {!isMarketplace ? (
            <Filters
              marketEntities={marketEntities}
              marketTags={marketTags}
              marketEntityTypes={marketEntityTypes}
            />
          ) : null}
        </Grid>
        <Grid item sm={12} md={isMarketplace ? 12 : 8}>
          <MainApps />
        </Grid>
      </Grid>
    </>
  );
};

export default MarketplaceContainer;

import { getMarketplaceData } from './[...slug]';
import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';

const Marketplace = ({
  marketEntities,
  marketEntityTypes,
  marketTags,
  ...props
}) => {
  return (
    <MarketplaceProvider inititalEntities={marketEntities}>
      <MarketplaceContainer
        marketEntities={marketEntities}
        marketEntityTypes={marketEntityTypes}
        marketTags={marketTags}
        {...props}
      >
        <MarketplaceEntities entities={marketEntities} />
      </MarketplaceContainer>
    </MarketplaceProvider>
  );
};

export async function getServerSideProps(ctx) {
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entities = await fetch(`${extensionsURL}/-/gql/extensions.json`);
  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const data = await getMarketplaceData(ctx);
  return {
    props: {
      marketEntities: await entities.json(),
      marketEntityTypes: await entityTypes.json(),
      marketTags: await tags.json(),
      ...data,
    },
  };
}

export default Marketplace;

import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import { fetchPage } from 'lib/api';
import EntityType from 'views/marketplace/EntityType';
import Extension from 'views/marketplace/Extension';
import Tag from 'views/marketplace/Tag';

const ALTNAME = {
  TAG: 'Tag',
  ENTITY_TYPE: 'EntityType',
  EXTENSION: 'Extension',
  INDIVIDUAL: 'Individual',
};

const renderMarketplaceViewByAltName = (altName, entities) => {
  console.log(altName);
  if (altName === ALTNAME.TAG) {
    return <Tag />;
  } else if (altName === ALTNAME.ENTITY_TYPE) {
    return <EntityType />;
  } else if (altName === ALTNAME.ENTITY_TYPE) {
    return <Extension />;
  } else if (altName === ALTNAME.INDIVIDUAL) {
    return <h1>INDIVIDUAL</h1>;
  }
};

const slug = ({ marketEntityTypes, marketTags, ...props }) => {
  console.log('slug oiii', props.categoryEntities, props.typesEntities);
  return (
    <MarketplaceProvider
      inititalEntities={props.categoryEntities || props.typesEntities}
    >
      <MarketplaceContainer
        marketEntities={props.categoryEntities || props.typesEntities}
        marketEntityTypes={marketEntityTypes}
        marketTags={marketTags}
        {...props}
      >
        {renderMarketplaceViewByAltName(
          props.marketplaceAltName,
          props.categoryEntities || props.typesEntities,
        )}
      </MarketplaceContainer>
    </MarketplaceProvider>
  );
};

export const getMarketplaceData = async (ctx) => {
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';
  let data = await fetchPage(ctx.resolvedUrl, true, extensionsURL);

  if (data.meta.model_alternate_name === ALTNAME.TAG) {
    const newData = await fetch(
      `https://39ntbr6g-dev.webengine.zesty.io/data/entites-by-category.json?category=${data.meta.zuid}`,
    );

    data.categoryEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.TAG;
  } else if (data.meta.model_alternate_name === ALTNAME.ENTITY_TYPE) {
    const newData = await fetch(
      `https://39ntbr6g-dev.webengine.zesty.io/data/entities-by-type.json?type=${data.meta.zuid}`,
    );

    data.typesEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.ENTITY_TYPE;
  } else {
    data.marketplaceAltName = ALTNAME.INDIVIDUAL;
  }

  return data;
};

export async function getServerSideProps(ctx) {
  const data = await getMarketplaceData(ctx);
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);

  // generate a status 404 page
  if (data?.error) return { notFound: true };

  // Pass data to the page via props
  return {
    props: {
      ...data,
      marketEntityTypes: await entityTypes.json(),
      marketTags: await tags.json(),
    },
  };
}

export default slug;

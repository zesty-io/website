import { getMarketplaceData } from './[...slug]';
import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import Main from '../../layouts/Main';
import AppBar from 'components/console/AppBar';
import { useRouter } from 'next/router';
import { fetchPage } from 'lib/api';
import Head from 'next/head';
import { HeroWithPrimaryBackgroundAndDesktopScreenshot } from 'blocks/heroes';
import { setCookies } from 'cookies-next';

const Marketplace = ({
  marketEntities,
  marketEntityTypes,
  marketTags,
  ...props
}) => {
  const router = useRouter();
  const seoTitle = props.meta.web.seo_meta_title,
    seoDescription = props.meta.web.seo_meta_description;
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <Main customRouting={props.navigationCustom}>
        <AppBar url={router.asPath} />
        <HeroWithPrimaryBackgroundAndDesktopScreenshot
          title={props.title}
          description={
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          }
          screenshot={props.screenshot?.data[0]?.url}
          //making an array of object > url , image
          logos={props.features_logos?.data?.map((x) => ({
            image: x.image?.data[0]?.url,
            url: x.meta?.web?.uri,
          }))}
        />
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
      </Main>
    </>
  );
};

export async function getServerSideProps({ res, req }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookies('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entities = await fetch(`${extensionsURL}/-/gql/extensions.json`);
  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const data = await getMarketplaceData(req.url);
  const navigationCustom = (await fetchPage('/')).navigationCustom;

  return {
    props: {
      marketEntities: await entities.json(),
      marketEntityTypes: await entityTypes.json(),
      marketTags: await tags.json(),
      ...data,
      navigationCustom: navigationCustom,
    },
  };
}

export default Marketplace;

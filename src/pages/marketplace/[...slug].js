import MarketplaceSinglePageContainer from 'components/marketplace/MarketplaceSinglePageContainer';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import Main from 'layouts/Main/Main';
import { fetchPage, fetcher } from 'lib/api';
import Extension from 'views/marketplace/Extension';
import CustomContainer from 'components/Container';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { setCookie } from 'cookies-next';
import MainApps from 'components/marketplace/landing/MainApps';
import { getIsAuthenticated } from 'utils';

// these read cookies directly during render (no SSR guard), so they must
// stay client-only or their server output mismatches the client hydration
const RegisterPage = dynamic(() => import('components/marketplace/register'), {
  ssr: false,
});
const InstalledPage = dynamic(
  () => import('components/marketplace/installed'),
  { ssr: false },
);

const ALTNAME = {
  TAG: 'Tag',
  ENTITY_TYPE: 'EntityType',
  EXTENSION: 'Extension',
};

const slug = ({
  marketEntityTypes,
  marketTags,
  isRegisterPage,
  isInstalledPage,
  ...props
}) => {
  const seoTitle = props?.meta?.web?.seo_meta_title,
    seoDescription = props?.meta?.web?.seo_meta_description;

  if (isRegisterPage) {
    return (
      <>
        <Head>
          <title>{'Register an App'}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main
          customRouting={props.navigationCustom}
          flyoutNavigation={props.flyoutNavigation}
        >
          <CustomContainer>
            <RegisterPage />
          </CustomContainer>
        </Main>
      </>
    );
  }

  if (isInstalledPage) {
    return (
      <>
        <Head>
          <title>{'Installed Apps'}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main
          customRouting={props.navigationCustom}
          flyoutNavigation={props.flyoutNavigation}
        >
          <CustomContainer>
            <InstalledPage />
          </CustomContainer>
        </Main>
      </>
    );
  }

  if (props.marketplaceAltName === ALTNAME.EXTENSION) {
    return (
      <>
        <Head>
          <title>{seoTitle}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main
          customRouting={props.navigationCustom}
          flyoutNavigation={props.flyoutNavigation}
        >
          <CustomContainer>
            <Extension {...props} />
          </CustomContainer>
        </Main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <Main
        customRouting={props.navigationCustom}
        flyoutNavigation={props.flyoutNavigation}
      >
        <MarketplaceProvider
          inititalEntities={props.categoryEntities || props.typesEntities}
        >
          <MarketplaceSinglePageContainer
            marketEntities={props.categoryEntities || props.typesEntities}
            marketEntityTypes={marketEntityTypes}
            marketTags={marketTags}
            {...props}
          >
            <MainApps />
            {/* {renderMarketplaceViewByAltName(
              props.marketplaceAltName,
              props.categoryEntities || props.typesEntities,
            )} */}
          </MarketplaceSinglePageContainer>
        </MarketplaceProvider>
      </Main>
    </>
  );
};

export const getMarketplaceData = async (url) => {
  let extensionsURL =
    process.env.PRODUCTION === 'true'
      ? 'https://extensions.zesty.io'
      : 'https://39ntbr6g-dev.webengine.zesty.io';

  let data = await fetchPage(url, true, extensionsURL);

  if (data?.meta?.model_alternate_name === ALTNAME.TAG) {
    const newData = await fetch(
      `${extensionsURL}/data/entites-by-category.json?category=${data.meta.zuid}`,
    );

    data.categoryEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.TAG;
  } else if (data?.meta?.model_alternate_name === ALTNAME.ENTITY_TYPE) {
    const newData = await fetch(
      `${extensionsURL}/data/entities-by-type.json?type=${data.meta.zuid}`,
    );

    data.typesEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.ENTITY_TYPE;
  } else {
    data.marketplaceAltName = ALTNAME.EXTENSION;
  }

  return data;
};

export async function getServerSideProps({ req, res, query }) {
  const isAuthenticated = getIsAuthenticated(res);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookie('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  const data = await getMarketplaceData(req.url);
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  // const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  // const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);

  const entityTypes = await fetcher({
    url: `${extensionsURL}/-/gql/entity_types.json`,
    fallback: [],
  });
  const tags = await fetcher({
    url: `${extensionsURL}/-/gql/tags.json`,
    fallback: [],
  });
  const navigationCustom = (await fetchPage('/')).navigationCustom;
  const flyoutNavigation = (await fetchPage('/')).flyoutNavigation;

  // resolved from the catch-all route params, not req.url, so it stays correct
  // behind proxies/CDNs that may add query strings or rewrite the request URL
  const slugSegments = query?.slug || [];
  const isRegisterPage =
    slugSegments.length === 1 && slugSegments[0] === 'register';
  const isInstalledPage =
    slugSegments.length === 1 && slugSegments[0] === 'installed';
  const extendedPages = isRegisterPage || isInstalledPage;
  // generate a status 404 page
  if (data?.error && !extendedPages) return { notFound: true };

  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);

  // Pass data to the page via props
  return {
    props: {
      ...data,
      marketEntityTypes: entityTypes,
      marketTags: tags,
      navigationCustom: navigationCustom,
      flyoutNavigation: flyoutNavigation,
      isRegisterPage,
      isInstalledPage,
      zesty: {
        isAuthenticated,
        templateUrl: process.env.TEMPLATE_URL,
      },
    },
  };
}

export default slug;

import { fetchPage } from 'lib/api';

const slug = (props) => {
  console.log('data', props);

  return <div>{props?.name}</div>;
};

export const getMarketplaceData = async (ctx) => {
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';
  const data = await fetchPage(ctx.resolvedUrl, true, extensionsURL);

  return data;
};

export async function getServerSideProps(ctx) {
  const data = getMarketplaceData(ctx);
  // generate a status 404 page
  if (data.error) return { notFound: true };

  // Pass data to the page via props
  return { props: data };
}

export default slug;

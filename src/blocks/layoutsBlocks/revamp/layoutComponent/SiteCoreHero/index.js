import useFetch from 'components/hooks/useFetch';
import HeroTextImageWithStatsBelow from 'revamp/ui/HeroTextImageWithStatsBelow';

const SiteCoreHero = () => {
  const { data } = useFetch(
    `/-/instant/7-deeab1b9da-kdx5h4.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const props = {
    title: data?.data?.[0]?.content?.headline,
    description: data?.data?.[0]?.content?.component_content,
    hero: data?.data?.[0]?.content?.main_image?.data[0]?.url,
    ctaText: data?.data?.[0]?.content?.cta_text,
    ctaLink: data?.data?.[0]?.content?.cta_link,
  };

  return (
    <>
      <HeroTextImageWithStatsBelow {...props} />
    </>
  );
};

export default SiteCoreHero;

import useFetch from 'components/hooks/useFetch';
import HeroTextImageWithStatsBelow from 'revamp/ui/HeroTextImageWithStatsBelow';

const AcquiaHero = () => {
  const { data } = useFetch(
    `/-/instant/7-e4f2c9feb3-qt8w14.json`,
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

export default AcquiaHero;

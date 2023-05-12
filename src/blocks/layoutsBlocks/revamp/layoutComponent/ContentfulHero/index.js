import useFetch from 'components/hooks/useFetch';
import HeroTextImageWithStatsBelow from 'revamp/ui/HeroTextImageWithStatsBelow';

const ContentfulHero = () => {
  const { data } = useFetch(
    `/-/instant/7-d68cb3b282-pp57lj.json`,
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

export default ContentfulHero;

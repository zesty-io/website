import useFetch from "components/hooks/useFetch";
import HeroTextImageWithStatsBelow from "revamp/ui/HeroTextImageWithStatsBelow"

const WordPressHero = () => {

  
    const { data } = useFetch(
    `/-/instant/7-949dfb9482-nkknrf.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );


  const props = {
    title: data?.headline,
    description: data?.component_content,
    hero: data?.main_image?.data[0]?.url,
    ctaText: data?.cta_text,
    ctaLink: data?.cta_link,
  }




    return <>
         <HeroTextImageWithStatsBelow {...props}/>
         {JSON.stringify(data)}
    </>
}

export default WordPressHero
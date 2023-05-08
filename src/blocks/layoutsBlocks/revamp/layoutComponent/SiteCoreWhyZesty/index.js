import useFetch from "components/hooks/useFetch";
import GridFeatureList from "revamp/ui/GridFeatureList";

const SiteCoreWhyZesty = () => {

      const { data } = useFetch(
    `/-/instant/7-f4b6f490f2-hx1nz8.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const features = [ 
    {
    icon: data?.data?.[0]?.content?.mui_icon_1,
    heading: data?.data?.[0]?.content?.feature_1,
    text: data?.data?.[0]?.content?.content_1,
  },
    {
    icon: data?.data?.[0]?.content?.mui_icon_2,
    heading: data?.data?.[0]?.content?.feature_2,
    text: data?.data?.[0]?.content?.content_2,
  },
    {
    icon: data?.data?.[0]?.content?.mui_icon_3,
    heading: data?.data?.[0]?.content?.feature_3,
    text: data?.data?.[0]?.content?.content_3,
  },
    {
    icon: data?.data?.[0]?.content?.mui_icon_4,
    heading: data?.data?.[0]?.content?.feature_4,
    text: data?.data?.[0]?.content?.content_4,
  },
]

  const props = {
  title:  data?.data?.[0]?.content?.eyebrow,
  heading :data?.data?.[0]?.content?.headline,
  supportingText: data?.data?.[0]?.content?.header_content,
  features,
  isDark: false,
  hasImage: true,
  image :data?.data?.[0]?.content?.main_image?.data?.[0]?.url,
  }



    return <>
        <GridFeatureList isDark hasImage {...props} />
        {(data?.data?.[0]?.content?.main_image?.data?.[0]?.url)}
    </>
} 

export default SiteCoreWhyZesty;
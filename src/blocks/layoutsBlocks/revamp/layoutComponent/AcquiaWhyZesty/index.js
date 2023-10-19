import useFetch from "components/hooks/useFetch";
import GridFeatureList from "revamp/ui/GridFeatureList";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const AcquiaWhyZesty = () => {

      const { data } = useFetch(
    `/-/instant/7-9cb9e5fde8-gh931p.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const features = [ 
    {
    icon: FavoriteBorderOutlinedIcon,
    heading: data?.data?.[0]?.content?.feature_1,
    text: data?.data?.[0]?.content?.content_1,
  },
    {
    icon:FavoriteBorderOutlinedIcon,
    heading: data?.data?.[0]?.content?.feature_2,
    text: data?.data?.[0]?.content?.content_2,
  },
    {
    icon:FavoriteBorderOutlinedIcon,
    heading: data?.data?.[0]?.content?.feature_3,
    text: data?.data?.[0]?.content?.content_3,
  },
    {
    icon:FavoriteBorderOutlinedIcon,
    heading: data?.data?.[0]?.content?.feature_4,
    text: data?.data?.[0]?.content?.content_4,
  },
]


  const props = {
  title:  data?.data?.[0]?.content?.eyebrow,
  heading :data?.data?.[0]?.content?.headline,
  supportingText: data?.data?.[0]?.content?.header_content,
  features,
  isDark: true,
  hasImage: true,
  image :data?.data?.[0]?.content?.main_image?.data?.[0]?.url,
  }



    return <>
        <GridFeatureList  {...props}   />
    </>
} 

export default AcquiaWhyZesty;
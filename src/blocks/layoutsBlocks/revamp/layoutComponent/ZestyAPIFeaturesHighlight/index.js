import useFetch from 'components/hooks/useFetch';
import React from 'react';
import FeatureTwoCTA from 'revamp/ui/FeatureTwoCTA';

const ZestyAPIFeaturesHighlight = () => {
  const { data } = useFetch(
    `/-/instant/7-b2f4e883c4-zhlsdk.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const props = {
    overline: data?.data?.[0]?.content?.eyebrow,
    heading: data?.data?.[0]?.content?.headline,
    supportingText: data?.data?.[0]?.content?.main_content,
    image: data?.data?.[0]?.content?.main_image?.data?.[0]?.url,
  };

  return <FeatureTwoCTA {...props} isImageRight={false}/>;
};

export default ZestyAPIFeaturesHighlight;

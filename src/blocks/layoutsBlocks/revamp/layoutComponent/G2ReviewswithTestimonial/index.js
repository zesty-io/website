import useFetch from 'components/hooks/useFetch';
import React from 'react';
import FeatureTwoCTA from 'revamp/ui/FeatureTwoCTA';

const G2ReviewswithTestimonial = () => {
  const { data } = useFetch(
    `/-/instant/7-ecb3f2efee-c52xfw.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const overline = data?.data?.[0]?.content?.eyebrow,
    heading = data?.data?.[0]?.content?.headline,
    supportingText = data?.data?.[0]?.content?.main_content,
    image = data?.data?.[0]?.content?.image_right?.data?.[0]?.url;

  return (
    <FeatureTwoCTA
      isImageRight
      overline={overline}
      heading={heading}
      supportingText={supportingText}
      image={image}
    />
  );
};

export default G2ReviewswithTestimonial;

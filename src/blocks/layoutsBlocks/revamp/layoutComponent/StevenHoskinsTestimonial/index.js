import useFetch from 'components/hooks/useFetch';
import React from 'react';
import SingleTestimonial from 'revamp/ui/SingleTestimonial';

const StevenHoskinsTestimonial = () => {
  const { data } = useFetch(
    `/-/instant/7-d294dbc0f4-8l8637.json`,
    JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION || true),
  );

  const headline = data?.data?.[0]?.content?.headline,
    witness = data?.data?.[0]?.content?.image?.data[0]?.url,
    name = data?.data?.[0]?.content?.person_name,
    role = data?.data?.[0]?.content?.person_title,
    logo = data?.data?.[0]?.content?.company_log?.data[0]?.url,
    quote = data?.data?.[0]?.content?.testimonial_content;

  return (
    <SingleTestimonial
      witness={witness}
      name={name}
      role={role}
      logo={logo}
      quote={quote}
      header={headline}
    />
  );
};
export default StevenHoskinsTestimonial;

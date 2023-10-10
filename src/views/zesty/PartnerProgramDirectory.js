/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Partner Program Directory 
 * Name: partner_program_directory 
 * Model ZUID: 6-d0bcafc9d3-qlm350
 * 
 * Model Fields:
 * 
  * header_title_and_description (wysiwyg_basic)
 * header_cta_button (text)
 * cta_button_link (internal_link)
 * header_graphic (images)
 * agency_cards (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-d0bcafc9d3-qlm350
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useEffect, useState } from 'react';

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material';

/**
 * Components Imports
 */
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import Features from 'blocks/zesty/PageLayouts/Features';

function PartnerProgramDirectory({ content }) {
  const theme = useTheme();

  let zestyURL = content.zestyProductionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const [partnersArr, setPartnersArr] = useState([]);
  const [hideLoad, setHideLoad] = useState(false);
  // current page for pagination
  let [page, setPage] = useState(0);

  // use effect pull partners
  useEffect(() => {
    try {
      const fetchPartners = async () => {
        const url = `${zestyURL}/-/all-agency-partners.json?page=${page}&limit=9`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const partners = await response.json();
        setHideLoad(false);
        setPartnersArr(partners);
      };

      fetchPartners();
    } catch (err) {
      console.error(`Could Not Find Results: ${err}`);
    }
  }, []);

  // load more on click
  const handleOnClick = async () => {
    try {
      setPage((page += 9));
      const url = `${zestyURL}/-/all-agency-partners.json?page=${page}&limit=9`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.length) {
        // add conditional rendering to hide the load more button
        setHideLoad(true);
      }
      setPartnersArr([...partnersArr, ...data]);
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  };

  const heroProps = {
    title: content.header_title_and_description,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.header_primary_cta_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
  };

  const partnersData =
    partnersArr?.reduce((acc, item) => {
      acc.push({
        icon_image: item.image,
        feature_name: item.title,
        content: item.description,
        link: item.link,
      });

      return acc;
    }, []) || [];

  const allPartnersProps = {
    features_header: content.features_title,
    isHeaderEnabled: false,
    data: partnersData,
    background_color: theme.palette.zesty.zestyWhite,
    hideLoad: hideLoad,
    onClick: handleOnClick,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Features {...allPartnersProps} />
    </>
  );
}

export default PartnerProgramDirectory;

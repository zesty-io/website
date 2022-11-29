/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Pricing
 * Name: pricing
 * Model ZUID: 6-ef1038-d9tb16
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * content (wysiwyg_advanced)
 * fine_print (wysiwyg_basic)
 * volume_discount_image (images)
 * enterprise_image (images)
 * volume_pricing (text)
 * volume_discount_description (wysiwyg_advanced)
 * instance_definition (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ef1038-d9tb16
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

// Mui Imports
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Components Import
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
// import Container from 'components/Container';
import Container from 'blocks/container/Container';
import PricingHero from '../../blocks/pricing/PricingHero/PricingHero';
import SupportBanner from '../../blocks/pricing/SupportBanner/SupportBanner';
import Faq from '../../blocks/pricing/Faq/Faq';
import useFetch from 'components/hooks/useFetch';
import FillerContent from 'components/globals/FillerContent';

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function Pricing({ content }) {
  const theme = useTheme();
  const heroProps = {
    title: content.title,
    subtitle: content.instance_definition,
    tiers: content.tiers.data,
  };

  const [, setCategories] = useState([]);

  const { data: pricingData } = useFetch(
    `/-/pricing-levers.json`,
    content.zestyProductionMode,
  );

  useEffect(() => {
    let leverCategories = [];
    pricingData.forEach((item) => {
      leverCategories.push(item.classification);
    });
    leverCategories.filter(onlyUnique);
    let cats = [...new Set(leverCategories)];
    setCategories(cats);
  }, [pricingData]);

  // const [active, setActive] = useState(false);
  // const featuresHandler = () => {
  //   setActive(!active);
  // };

  // const pricingCompareTableData = content.tiers.data;

  return (
    <>
      <PricingHero {...heroProps} />
      <SimpleCardLogo
        heading_text={
          content.logos_header || FillerContent.rich_text_sub_heading
        }
        variant=""
        logoItems={content.logos?.data}
        maxWidth={1400}
      />

      {/* {Pricing Comparison Table} */}
      {/* <Container sx={{ mt: 10, maxWidth: 1400 }}>
        <Card
          variant="outlined"
          sx={{
            background: theme.palette.alternate.main,
          }}
        >
          <Box
            sx={{
              py: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {content?.comparison_heading}
            </Typography>
            <Button
              onClick={featuresHandler}
              sx={{ mt: 2 }}
              variant="contained"
              color="secondary"
            >
              {active ? content.show_comparison_ : content.hide_comparison}
            </Button>
          </Box>
          {active && (
            <Box sx={{ mt: 4 }}>
              {categories.map((cat, idx) => (
                <PricingCompareTable
                  id={idx}
                  tiers={content.tiers.data}
                  category={cat}
                  pricingLevers={pricingData}
                />
              ))}
            </Box>
          )}
        </Card>
      </Container> */}

      <Box
        sx={{
          mt: 10,
          background: theme.palette.zesty.zestyPurple,
          color: 'white',
        }}
      >
        <SupportBanner text_content={content.banner_content} />
      </Box>

      {/* <Container></Container> */}
      {/* <Container maxWidth={400} paddingY={'0 !important'}>
        <Divider />
      </Container> */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Faq />
        </Container>
      </Box>
    </>
  );
}

export default Pricing;

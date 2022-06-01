/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital Experience Platform 
 * Name: digital_experience_platform 
 * Model ZUID: 6-b2a7a8abbb-xtc6nx
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (text)
 * header_cta_primary (text)
 * header_cta_secondary (text)
 * header_graphic (images)
 * solutions_h2 (text)
 * solution_1_description (wysiwyg_basic)
 * solution_2_graphic (images)
 * solution_2_description (wysiwyg_basic)
 * solution_1_graphic (images)
 * solution_3_description (wysiwyg_basic)
 * solution_3_graphic (images)
 * solution_4_description (wysiwyg_basic)
 * solution_4_graphic (images)
 * about_dxp (wysiwyg_basic)
 * about_zesty_dxp (wysiwyg_basic)
 * about_dxp_graphic (images)
 * middle_solutions_header (text)
 * middle_solution_1_description (wysiwyg_basic)
 * middle_solution_1_graphic (images)
 * middle_solution_2_description (wysiwyg_basic)
 * middle_solution_2_graphic (images)
 * middle_solution_3_description (wysiwyg_basic)
 * middle_solution_3_graphic (images)
 * middle_solution_4_description (wysiwyg_basic)
 * middle_solution_4_graphic (images)
 * features_header (text)
 * features (one_to_many)
 * integrations_description (wysiwyg_basic)
 * integrations_graphic (images)
 * integrations_button_text (text)
 * integrations_button_link (internal_link)
 * integrations_airplane_graphic (images)
 * implementing_header (text)
 * headless_cms_toggle (text)
 * hybrid_cms_toggle (text)
 * headless_cms_description (wysiwyg_basic)
 * headless_cms_graphic (images)
 * hybrid_cms_description (wysiwyg_basic)
 * hybrid_cms_graphic (images)
 * headless_cms_toggle_graphic (images)
 * hybrid_cms_toggle_graphic (images)
 * case_study_header (text)
 * case_studies (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_button_primary (text)
 * bottom_cta_button_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b2a7a8abbb-xtc6nx
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import * as helper from 'utils';

const HeroSection = ({ content, theme }) => {
  return (
    <Box
      paddingTop={15}
      paddingBottom={25}
      sx={{
        background:
          'linear-gradient(180deg, rgba(31,93,207,1) 45%, rgba(112,152,224,1) 70%, rgba(255,255,255,1) 100%);',
      }}
    >
      <Container sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'h2'}
            variant={'p'}
            fontWeight={600}
            sx={{
              color: theme.palette.common.white,
              fontSize: '32px',
              opacity: '0.8',
            }}
          >
            {'DXP'}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 700,
              fontSize: '48px',
            }}
          >
            {content.header_eyebrow}
          </Typography>
          <Typography
            paddingY={2}
            component={'h3'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {content.header_h1}
          </Typography>
          <Box>
            {/* <TryFreeButton sx={{
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.zesty.zestyOrange,
                  padding: '.6rem 4rem',
                  fontSize: '16px',
                }}
                variant="contained"
                component="a"
              /> */}
            <Button
              href={''}
              component={Button}
              sx={{
                backgroundColor: theme.palette.common.white,
                color: theme.palette.zesty.zestyOrange,
                padding: '.6rem 4rem',
                fontSize: '16px',
              }}
            >
              {content.bottom_cta_button_primary}
            </Button>
          </Box>
        </Box>
        <Box sx={{}}>
          <img src={content.header_graphic.data[0].url} width={700} />
        </Box>
      </Container>
    </Box>
  );
};

const SecondSection = ({ content, theme }) => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={10}
            paddingBottom={10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              fontWeight: 800,
              fontSize: '32px',
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.solutions_h2,
                'digital experience',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <Box>
            <img src={content.solution_1_graphic.data[0].url} alt="" />
          </Box>
          <Box>
            <img src={content.solution_1_graphic.data[0].url} alt="" />
          </Box>
        </Box>
        <Grid item xs={12} md={9}>
          <Box
            paddingTop={10}
            paddingBottom={10}
            sx={{
              textAlign: 'center',
              color: theme.palette.secondary.darkCharcoal,
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.about_zesty_dxp,
                'Zesty',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          ></Box>
        </Grid>
      </Container>
    </Box>
  );
};

const ThirdSection = ({ content, theme }) => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={10}
            paddingBottom={10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.about_dxp,
                'Digital Experience Platform?',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={content.about_dxp_graphic.data[0].url} alt="" />
        </Box>
      </Container>
    </Box>
  );
};
function DigitalExperiencePlatform({ content }) {
  console.log(content, 12222);
  const theme = useTheme();

  return (
    <>
      <HeroSection content={content} theme={theme} />
      <SecondSection content={content} theme={theme} />
      <ThirdSection content={content} theme={theme} />
    </>
  );
}

export default DigitalExperiencePlatform;

/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: ROI calculator 
 * Name: roi_calculator 
 * Model ZUID: 6-82e1ad9d8d-c2rq2z
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * page_title_and_description (wysiwyg_basic)
 * header_graphic (images)
 * widget_title_and_description (wysiwyg_basic)
 * calculations_title (text)
 * results_title (text)
 * cta_button_text (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-82e1ad9d8d-c2rq2z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import revampTheme from 'theme/revampTheme';
import { ThemeProvider } from '@emotion/react';
import CustomTextField from 'revamp/components/CustomTextField';

function RoiCalculator() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Stack alignItems="center" justifyContent="center" py={10} px={14}>
        <Box maxWidth={1500} mb={8}>
          <Typography
            color="text.secondary"
            component="h2"
            variant="h2"
            fontWeight={800}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography
            color="text.secondary"
            component="p"
            variant="p"
            textAlign="center"
          >
            Amet expedita quos beatae architecto ab fugit dignissimos aliquam
            officia! Odit impedit repudiandae vero atque unde nobis aliquam, id
            illum deleniti nisi.
          </Typography>
        </Box>

        <Box
          borderRadius="10px"
          width="100%"
          maxWidth={600}
          minHeight={500}
          p={4}
          sx={{ border: `1px solid ${grey[300]}` }}
        >
          <Stack>
            <Typography
              component={'p'}
              variant="h4"
              letterSpacing="-0.02em"
              color="text.secondary"
              fontWeight={800}
              mb={3}
            >
              ROI Calculator
            </Typography>
            <Stack spacing={3} mb={3}>
              <CustomTextField
                label="Lorem ipsum dolor sit amet consectetur, adipisicing elit?"
                name="1stInput"
              />
            </Stack>

            <Stack spacing={3} mb={3}>
              <CustomTextField
                label="Lorem ipsum dolor sit amet consectetur, adipisicing elit?"
                name="1stInput"
              />
            </Stack>

            <Stack spacing={3} mb={3}>
              <CustomTextField
                type="number"
                label="Lorem ipsum dolor sit amet consectetur, adipisicing elit?"
                name="1stInput"
              />
            </Stack>

            <Stack spacing={3} mb={3}>
              <CustomTextField
                label="Lorem ipsum dolor sit amet consectetur, adipisicing elit?"
                name="1stInput"
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default RoiCalculator;

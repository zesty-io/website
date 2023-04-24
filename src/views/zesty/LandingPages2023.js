/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: 2023 Landing Pages 
 * Name: landing_pages_2023 
 * Model ZUID: 6-a6fef4dfd0-3v1dt3
 * File Created On: Tue Apr 04 2023 22:38:29 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * page_title (text)
 * hero_content (wysiwyg_basic)
 * form_title (text)
 * hero_image (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a6fef4dfd0-3v1dt3
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// import { AutoLayout } from '@zesty-io/react-autolayout';
import { AutoLayout } from '../../../../react-autolayout/dist/AutoLayout';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';
import React from 'react';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import FillerContent from 'components/globals/FillerContent';
import ColumnSelector from 'components/marketing/AppLayouts/ColumnSelector';

function LandingPages2023({ content }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container sx={{ py: 10 }}>
        <Stack direction={'row'}>
          <Grid container spacing={isMedium ? 2 : 10}>
            <Grid item xs={12} md={6}>
              <Stack py={4}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ color: theme.palette.zesty.zestyDarkText }}
                >
                  {content?.page_title || FillerContent.header}
                </Typography>
                <MuiMarkdown
                  options={{
                    overrides: {
                      p: {
                        component: Typography,
                        props: {
                          mt: 2,
                          component: 'p',
                          variant: 'h6',
                          sx: {
                            color: theme.palette.zesty.zestyDarkTextSecondary,
                            textAlign: 'left',
                          },
                        },
                      },
                    },
                  }}
                >
                  {content?.hero_content || FillerContent.rich_text}
                </MuiMarkdown>
                {content?.hero_image && (
                  <ZestyImage
                    style={{ marginTop: '40px' }}
                    src={content?.hero_image?.data[0].url}
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4 }}>
                <Typography sx={{ pb: 2 }}>
                  {content?.form_title || FillerContent.header}
                </Typography>
                <StandardFormWithSelect hideSelect={true} />
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <AutoLayout
        content={content}
        components={{
          component: ComponentSelector,
          columns: ColumnSelector,
        }}
      />
    </>
  );
}

export default LandingPages2023;

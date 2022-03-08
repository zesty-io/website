/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Simple Page 
 * Name: simple_page 
 * Model ZUID: 6-37838c-5r4lw2
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * content (wysiwyg_advanced)
 * image (images)
 * header_content (wysiwyg_advanced)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-37838c-5r4lw2
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
// import CompanyTerms from '../../../src/views/CompanyTerms/CompanyTerms';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContactCard, Content } from '../CompanyTerms/components';

function SimplePage({ content }) {
  console.log(content);
  const theme = useTheme();
  return (
    <>
      <Container>
        <Box boxShadow={4} borderRadius={2}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <Container paddingX={{ xs: 2, sm: 4 }}>
              <Typography
                variant={'h4'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                {content.title}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                Last modified on <strong>{content.meta.updatedAt}</strong>
              </Typography>
            </Container>
            <Box
              component={'svg'}
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
              width={1}
              marginBottom={-1}
            >
              <path
                fill={theme.palette.background.paper}
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          <Container
            paddingTop={'0 !important'}
            paddingX={{ xs: 2, sm: 4 }}
            position={'relative'}
            top={0}
          >
            <Box
              component={Grid}
              container
              spacing={4}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
            >
              <Grid item xs={12} md={9}>
                <Box
                  dangerouslySetInnerHTML={{ __html: content.content }}
                ></Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  position={'sticky'}
                  top={theme.spacing(10)}
                  className={'sticky'}
                >
                  <ContactCard />
                </Box>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
}

export default SimplePage;

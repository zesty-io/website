/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Demos
 * Name: demos
 * Model ZUID: 6-ccf3cd8a82-16sw3z
 * File Created On: Thu Mar 10 2022 10:14:31 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * header_title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccf3cd8a82-16sw3z
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Typography from '@mui/material/Typography';

import FillerContent from 'components/FillerContent';
import Container from 'components/FullWidthContainer';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';

const Demo = ({ content }) => {
  const theme = useTheme();
  return (
    <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        position={'relative'}
      >
        <Box
          width={1}
          order={{ xs: 2, md: 1 }}
          display={'flex'}
          alignItems={'center'}
        >
          <Container>
            <Box marginBottom={4}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'text.secondary'}
              >
                {content.header_title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                {content.callout_title}
              </Typography>
              <Typography color="text.secondary">
                {content.header_description}
              </Typography>
            </Box>
            {/* <Form
              eyebrow={content.header_title}
                title={content.callout_title}
                subtitle={content.header_description}
                ctaButtonText={content.callout_button_text}
              /> */}
            <StandardFormWithSelect
              leadDetail="Demo Sign Up"
              selectedValue={2}
              hideSelect={true}
              modalTitle="Thank you for submitting your request."
              modalMessage="Our team will be in touch soon to schedule a demo with you."
              additionalTextfield={{ phoneNumber: true }}
            />
          </Container>
        </Box>
        <Box
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 50%' },
            position: 'relative',
            maxWidth: { xs: '100%', md: '50%' },
            order: { xs: 1, md: 2 },
            minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50vw' },
              height: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  left: '0%',
                  width: 1,
                  height: 1,
                  position: { xs: 'relative', md: 'absolute' },
                  clipPath: {
                    xs: 'none',
                    md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                  },
                  shapeOutside: {
                    xs: 'none',
                    md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 'auto', md: 1 },
                    '& img': {
                      objectFit: 'cover',
                    },
                    '& .lazy-load-image-loaded': {
                      height: 1,
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={
                      content.callout_image.data[0]?.url || FillerContent.image
                    }
                    height={{ xs: 'auto', md: 1 }}
                    maxHeight={{ xs: 300, md: 1 }}
                    width={1}
                    maxWidth={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Demo;

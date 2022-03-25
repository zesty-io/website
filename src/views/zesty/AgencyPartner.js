/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Agency Partners
 * Name: agency_partners
 * Model ZUID: 6-dcddf2b6b7-hdsjv3
 * File Created On: Thu Mar 03 2022 11:27:11 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dcddf2b6b7-hdsjv3
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import HeroNotTyped from '../../blocks/heroes/HeroNotTyped';
import Partners from '../../blocks/logoGrid/Partners';
import Main from '../../blocks/portfolioGrid/Main/Main';
import Typography from '@mui/material/Typography'
import FillerContent from 'components/FillerContent';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import Button from '@mui/material/Button';
import { zestyLink } from 'lib/zestyLink';

import Container from 'components/Container';
import { useMediaQuery } from '@mui/material';

function AgencyPartner({ content }) {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Container>
        <HeroNotTyped
          title={content.title || FillerContent.header}
          description={content.header_description || FillerContent.description}
        />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners logoPartners={content.header_logos.data} />
      </Container>

      <Container>
        <Box>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            {content.cta_header_title || FillerContent.header}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            {content.cta_header_description || FillerContent.description}
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            justifyContent={'center'}
            marginTop={4}
          >
            <Button
                component={'a'}
                href={'#signup'}
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                {content.cta_header_left || FillerContent.cta}
              </Button>
          
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={zestyLink(content.navigationTree,'7-cec987fcf5-9bht2z')}
                variant="outlined"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                {content.cta_header_right || FillerContent.cta}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      
      <Container>
        <Main partnerCards={content.agency_partners_cards.data || FillerContent.missingDataArray} />
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Box id="signup">
            <Box marginBottom={4}>
              <Typography
                fontWeight={700}
                variant={'h4'}
                align={'center'}
                gutterBottom
              >
              {content.cta_footer_title || FillerContent.title}
              </Typography>
              <Typography
                variant={'h6'}
                component={'p'}
                color={'text.secondary'}
                align={'center'}
              >
              {content.cta_footer_description || FillerContent.description}
              </Typography>
            </Box>

            <StandardFormWithSelect selectedValue={0}  hideSelect={false} ctaText={content.cta_footer_cta ||  FillerContent.cta} />
          </Box>
        </Container>
      </Box>

    </>
  );
}

export default AgencyPartner;

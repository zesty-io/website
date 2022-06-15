/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Thank You page 
 * Name: thank_you_page 
 * Model ZUID: 6-cef69cdc8d-06vzcd
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title_h1 (text)
 * description (textarea)
 * image (images)
 * related_articles (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-cef69cdc8d-06vzcd
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import FillerContent from 'components/FillerContent';
import { alpha, useTheme } from '@mui/material/styles';
import TryFreeButton from 'components/cta/TryFreeButton';
import {
  useMediaQuery,
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';

function ThankYouPage({ content }) {
  return (
    <>
      <Box component="section" sx={{ py: 10 }}>
        <SimpleHeroWithCta
          title={content.title_h1 || FillerContent.header}
          description={content.description || FillerContent.description}
          primaryCta={content.hero_cta_primary_text || FillerContent.cta}
          secondaryCTA={content.hero_cta_secondary_text || FillerContent.cta}
        />
      </Box>

      {/* End of Zesty.io output example */}
    </>
  );
}

const SimpleHeroWithCta = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCTA,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      style={{ marginTop: isMobile ? '0rem' : '1rem', marginBottom: '1rem' }}
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '20%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box paddingTop={isMobile ? 0 : 1} position={'relative'} zIndex={2}>
        <Box marginBottom={4}>
          <Typography
            variant="p"
            component={'h1'}
            color="text.primary"
            align={'center'}
            sx={{
              fontSize: isMobile ? '35px' : '48px',
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="p"
            component="h2"
            color="text.secondary"
            sx={{
              fontSize: '20px',
              fontWeight: 400,
            }}
            align={'center'}
          >
            {description}
          </Typography>
        </Box>
        {/* <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'center' }}
          justifyContent={'center'}
        >
          <TryFreeButton
            component={'a'}
            variant="contained"
            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
            size="large"
            fullWidth={isMd ? false : true}
            text={primaryCta}
          />
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', sm: 'auto', md: 'auto' }}
          >
            <Button
              component={'a'}
              variant="outlined"
              color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
              size="large"
              fullWidth={isMd ? false : true}
            >
              {secondaryCTA}
            </Button>
          </Box>
        </Box> */}
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Container>
  );
};

export default ThankYouPage;

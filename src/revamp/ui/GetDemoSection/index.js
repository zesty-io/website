import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const acorns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Acorns%20Logo.svg',
  bjs = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/BJ's%20Logo.svg`,
  rocketLeague = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Horizontal_Text.svg`,
  cornershop = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Logo_de_Cornershop%201.svg`,
  phoenixSuns = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Phoenix%20Suns.svg`,
  singlife = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Singlife%20Logo.svg`,
  sony = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Sony%20Logo.svg`,
  wattpad = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Wattpad-logo-vector%201.svg`,
  pic1 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_HighPerformer_HighPerformer.png`,
  pic2 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_EasiestToDoBusinessWith_EaseOfDoingBusinessWith.png`,
  pic3 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/WebContentManagement_MomentumLeader_Leader.png`;
const GetDemoSection = ({
  title = 'Get Demo',
  supportingText = `Want to see how Zesty can help you and your teams? Fill out the form to be contacted by our content management experts.

Please look forward to us scheduling a 15 minute call so that we may customize your demo.`,
}) => {
  return (
    <Stack bgcolor="grey.900">
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            py: 10,
            px: 14,
            gap: 8,
          },
          [theme.breakpoints.up('desktopWide')]: {
            gap: 14,
          },
        })}
      >
        <Stack
          spacing={8}
          mb={{ xs: 8, lg: 0 }}
          width={{ lg: '456px', desktopWide: '548px' }}
          justifyContent={{ lg: 'center' }}
        >
          <Stack>
            <Typography
              variant="h1"
              fontWeight={800}
              letterSpacing="-0.02em"
              color="white"
              mb="12px"
            >
              {title}
            </Typography>
            <Typography
              whiteSpace="pre-line"
              color="grey.300"
              fontSize="18px"
              lineHeight="28px"
            >
              {supportingText}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              color="primary"
              mb="12px"
              textTransform="uppercase"
            >
              Trusted By
            </Typography>
            <Stack flexWrap="wrap" direction="row" gap="20px">
              <img src={sony} width="91px" height="32px" />
              <img src={rocketLeague} width="53.94px" height="32px" />
              <img src={singlife} width="102.12px" height="32px" />
              <img src={acorns} width="94px" height="32px" />
              <img src={phoenixSuns} width="107.54px" height="32px" />
              <img src={wattpad} width="115.91px" height="32px" />
              <img src={cornershop} width="96.69px" height="32px" />
              <img src={bjs} width="36.48px" height="32px" />
            </Stack>
          </Stack>
          <Stack>
            <Typography
              color="primary"
              variant="body2"
              mb="12px"
              textTransform="uppercase"
            >
              G2 MOMENTUM LEADER
            </Typography>
            <Stack flexWrap="wrap" direction="row" gap="20px">
              <img src={pic1} width="92.2px" height="120px" />
              <img src={pic2} width="92.2px" height="120px" />
              <img src={pic3} width="92.2px" height="120px" />
            </Stack>
          </Stack>
        </Stack>

        <Stack p={4} bgcolor="white" borderRadius="8px">
          <Stack>
            <Typography
              variant="h4"
              letterSpacing="-0.02em"
              color="text.primary"
              fontWeight={800}
              mb={3}
            >
              Contact us for a Custom Demo
            </Typography>

            <Stack spacing={2} direction="row" mb={3}>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  First Name
                </Typography>
                <TextField name="firstName" />
              </FormControl>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  Last Name
                </Typography>
                <TextField name="lastName" />
              </FormControl>
            </Stack>

            <Stack spacing={3}>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  Company
                </Typography>
                <TextField name="company" />
              </FormControl>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  Email
                </Typography>
                <TextField name="email" />
              </FormControl>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  Phone
                </Typography>
                <TextField name="phone" />
              </FormControl>
              <FormControl fullWidth sx={{ '& input': { padding: '6px 8px' } }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight={600}
                >
                  Please tell us about your project
                </Typography>
                <TextField multiline name="tellUs" rows={5} />
              </FormControl>

              <Button variant="contained" size="extraLarge" fullWidth>
                Schedule Demo
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GetDemoSection;

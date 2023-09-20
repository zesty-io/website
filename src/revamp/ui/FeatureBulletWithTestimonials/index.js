import { Box, Divider, Stack, Typography } from '@mui/material';
import { CheckRounded as CheckRoundedIcon } from '@mui/icons-material';
import { generateAlt } from 'utils';

const featureContent = 'https://kfg6bckb.media.zestyio.com/supportImage.webp',
  logo = 'https://kfg6bckb.media.zestyio.com/experiom.png';

const listItems = [
  'Live chat support for business customers',
  'Expert consultation on implementation and architecture',
  'Data migration and development assistance',
];

const FeatureBulletWithTestimonials = ({
  overline = 'WHITE GLOVE SUPPORT',
  heading = 'Migration Included in Businesses Licenses',
  supportingText = `Once you get started, our onboarding experience consists of a 360 degree review by Zesty experts. You can expect a dedicated partner to provide white glove support throughout the entire process. Plus, we offer training to help you get the most out of your investment.`,
  image = featureContent,
  testimonial = `“We love Zesty’s top-tier support, easy-to-use interfaces for both business and technical users, and their ability to keep the platform as modern as possible with very little legacy baggage.”

- Tony Cox, Managing Principal at Experiom`,
  testimonialLogo = logo,
  lists = listItems,
  isImageRight = true,
}) => {
  return (
    <Stack
      mb={{ xs: 3, tablet: 6 }}
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent={{ desktopWide: 'center' }}
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          py: 10,
          px: 14,
          gap: 8,
        },
      })}
    >
      <Stack
        mb={{ xs: 3, tablet: 6, lg: 0 }}
        sx={{ width: { lg: '456px', desktopWide: '576px' } }}
        py={{ desktopWide: '53.5px' }}
        order={{ lg: isImageRight ? 0 : 1 }}
      >
        <Typography variant="body2" fontWeight={600} color="primary" mb="12px">
          {overline}
        </Typography>
        <Typography
          color="text.primary"
          letterSpacing="-0.02em"
          fontWeight={800}
          variant="h2"
          mb="12px"
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              fontSize: '32px',
              lineHeight: '40px',
            },
          })}
        >
          {heading}
        </Typography>
        <Typography
          color="text.secondary"
          fontSize="18px"
          lineHeight="28px"
          mb={{ xs: '12px' }}
        >
          {supportingText}
        </Typography>

        <Stack rowGap="16px" mb={{ xs: 3, lg: 4 }}>
          {lists.map((list) => (
            <Stack direction="row" columnGap="12px" key={list}>
              <CheckRoundedIcon color="primary" />
              <Typography color="text.secondary">{list}</Typography>
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ background: 'grey.100', mb: { xs: 3, lg: 4 } }} />

        <Stack spacing={2}>
          <Typography
            whiteSpace="pre-line"
            fontSize="18px"
            lineHeight="28px"
            color="text.secondary"
          >
            {testimonial}
          </Typography>
          <img
            alt={generateAlt('')}
            loading="lazy"
            src={testimonialLogo}
            width="110.44px"
            height="40px"
          />
        </Stack>
      </Stack>
      <Stack
        justifyContent={{ lg: 'center' }}
        mb={{
          xs: !isImageRight && 3,
          tablet: !isImageRight && 6,
          lg: !isImageRight && 0,
        }}
        order={{ lg: isImageRight ? 1 : 0 }}
      >
        <Box
          component="img"
          alt={generateAlt('')}
          loading="lazy"
          src={image}
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              objectFit: 'contain',
              maxWidth: '100%',
              height: '100%',
            },
            // [theme.breakpoints.up('mobile')]: {
            //   maxWidth: '704px',
            //   height: '343px',
            // },
            [theme.breakpoints.up('tablet')]: {
              maxWidth: '100%',
              height: '420px',
            },
            [theme.breakpoints.up('lg')]: {
              maxWidth: '456px',
              height: '100%',
            },
            [theme.breakpoints.between(1201, 1439)]: {
              maxWidth: '100%',
              height: '520px',
            },
            [theme.breakpoints.up('desktopWide')]: {
              maxWidth: '576px',
              height: '100%',
            },
          })}
        />
      </Stack>
    </Stack>
  );
};

export default FeatureBulletWithTestimonials;

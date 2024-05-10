import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

export const PricingTierCard = ({ tier }) => {
  const theme = useTheme();
  const {
    title,
    description,
    price,
    primary_cta_label,
    primary_cta_link,
    secondary_cta_label,
    secondary_cta_link,
    main_features,
    key_features,
  } = tier;
  return (
    <Card
      sx={{
        margin: 0,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'column' },
        padding: { md: '48px', sm: '64px', xs: '32px' },
        borderRadius: '40px',
        boxShadow:
          title === 'Growth'
            ? '0px 21.76px 75.25px 0px rgba(0, 0, 0, 0.1), 0px 4.53px 16.32px 0px rgba(0, 0, 0, 0.15), 0px 1.81px 5.44px 0px rgba(0, 0, 0, 0.1)'
            : 'none',
        width: '100%',
        minHeight: { xs: '400px', sm: '400px', md: '640px', lg: '720px' },
        backgroundColor: title === 'Growth' ? 'white' : '#F2F4F7',
      }}
    >
      <Box
        sx={{
          flex: { xs: 0, sm: 1, md: 0 },
          paddingRight: { md: '32px' },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            fontWeight: 'bold',
            textAlign: 'left',
            fontSize: { sm: '40px', xs: '36px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'left',
            fontSize: '16px',
            mb: 3,
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'left',
            fontSize: '28px',
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          {price}
        </Typography>
        <Button
          href={primary_cta_link}
          variant="contained"
          color="secondary"
          sx={{
            mb: 4,
          }}
        >
          {primary_cta_label}
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        {main_features && (
          <MuiMarkdown
            options={{
              overrides: {
                ul: {
                  component: 'ul',
                  props: {
                    style: {
                      listStyle: 'none',
                      padding: 0,
                    },
                  },
                },
                li: {
                  component: Typography,
                  props: {
                    component: 'li',
                    sx: {
                      fontSize: '16px',
                      fontWeight: 400,
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'left',
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.zesty.zestyZambezi,
                        paddingRight: '1rem',
                      },
                    },
                  },
                },
              },
            }}
          >
            {main_features}
          </MuiMarkdown>
        )}
        <Divider sx={{ mt: 2, mb: 3 }} />
        <Typography
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            fontWeight: 400,
            textAlign: 'left',
            fontSize: '16px',
          }}
        >
          {title === 'Free'
            ? 'Key Features'
            : title === 'Growth'
            ? 'Everything in Free, plus'
            : 'Everythin in Growth, plus'}
        </Typography>
        {key_features && (
          <MuiMarkdown
            options={{
              overrides: {
                ul: {
                  component: 'ul',
                  props: {
                    style: {
                      listStyle: 'none',
                      padding: 0,
                    },
                  },
                },
                li: {
                  component: Typography,
                  props: {
                    component: 'li',
                    sx: {
                      fontSize: '16px',
                      fontWeight: 400,
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'left',
                      '&::before': {
                        content: '"✔"',
                        color: theme.palette.zesty.zestyZambezi,
                        paddingRight: '1.5rem',
                      },
                    },
                  },
                },
              },
            }}
          >
            {key_features}
          </MuiMarkdown>
        )}
      </Box>
    </Card>
  );
};

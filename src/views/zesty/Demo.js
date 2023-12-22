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
import { React } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  alpha,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import revampTheme from 'theme/revampTheme';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';
import { G2Awards, Logos } from 'revamp/ui/GetDemoSection';

const Demo = ({ content }) => {
  const theme = useTheme();

  const cardData = content?.dynamic_contact_page?.data;
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <EngageTypeCards cardData={cardData} />
      {/* <GetDemoSection /> */}
    </ThemeProvider>
  );
};

export default Demo;

function EngageTypeCards({ cardData }) {
  const theme = useTheme();
  return (
    <Stack
      bgcolor="grey.900"
      py={{ xs: 4, tablet: 6, lg: 10 }}
      px={{ xs: 2, tablet: 4, lg: 14 }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Stack mb={{ xs: 4, lg: 5 }}>
        <Typography
          py={0}
          fontWeight={800}
          fontSize={{ xs: 36, tablet: 52 }}
          lineHeight={{ xs: '44px', tablet: '56px' }}
          mb={{ xs: 2, tablet: '24px' }}
          letterSpacing="-0.02em"
          color="#fff"
        >
          How would you like to engage?
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ width: '100%', maxWidth: 1200 }}>
        {cardData.map((item) => {
          return (
            <Grid
              key={item}
              component={Link}
              href={item.button_link || '#'}
              sx={{ textDecoration: 'none' }}
              item
              xs={12}
              md={4}
            >
              <Stack
                height={'100%'}
                minHeight={220}
                component={Card}
                sx={{
                  '&:hover': {
                    background: theme.palette.grey[200],
                  },
                }}
                borderRadius="8px"
              >
                <Stack sx={{ height: '100%' }}>
                  <Box
                    p="20px"
                    spacing={1}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      letterSpacing="-0.02em"
                      color="text.primary"
                      fontWeight={600}
                    >
                      {item?.title || ''}
                    </Typography>

                    <ArrowForwardRoundedIcon
                      sx={{
                        width: '16px',
                        height: '16px',
                        alignSelf: 'center',
                        fill: alpha(theme.palette.grey[900], '.4'),
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      mb: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack gap={2} px="20px">
                      <MuiMarkdown
                        options={{
                          overrides: {
                            p: {
                              component: Typography,
                              props: {
                                sx: { textAlign: 'left' },
                                color: 'text.secondary',
                              },
                            },
                          },
                        }}
                      >
                        {item?.description || ''}
                      </MuiMarkdown>
                    </Stack>

                    <Button sx={{ mx: 2 }} variant="contained" size="medium">
                      {item?.button_text || ''}
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={4} sx={{ width: '100%', maxWidth: 1200, mt: 8 }}>
        <Grid item xs={12} md={6}>
          <Logos />
        </Grid>
        <Grid item xs={12} md={6}>
          <G2Awards />
        </Grid>
      </Grid>
    </Stack>
  );
}

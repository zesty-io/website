import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import FeatureItem from '../FeatureItem/FeatureItem';
import Container from 'components/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import FillerContent from 'components/globals/FillerContent';

const pricingHero = ({ title, subtitle, tiers = [] }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3} paddingY={1}>
          <Box marginTop={10}>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                color="text.primary"
                align={'center'}
                sx={{ px: 6 }}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container paddingY={1}>
        <Grid container spacing={4}>
          {tiers.map((item, i) => (
            <Grid item xs={12} md={i == 0 ? 12 : 4} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                variant={'outlined'}
              >
                <CardContent
                  sx={{
                    padding: 4,
                  }}
                >
                  <Box marginBottom={2}>
                    <Box display={'flex'}>
                      <Typography variant={'h4'} fontWeight={600} gutterBottom>
                        {item.name}
                      </Typography>

                      {/* Sandbox Button  */}
                      {i == 0 && isMd && (
                        <TryFreeButton
                          component={'a'}
                          variant="contained"
                          size="large"
                          fullWidth={isMd ? false : true}
                          text={
                            (item.button_cta?.data &&
                              item?.button_cta?.data[0]?.button_text) ||
                            FillerContent.cta
                          }
                          sx={{ marginLeft: 'auto' }}
                        />
                      )}
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'baseline'}
                    marginBottom={2}
                  >
                    {i != 0 && (
                      <Typography variant={'h3'} fontWeight={700}>
                        <Typography
                          sx={{
                            visibility:
                              item.price === 'Custom' ? 'hidden' : 'visible',
                          }}
                          variant="p"
                          component={'p'}
                          fontSize={20}
                          paddingBottom={1}
                        >
                          Starts at
                        </Typography>
                        {item.price}
                      </Typography>
                    )}
                  </Box>

                  {/* SandBox Section  */}
                  {i == 0 && (
                    <>
                      <Grid container>
                        <Grid item md={6} xs={12}>
                          {item.content_records ? (
                            <FeatureItem text={item.content_records} />
                          ) : null}
                          {item.users ? (
                            <FeatureItem text={item.users} />
                          ) : null}
                          {item.features ? (
                            <FeatureItem text={item.features} />
                          ) : null}
                        </Grid>
                        <Grid item md={6} xs={12}>
                          {item.domain ? (
                            <FeatureItem text={item.domain} />
                          ) : null}
                          {item.data_plan ? (
                            <FeatureItem text={item.data_plan} />
                          ) : null}
                        </Grid>
                      </Grid>
                      {!isMd && (
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                          <TryFreeButton
                            component={'a'}
                            variant="contained"
                            size="large"
                            fullWidth={isMd ? false : true}
                            text={
                              (item.button_cta?.data &&
                                item?.button_cta?.data[0]?.button_text) ||
                              FillerContent.cta
                            }
                          />
                        </CardActions>
                      )}
                    </>
                  )}

                  {/* Standard  Business Enterprise Section */}
                  {i != 0 && (
                    <>
                      {item.content_records ? (
                        <FeatureItem text={item.content_records} />
                      ) : null}
                      {item.users ? <FeatureItem text={item.users} /> : null}
                      {item.features ? (
                        <FeatureItem text={item.features} />
                      ) : null}
                      {item.domain ? <FeatureItem text={item.domain} /> : null}
                      {item.data_plan ? (
                        <FeatureItem text={item.data_plan} />
                      ) : null}
                      {item.support ? (
                        <FeatureItem text={item.support} />
                      ) : null}
                      {item.feature1 ? (
                        <FeatureItem text={item.feature1} />
                      ) : null}
                      {item.feature2 ? (
                        <FeatureItem text={item.feature2} />
                      ) : null}
                      {item.feature3 ? (
                        <FeatureItem text={item.feature3} />
                      ) : null}
                      {item.feature4 ? (
                        <FeatureItem text={item.feature4} />
                      ) : null}
                      {item.feature5 ? (
                        <FeatureItem text={item.feature5} />
                      ) : null}
                    </>
                  )}
                </CardContent>

                {/* Standard and Business Buttons  */}
                {i != 0 && i != 3 && (
                  <>
                    <Box flexGrow={1} />
                    <CardActions
                      sx={{ justifyContent: 'flex-end', padding: 4 }}
                    >
                      <TryFreeButton
                        target={FillerContent.href}
                        component={'a'}
                        variant="contained"
                        size="large"
                        fullWidth={isMd ? false : true}
                        text={
                          (item.button_cta?.data &&
                            item?.button_cta?.data[0]?.button_text) ||
                          FillerContent.cta
                        }
                      ></TryFreeButton>
                    </CardActions>
                  </>
                )}

                {/* Show this button in Enterprise table only  */}
                {i == 3 && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: 4,
                    }}
                  >
                    <Button
                      href={
                        (item.button_cta?.data &&
                          item.button_cta?.data[0]?.internal_link?.data &&
                          item.button_cta?.data[0]?.internal_link?.data[0]?.meta
                            ?.web?.url) ||
                        FillerContent.href
                      }
                      variant="contained"
                      color="secondary"
                      size="large"
                      fullWidth={isMd ? false : true}
                    >
                      {(item.button_cta?.data &&
                        item?.button_cta?.data[0]?.button_text) ||
                        FillerContent.cta}
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default pricingHero;

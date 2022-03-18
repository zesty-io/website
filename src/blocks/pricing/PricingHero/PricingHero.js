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



const pricingHero = ({title, subtitle, tiers=[]}) => {
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
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
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
                component="p"
                color="text.primary"
                align={'center'}
                sx={{ px: 6 }}
                dangerouslySetInnerHTML={{__html: subtitle}}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {tiers.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
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
                    <Typography variant={'h4'} fontWeight={600} gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography color={'text.secondary'}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'baseline'}
                    marginBottom={2}
                  >
                    <Typography variant={'h3'} fontWeight={700}>
                      {/*
                      {pricingOption === 'annual'
                        ? item.price.annual
                        : item.price.monthly}
                    */}
                      {item.price}
                    </Typography>
                    {/*<Typography
                      variant={'subtitle1'}
                      color={'text.secondary'}
                      fontWeight={700}
                    >
                      {pricingOption === 'annual' ? '/' : '/mo'}
                    </Typography>*/}
                  </Box>
                  {item.content_records? <FeatureItem text={item.content_records}/>:null}
                  {item.content_records?<FeatureItem text={item.content_records}/>:null}
                  {item.users?<FeatureItem text={item.users}/>:null}
                  {item.features?<FeatureItem text={item.features}/>:null}
                  {item.domain?<FeatureItem text={item.domain}/>:null}
                  {item.data_plan?<FeatureItem text={item.data_plan}/>:null}
                  {item.support?<FeatureItem text={item.support}/>:null}
                  {item.feature1?<FeatureItem text={item.feature1}/>:null}
                  {item.feature2?<FeatureItem text={item.feature2}/>:null}
                  {item.feature3?<FeatureItem text={item.feature3}/>:null}
                  {item.feature4?<FeatureItem text={item.feature4}/>:null}
                  {item.feature5?<FeatureItem text={item.feature5}/>:null}

                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <TryFreeButton
                 component={'a'}
                 variant="contained"
                 color="primary"
                 size="large"
                 fullWidth={isMd ? false : true}
                 text='Get Started'
                >
                </TryFreeButton>
                
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default pricingHero;

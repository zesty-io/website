/**
 *  MUI Imports
 */
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

/**
 *  Components Imports
 */
import CustomSlider from './CustomSlider';

function Calculator({ content, FillerContent, theme }) {
  /**
   * Sets Slider Initial Values and State
   */
  const [infrastructureValue, setInfrastructureValue] = useState(0);
  const [licensing, setLicensing] = useState(0);
  const [cmsSetup, setCmsSetup] = useState(0);
  const [ongoingSupport, setOngoingSupport] = useState(0);
  const [additionalSoftware, setAdditionalSoftware] = useState(0);
  const [qaTesting, setQaTesting] = useState(0);
  const [intangibles, setIntangibles] = useState(0);
  const [standardCharges, setStandardCharges] = useState(0);

  const infraSettings = [
    {
      max: 100000,
      step: 5000,
      setter: setInfrastructureValue,
      value: infrastructureValue,
      title: 'infrastructure',
      info: 'tooltip information',
    },
    {
      max: 10000,
      step: 5000,
      setter: setLicensing,
      value: licensing,
      title: 'licensing',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setCmsSetup,
      value: cmsSetup,
      title: 'Cms setup',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setOngoingSupport,
      value: ongoingSupport,
      title: 'ongoing support',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setAdditionalSoftware,
      value: additionalSoftware,
      title: 'additional software',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setQaTesting,
      value: qaTesting,
      title: 'QA testing',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setIntangibles,
      value: intangibles,
      title: 'intangibles',
      info: 'tooltip information',
    },
    {
      max: 100000,
      step: 5000,
      setter: setStandardCharges,
      value: standardCharges,
      title: 'standard charges',
      info: 'tooltip information',
    },
  ];

  return (
    <Box
      sx={{
        py: 5,
        background: theme.palette.background.lightGrey,
      }}
      component="section"
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
              }}
            >
              {content.calculations_title || FillerContent.header}
            </Typography>
            <Card sx={{ mt: 2, py: 2, px: 4, overflow: 'inherit' }}>
              <CardContent>
                {/* Slider Start */}
                {infraSettings.map((settings, index) => (
                  <CustomSlider key={index} {...settings} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: theme.palette.zesty.zestyZambezi,
                fontWeight: 'bold',
              }}
            >
              {content.results_title || FillerContent.header}
            </Typography>
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Typography>INFRASTRUCTURE</Typography>
                <Tooltip title="Delete">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Calculator;

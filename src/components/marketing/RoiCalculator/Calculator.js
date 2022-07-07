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
  Button,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

/**
 *  Components Imports
 */
import CustomSlider from './CustomSlider';
import CustomDoubleSlider from './CustomDoubleSlider';

function Calculator({ content, FillerContent, theme }) {
  /**
   * Sets Slider Initial Values and State
   */
  const [infrastructureValue, setInfrastructureValue] = useState(0);
  const [licensing, setLicensing] = useState(0);
  const [cmsSetup, setCmsSetup] = useState(0);
  const [ongoingSupport, setOngoingSupport] = useState(0);
  const [additionalSoftware, setAdditionalSoftware] = useState(0);
  const [intangibles, setIntangibles] = useState(0);
  const [standardCharges, setStandardCharges] = useState(0);
  /**
   * Sets Double Slider Initial Values and State
   */
  const [qaTestingMarketer, setQaTestingMarketer] = useState({
    value: 30000,
    isActive: true,
  });

  const [qaTestingDeveloper, setQaTestingDeveloper] = useState({
    value: 75000,
    isActive: false,
  });

  const sliderOptions = [
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

  const doubleSliderOptions = [
    {
      max: 100000,
      step: 5000,
      setter: setQaTestingMarketer,
      data: qaTestingMarketer,
      isActive: true,
    },
    {
      max: 100000,
      step: 5000,
      setter: setQaTestingDeveloper,
      data: qaTestingDeveloper,
      isActive: false,
    },
  ];

  const currentCMSdata = [
    {
      name: 'Tradional',
      isActive: true,
    },
    {
      name: 'Headless',
      isActive: false,
    },
    {
      name: 'Custom/Home grown',
      isActive: false,
    },
    {
      name: 'DXP Suite',
      isActive: false,
    },
    {
      name: 'Others',
      isActive: false,
    },
  ];
  const [currentCMS, setCurrentCMS] = useState(currentCMSdata);

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
                color: theme.palette.zesty.zestyOrange,
                fontWeight: 'bold',
              }}
            >
              {content.calculations_title || FillerContent.header}
            </Typography>
            <Card sx={{ mt: 2, py: 2, px: 4, overflow: 'inherit' }}>
              <CardContent>
                {/* Slider Start */}
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                    }}
                  >
                    WHAT CMS ARE YOU CURRENTLY USING?
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    {currentCMS.map((item, index) => (
                      <Button
                        sx={{
                          background: item.isActive
                            ? theme.palette.zesty.zestyOrange
                            : theme.palette.secondary.whiteSmoke,
                          color: item.isActive
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                          '&:hover': {
                            color: theme.palette.common.white,
                          },
                        }}
                        variant="contained"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </Box>
                </Box>
                {sliderOptions.map((options, index) => (
                  <CustomSlider key={index} {...options} />
                ))}
                <CustomDoubleSlider doubleSliderOptions={doubleSliderOptions} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: theme.palette.zesty.zestyOrange,
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

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

import { useState } from 'react';

/**
 *  Components Imports
 */
import CustomSlider from './CustomSlider';
import CustomDoubleSlider from './CustomDoubleSlider';
import Results from './Results';

function Calculator({ content, FillerContent, theme }) {
  /**
   * Sets Slider Initial Values and State
   */
  const [infrastructureValue, setInfrastructureValue] = useState(0);
  const [cmsSetup, setCmsSetup] = useState(0);
  const [ongoingSupport, setOngoingSupport] = useState(0);
  const [additionalSoftware, setAdditionalSoftware] = useState(0);
  const [percentage, setPercentage] = useState(0);

  /**
   * Sets Double Slider Initial Values and State
   */

  const [qaTestingDeveloper, setQaTestingDeveloper] = useState({
    value: 0,
    isActive: true,
    name: ' Developer',
  });

  const [qaTestingMarketer, setQaTestingMarketer] = useState({
    value: 0,
    isActive: false,
    name: ' Marketer',
  });

  const [intangiblesDeveloper, setIntangiblesDeveloper] = useState({
    value: 0,
    isActive: true,
    name: ' Developer',
  });

  const [intangiblesMarketer, setIntangiblesMarketer] = useState({
    value: 0,
    isActive: false,
    name: ' Marketer',
  });
  const [standardChangesDeveloper, setStandardChangesDeveloper] = useState({
    value: 0,
    isActive: true,
    name: ' Developer',
  });

  const [standardChangesMarketer, setStandardChangesMarketer] = useState({
    value: 0,
    isActive: false,
    name: ' Marketer',
  });

  const resultValues = {
    qaTesting: {
      qaTestingDeveloper,
      qaTestingMarketer,
    },
    inTangibles: {
      intangiblesDeveloper,
      intangiblesMarketer,
    },
    standardChanges: {
      standardChangesDeveloper,
      standardChangesMarketer,
    },
  };

  const sliderOptions = [
    {
      max: 100,
      step: 1,
      setter: setPercentage,
      value: percentage,
      title: 'what PERCENT you could add in of revenue?',
      info: {
        header: 'Percentage',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'percent',
    },
    {
      max: 100000,
      step: 5000,
      setter: setInfrastructureValue,
      value: infrastructureValue,
      title: 'infrastructure',
      info: {
        header: 'Infrastructure Cost',
        description:
          'Infrastructure costs include all potential costs, including but not limited to: CMS/Software Hosting (Server Costs), Website Hosting (Server Costs), Endpoint Hosting (Server Costs), High Availability/Disaster Recovery, Content Delivery Network, Web Application Firewall, Stage Environments, and any other costs associated with infrastructure to create, deliver, and maintain your project.',
      },
      type: 'monthly',
    },
    {
      max: 100000,
      step: 5000,
      setter: setCmsSetup,
      value: cmsSetup,
      title: 'Cms setup',
      info: {
        header: 'Cms Setup',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'one time',
    },
    {
      max: 100000,
      step: 5000,
      setter: setOngoingSupport,
      value: ongoingSupport,
      title: 'ongoing support',
      info: {
        header: 'Ongoing Support',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'monthly',
    },
    {
      max: 100000,
      step: 5000,
      setter: setAdditionalSoftware,
      value: additionalSoftware,
      title: 'additional software',
      info: {
        header: 'Additional Software',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'monthly',
    },
  ];

  const doubleSliderOptions = [
    {
      title: 'qa testing',
      info: {
        header: 'qa testing',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'percent',
      options: [
        {
          max: 100,
          step: 1,
          setter: setQaTestingDeveloper,
          data: qaTestingDeveloper,
        },
        {
          max: 100,
          step: 1,
          setter: setQaTestingMarketer,
          data: qaTestingMarketer,
        },
      ],
    },
    {
      title: 'intangibles',
      info: {
        header: 'intangibles',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'percent',
      options: [
        {
          max: 100,
          step: 1,
          setter: setIntangiblesDeveloper,
          data: intangiblesDeveloper,
        },
        {
          max: 100,
          step: 1,
          setter: setIntangiblesMarketer,
          data: intangiblesMarketer,
        },
      ],
    },
    {
      title: 'standard changes',
      info: {
        header: 'standard changes',
        description:
          'Lorem ipsum dolor amet iset to mecarto Lorem ipsum dolor amet iset to mecarto',
      },
      type: 'percent',
      options: [
        {
          max: 100,
          step: 1,
          setter: setStandardChangesDeveloper,
          data: standardChangesDeveloper,
        },
        {
          max: 100,
          step: 1,
          setter: setStandardChangesMarketer,
          data: standardChangesMarketer,
        },
      ],
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
  /**
   * It takes in a string, and then it maps over the currentCMS state, and if the name of the object
   * matches the string, it sets the isActive property to true, otherwise it sets it to false
   * @param currentCMS - The name of the CMS that was clicked on.
   */
  const currentCMSHandler = (currentCMS) => {
    setCurrentCMS((current) =>
      current.map((obj) => {
        if (obj.name === currentCMS) {
          return { ...obj, isActive: true };
        } else {
          return { ...obj, isActive: false };
        }
      }),
    );
  };

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
          <Grid item xs={12} md={8}>
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
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}
                  >
                    {currentCMS.map((item, index) => (
                      <Button
                        key={index}
                        onClick={() => currentCMSHandler(item.name)}
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

                {doubleSliderOptions.map((options, index) => (
                  <CustomDoubleSlider key={index} {...options} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
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
            <Card
              sx={{
                height: '95.9%',
                mt: 2,
                px: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: `20px solid ${theme.palette.zesty.zestyOrange}`,
              }}
            >
              <CardContent>
                <Results resultValues={resultValues} theme={theme} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Calculator;

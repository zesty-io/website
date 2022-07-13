/**
 *  MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 *  React Imports
 */

import { useEffect, useState } from 'react';

/**
 *  Components Imports
 */
import Switch from './Switch';

const CustomDoubleSlider = ({ title, info, options }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  /**
   * @param value - The value of the slider.
   * @returns A function that takes in a value and returns a string with the value formatted as a
   * currency.
   */
  const generateFormat = (value, name) => {
    return (
      <Typography
        sx={{ fontWeight: ' bold', fontSize: 14, textAlign: 'center' }}
        component="span"
      >
        {value.toLocaleString()} hours <br />
        <Typography
          sx={{
            fontSize: 12,
            textAlign: 'center',
            margin: 'auto',
            display: 'block',
            mt: -0.8,
          }}
          component="span"
        >
          {name}
        </Typography>{' '}
      </Typography>
    );
  };

  /**
   * `handleChange` is a function that takes an event as an argument, and sets the value of the input to
   * the value of the event
   * @param e - the event object
   */
  const handleChange = (e, setter) => {
    setter((prev) => ({ ...prev, value: e.target.value }));
  };

  /**
   * sets inital values for switch
   */
  const [developer, setDeveloper] = useState(false);
  const [marketer, setMarketer] = useState(true);

  /**
   * `switchHandler` is a function that sets the state of `marketer` and  `developer` to the opposite of its current state
   * maintaining one active state between two
   */
  const switchHandler = (e) => {
    setMarketer(!marketer);
    setDeveloper(!developer);

    /* Setting the state of the slider to active or inactive depending on the state of the switch. */
    if (marketer) {
      options[0].setter((prev) => ({ ...prev, isActive: true }));
      options[1].setter((prev) => ({ ...prev, isActive: false }));
    }

    if (developer) {
      options[0].setter((prev) => ({ ...prev, isActive: false }));
      options[1].setter((prev) => ({ ...prev, isActive: true }));
    }
  };

  /* Calling the switchHandler function when the component mounts. */
  useEffect(() => {
    switchHandler();
  }, []);

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.zesty.zestyZambezi,
          }}
        >
          {title.toUpperCase()}
        </Typography>
        <Tooltip
          PopperProps={{
            sx: {
              '& .MuiTooltip-tooltip': {
                maxWidth: 500,
                backgroundColor: theme.palette.zesty.zestyWhite,

                '& p': {
                  color: theme.palette.zesty.zestyZambezi,
                },
              },
              '& .MuiTooltip-arrow': {
                color: theme.palette.zesty.zestyWhite,
              },
            },
          }}
          placement={isMedium ? 'top' : 'right'}
          arrow={true}
          sx={{
            color: theme.palette.zesty.zestyLightText,
          }}
          title={
            <Box sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 'bold', mb: 1.5 }} variant="body1">
                {info.header}
              </Typography>
              <Typography
                sx={{ lineHeight: 1.2 }}
                component="p"
                variant="body1"
              >
                {info.description}
              </Typography>
            </Box>
          }
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {options.map((item, index) => (
          <Slider
            key={index}
            disabled={!item.data.isActive}
            max={item.max}
            step={item.step}
            value={item.data.value}
            aria-label="Default"
            valueLabelDisplay="on"
            onChange={(e) => handleChange(e, item.setter)}
            color="secondary"
            valueLabelFormat={() =>
              generateFormat(item.data.value, item.data.name)
            }
            sx={{
              position: item.data.isActive ? 'absolute' : '',
              left: item.data.isActive ? 0 : '',
              top: item.data.isActive ? 8 : '',
              mt: item.data.isActive ? 0 : 1,
              zIndex: item.data.isActive ? 1 : 0,
              '& .MuiSlider-rail': {
                background: item.data.isActive
                  ? 'transparent'
                  : theme.palette.background.grey,
                height: 8,
              },
              '& .MuiSlider-thumb': {
                border: item.data.isActive ? '3px solid white' : '',
                background: item.data.isActive ? '' : 'transparent',
              },
              '& .MuiSlider-valueLabel': {
                background: !item.data.isActive
                  ? ''
                  : theme.palette.primary.main,
                borderRadius: 1,
                fontWeight: 'bold',
                right:
                  item.value >= item.max
                    ? null
                    : item.value === 0
                    ? '-60px'
                    : !item.data.isActive
                    ? '-30px'
                    : '-90px',
                top:
                  item.value >= item.max
                    ? '-15px'
                    : !item.data.isActive
                    ? '-22px'
                    : '20px',
                '&::before': {
                  left: !item.data.isActive
                    ? ''
                    : item.value >= item.max
                    ? '50%'
                    : 0,
                  top: !item.data.isActive
                    ? ''
                    : item.value >= item.max
                    ? null
                    : '40%',
                },
              },
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{ color: theme.palette.zesty.zestyLightText, mt: -1 }}
            variant="Subtitle1"
            component={'p'}
          >
            {/* {`$${value.toLocaleString()}/month`} */}
          </Typography>
        </Box>
        <Box>
          <Switch
            {...{ marketer, developer }}
            switchHandler={switchHandler}
            theme={theme}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomDoubleSlider;

/**
 *  MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';
import { FamilyRestroom } from '@mui/icons-material';
import { useState } from 'react';
import Switch from './Switch';

const CustomDoubleSlider = ({ doubleSliderOptions }) => {
  const theme = useTheme();

  /**
   * @param value - The value of the slider.
   * @returns A function that takes in a value and returns a string with the value formatted as a
   * currency.
   */
  const generateFormat = (value) => {
    return `$ ${value.toLocaleString()}`;
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
  const [marketer, setMarketer] = useState(false);
  const [developer, setDeveloper] = useState(true);

  /**
   * `switchHandler` is a function that sets the state of `marketer` and  `developer` to the opposite of its current state
   * maintaining one active state between two
   */
  const switchHandler = () => {
    setMarketer(!marketer);
    setDeveloper(!developer);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.zesty.zestyZambezi,
          }}
        >
          {/* {title.toUpperCase()} */} Test
        </Typography>
        <Tooltip
          sx={{
            color: theme.palette.zesty.zestyLightText,
          }}
          placement="top"
          title={'info'}
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {doubleSliderOptions.map((item) => (
          <Slider
            disabled={!item.isActive}
            max={item.max}
            step={item.step}
            value={item.data.value}
            aria-label="Default"
            valueLabelDisplay="on"
            onChange={(e) => handleChange(e, item.setter)}
            color="secondary"
            valueLabelFormat={() => generateFormat(item.data.value)}
            sx={{
              position: item.isActive ? 'absolute' : '',
              left: item.isActive ? 0 : '',
              top: item.isActive ? 8 : '',
              mt: item.isActive ? 0 : 1,
              zIndex: item.isActive ? 1 : 0,
              '& .MuiSlider-rail': {
                background: item.isActive
                  ? 'transparent'
                  : theme.palette.background.grey,
                height: 8,
              },
              '& .MuiSlider-thumb': {
                border: '3px solid white',
              },
              '& .MuiSlider-valueLabel': {
                background: theme.palette.primary.main,
                borderRadius: 1,
                fontWeight: 'bold',
                right:
                  item.value >= item.max
                    ? null
                    : item.value === 0
                    ? '-60px'
                    : '-90px',
                top: item.value >= item.max ? '-15px' : '20px',
                '&::before': {
                  left: item.value >= item.max ? '50%' : 0,
                  top: item.value >= item.max ? null : '15%',
                },
              },
            }}
          />
        ))}
        {/* <Slider
          max={max}
          step={step}
          value={value}
          aria-label="Default"
          valueLabelDisplay="on"
          onChange={handleChange}
          color="secondary"
          valueLabelFormat={() => generateFormat(value)}
          sx={{
            position: 'absolute',
            left: 0,
            top: 7,
            '& .MuiSlider-rail': {
              background: theme.palette.background.grey,
              height: 8,
            },
            '& .MuiSlider-thumb': {
              border: '3px solid white',
            },
            '& .MuiSlider-valueLabel': {
              background: theme.palette.primary.main,
              borderRadius: 1,
              fontWeight: 'bold',
              right: value >= max ? null : value === 0 ? '-60px' : '-90px',
              top: value >= max ? '-15px' : '20px',
              '&::before': {
                left: value >= max ? '50%' : 0,
                top: value >= max ? null : '15%',
              },
            },
          }}
        /> */}
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
            onClick={switchHandler}
            theme={theme}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomDoubleSlider;

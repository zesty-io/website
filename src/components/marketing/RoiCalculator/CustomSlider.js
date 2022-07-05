/**
 *  MUI Imports
 */
import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

const CustomSlider = ({ max, step, value, setter, title, info }) => {
  const theme = useTheme();

  /**
   * @param value - The value of the slider.
   * @returns A function that takes in a value and returns a string with the value formatted as a
   * currency.
   */
  const generateFormat = (value) => {
    return `$ ${value.toLocaleString()}`;
  };

  const handleChange = (e) => {
    setter(e.target.value);
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
          {title.toUpperCase()}
        </Typography>
        <Tooltip
          sx={{
            color: theme.palette.zesty.zestyLightText,
          }}
          placement="top"
          title={info}
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Slider
        max={max}
        step={step}
        value={value}
        aria-label="Default"
        valueLabelDisplay="on"
        onChange={handleChange}
        color="secondary"
        valueLabelFormat={() => generateFormat(value)}
        sx={{
          mt: 1,
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
      />
      <Typography
        sx={{ color: theme.palette.zesty.zestyLightText, mt: -1 }}
        variant="Subtitle1"
        component={'p'}
      >
        {`$${value.toLocaleString()}/month`}
      </Typography>
    </Box>
  );
};

export default CustomSlider;

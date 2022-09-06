import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Grid, Typography } from '@mui/material';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// https protocol dropdown
const SettingsDropdown = ({ options, keyVal, initialVal }) => {
  const [http, setHttp] = useState(initialVal);

  const handleChange = (event) => {
    setHttp(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 80 }} size={'small'}>
      <InputLabel id="http-setting">http</InputLabel>
      <Select
        labelId="http-setting"
        id="demo-simple-select-helper"
        value={http}
        label="http"
        onChange={handleChange}
      >
        {options?.map((option) => (
          <MenuItem value={option} key={keyVal}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {/* <FormHelperText>With label + helper text</FormHelperText> */}
    </FormControl>
  );
};
// domain setting toggle
const SettingsToggle = ({ options, keyVal, initialVal }) => {
  const [alignment, setAlignment] = useState(initialVal);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    // add funtionality to change setting here
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      key={keyVal}
      size={'small'}
    >
      {options?.map((option) =>
        option == '0' ? (
          <ToggleButton value={option} key={keyVal}>
            No
          </ToggleButton>
        ) : (
          <ToggleButton value={option} key={keyVal}>
            Yes
          </ToggleButton>
        ),
      )}
    </ToggleButtonGroup>
  );
};

export default function HttpSettings({ settings }) {
  const [formattedSettings, setformattedSettings] = useState([]);

  useEffect(() => {
    const format = settings.map((setting) => ({
      ...setting,
      options: setting.options.split(','),
    }));
    console.log(
      '🚀 ~ file: HttpSettings.js ~ line 83 ~ format ~ format',
      format,
    );
    setformattedSettings(format);
  }, [settings.length]);

  return (
    <Box mt={2}>
      {formattedSettings?.map((setting) => (
        <Grid container key={setting.key} mb={2}>
          <Grid item xs={9} alignContent={'center'} alignSelf={'center'}>
            <Typography variant="subtitle1">{setting.keyFriendly}</Typography>
          </Grid>
          <Grid item xs={3}>
            {setting.key === 'site_protocol' ? (
              <SettingsDropdown
                options={setting.options}
                keyVal={setting.key}
                initialVal={setting.value}
              />
            ) : (
              <SettingsToggle
                options={setting.options}
                keyVal={setting.key}
                initialVal={setting.value}
              />
            )}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

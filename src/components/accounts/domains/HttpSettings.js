import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
import { Box, Button, Grid, Typography } from '@mui/material';
import * as helper from 'utils';

import { ColorToggleButton } from '../ui';

// // https protocol dropdown
// const SettingsDropdown = ({ data, options, keyVal, initialVal }) => {
//   console.log(data, 4444);
//   const [http, setHttp] = useState(initialVal);

//   const handleChange = (event) => {
//     setHttp(event.target.value);
//   };

//   return (
//     <FormControl sx={{ minWidth: 80 }} size={'small'}>
//       <InputLabel id="http-setting">http</InputLabel>
//       {/* <Select
//         labelId="http-setting"
//         id="demo-simple-select-helper"
//         value={http}
//         label="http"
//         onChange={handleChange}
//       >
//         {options?.map((option) => (
//           <MenuItem value={option} key={keyVal}>
//             {option}
//           </MenuItem>
//         ))}
//       </Select> */}
//       {/* <FormHelperText>With label + helper text</FormHelperText> */}
//     </FormControl>
//   );
// };

const OPTIONS = (options, separator) => {
  const res = options?.split(separator).map((e) => {
    return { value: e, label: e };
  });
  return res;
};

// domain setting toggle
const SettingsToggle = ({
  data,
  updateSetting,
  arrToSubmit,
  setarrToSubmit,
}) => {
  const { options, value } = data;

  const handleAdd = async (value) => {
    data['value'] = value;
    setarrToSubmit([...arrToSubmit, data]);
    // await updateSetting(data);
  };

  return (
    <ColorToggleButton
      value={value}
      options={OPTIONS(options, ',')}
      handleAdd={handleAdd}
    />
  );
};

export default function HttpSettings({ settings, updateSetting }) {
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const handleUpdateSetting = async (data) => {
    updateSetting(data);
    setarrToSubmit(arrToSubmit.filter((e) => e.ZUID !== data.ZUID));
  };
  // const [formattedSettings, setformattedSettings] = useState([]);

  // useEffect(() => {
  //   const format = settings.map((setting) => ({
  //     ...setting,
  //     options: setting.options.split(','),
  //   }));
  //   console.log(
  //     '🚀 ~ file: HttpSettings.js ~ line 83 ~ format ~ format',
  //     format,
  //   );
  //   setformattedSettings(settings);
  // }, [settings.length]);

  return (
    <Box mt={2}>
      {settings?.map((setting) => {
        const isDataChange = helper
          .removeDupsInArrObj(arrToSubmit, 'keyFriendly')
          .find((x) => x.ZUID === setting.ZUID);
        return (
          <Grid container key={setting.key} mb={2} spacing={1}>
            <Grid item xs={8} alignContent={'center'} alignSelf={'center'}>
              <Typography variant="subtitle1">{setting.keyFriendly}</Typography>
            </Grid>
            <Grid item xs={3}>
              <SettingsToggle
                arrToSubmit={arrToSubmit}
                setarrToSubmit={setarrToSubmit}
                data={setting}
                updateSetting={updateSetting}
              />
            </Grid>
            <Grid item xs={1}>
              {isDataChange && (
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdateSetting(setting)}
                >
                  Save
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Container from 'components/Container';

const CustomSelect = () => {
  const [brightness, setBrightness] = React.useState(10);

  const handleChange = (event) => {
    setBrightness(event.target.value);
  };

  return (
    <Container maxWidth={400}>
      <Box sx={{ minWidth: 120 }}>
        <Typography marginBottom={4}>Choose the screen brightness</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Screen brightness
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brightness}
            label="Screen brightness"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              <Box display={'flex'} alignItems={'center'}>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  marginRight={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </Box>
                <Typography>Light</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={20}>
              <Box display={'flex'} alignItems={'center'}>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  marginRight={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </Box>
                <Typography>Dark</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={30}>
              <Box display={'flex'} alignItems={'center'}>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  marginRight={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </Box>
                <Typography>System</Typography>
              </Box>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};

export default CustomSelect;

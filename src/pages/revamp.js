import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';
import Hero from 'revamp/ui/Hero';
import Hero2 from 'revamp/ui/Hero/index2';
import revampTheme from 'theme/revampTheme';

const components = ['hero', 'hero2'];
const revamp = () => {
  const [component, setComponent] = useState('');

  const renderComponent = () => {
    if (component === 'hero') return <Hero />;
    if (component === 'hero2') return <Hero2 />;

    return 'Please select a component';
  };

  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      {renderComponent()}

      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel id="demo-simple-select-label">Component</InputLabel>
        <Select
          value={component}
          label="Component"
          onChange={(e) => setComponent(e.target.value)}
        >
          {components.map((asdf, index) => (
            <MenuItem key={index} value={asdf}>
              {asdf}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default revamp;

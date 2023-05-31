import * as zestyBlocks from 'blocks/layoutsBlocks';
import { useContext } from 'react';
import { GlobalContext } from 'pages/[[...zesty]]';
import { Box, ThemeProvider, useTheme } from '@mui/material';
import revampTheme from 'theme/revampTheme';
import { ErrorBoundary } from 'react-error-boundary';

const ComponentSelector = (props) => {
  const theme = useTheme();
  // Initialize Context
  const ctx = useContext(GlobalContext);

  // Grab component name from react-auto-layout
  const componentName = props.data.name;

  // Map component from react-auto-layout to nextjs component
  const Component = zestyBlocks[componentName];

  // check if ther's an error hydrating data

  if (props.data.name.toLowerCase() in ctx) {
    // Read the context and grab component data
    const content = ctx[props.data.name.toLowerCase()]?.data[0];

    // console.log('content', content);
    return <Component {...content} />;
  }

  // return component without data by default
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <ErrorBoundary
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4,
              backgroundColor: '#FF5D0A',
              color: '#fff',
            }}
          >
            Something went wrong, kindly check component!
          </Box>
        }
      >
        <Component />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default ComponentSelector;

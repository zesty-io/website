import * as zestyBlocks from 'blocks/layoutsBlocks';
import { useContext } from 'react';
import { GlobalContext } from 'pages/[...slug]';
import { ThemeProvider } from '@mui/material';
import revampTheme from 'theme/revampTheme';

const ComponentSelector = (props) => {
  // Initialize Context
  const ctx = useContext(GlobalContext);

  // Grab component name from react-auto-layout
  const componentName = props.data.name;

  // Map component from react-auto-layout to nextjs component
  const Component = zestyBlocks[componentName];

  /**
   * @description - This condition block, check if the layout component is defined in the content schema as well
   * if the layout component has the same field name in schema it will check if data exist and use that data from content
   *
   * Note! this block was used in the older version of layout component, this might be deprecated in the future as we build new solution
   */
  if (props.data.name.toLowerCase() in ctx) {
    // Read the context and grab component data
    const content = ctx[props.data.name.toLowerCase()]?.data[0];

    // console.log('content', content);
    return (
      <ThemeProvider theme={() => revampTheme('light')}>
        <Component {...content} />
      </ThemeProvider>
    );
  }

  /**
   * @desription - Return static component
   */
  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      <Component />
    </ThemeProvider>
  );
};

export default ComponentSelector;

import * as zestyBlocks from 'blocks/layoutsBlocks';
import { useContext } from 'react';
import { GlobalContext } from 'pages/[...slug]';

const ComponentSelector = (props) => {
  // Initialize Context
  const ctx = useContext(GlobalContext);

  // Grab component name from react-auto-layout
  const componentName = props.data.name;

  // Map component from react-auto-layout to nextjs component
  const Component = zestyBlocks[componentName];

  console.log(ctx[props.data.name.toLowerCase()]);

  // check if ther's an error hydrating data

  if (props.data.name.toLowerCase() in ctx) {
    // Read the context and grab component data
    const content = ctx[props.data.name.toLowerCase()]?.data[0];

    console.log('content', content);
    return <Component {...content} />;
  }

  // return component without data by default
  return <Component />;
};

export default ComponentSelector;

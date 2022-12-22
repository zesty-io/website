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

  console.log(ctx[props.data.name]);

  // check if ther's an error hydrating data

  if (!ctx[props.data.name].message) {
    // Read the context and grab component data
    const { content } = ctx[props.data.name]?.data[0];
    return <Component {...content} />;
  }

  // return component without data by default
  return <Component />;
};

export default ComponentSelector;

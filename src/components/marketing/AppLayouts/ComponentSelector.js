import * as zestyBlocks from 'blocks/layoutsBlocks';
// import useFetch from 'lib/zesty/useFetch';

const ComponentSelector = (props) => {
  const componentName = props.data.name;
  const Component = zestyBlocks[componentName];

  console.log(props);

  // Custom Hook to fetch data for invividual component
  // const { data, loading } = useFetch(componentName);

  // Pass data to the component
  return <Component />;
};

export default ComponentSelector;

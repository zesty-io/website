import * as zestyBlocks from 'blocks/layoutsBlocks';
import { ThemeProvider } from '@mui/material';
import revampTheme from 'theme/revampTheme';

/**
 *
 * @description - find the component from zestyBlocks
 * @returns
 */
export const mapComponent = (name) => {
  if (name === '2columns') {
    return zestyBlocks.TwoColumn;
  }

  return zestyBlocks[name];
};

/**
 * The function extracts the names of child components from a given node in a tree-like structure.
 * @param node - The `node` parameter in the `extractChildComponentName` function is an object that
 * represents a component in a tree structure. It has a `name` property that indicates the name of the
 * component, and a `children` property that is an array of child components. The function recursively
 * traverses
 * @returns The function `extractChildComponentName` returns an array of strings, which are the names
 * of all the child components found in the given `node` and its descendants.
 */
const extractChildComponentName = (node) => {
  const childComponentNames = [];

  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const componentName = child.name;

      if (componentName) {
        childComponentNames.push(componentName);
      }

      const subChildComponentNames = extractChildComponentName(child);
      childComponentNames.push(...subChildComponentNames);
    }
  }

  return childComponentNames;
};

const ColumnSelector = (props) => {
  const { data } = props;

  console.log(data);

  // Get the custom component from zestyBlock
  const Column = mapComponent(data.name);

  // Get component and children component name in an array format
  const children = extractChildComponentName(data);

  /**
   * @desription - Render the column component and passing the childElement array
   */

  console.log(children);
  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      <Column childElements={children} />
    </ThemeProvider>
  );
};

export default ColumnSelector;

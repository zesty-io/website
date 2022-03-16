import React, { Children } from 'react';
import ReactJson from 'react-json-view-ssr';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';
import { Button, Grid, TextField } from '@mui/material';

// convert the obj to array of objectsj
const convertToArray = (content) =>
  Object.entries(content).map((e, i) => {
    return { [`${e[0]}`]: e[1] };
  });
// convert obj to dot
const flattenObj = (obj, parent, res = {}) => {
  for (const key of Object?.keys(obj || {})) {
    const propName = parent ? parent + '.' + key : key;
    if (typeof obj[key] === 'object') {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
// convert dot to object
function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.');

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

const ZestyExplorerBrowser = ({ content, children }) => {
  // const [modal, setModal] = React.useState(false);
  const [search, setSearch] = React.useState();
  // convert obj to dot
  const flaten1 = flattenObj(content);

  // convert to array of objects
  const flaten2 = convertToArray(flaten1);

  // generate columns for search
  const columns = flaten2.map((e) => {
    const res = Object.keys(e);
    return res.toString().replace(/.[0-9]/g, '');
  });

  // search options
  const options = {
    includeScore: true,
    useExtendedSearch: true,
    includeMatches: true,
    ignoreLocation: true,
    findAllMatches: true,
    threshold: 0,
    isCaseSensitive: false,
    minMatchCharLength: 1,
    keys: columns,
  };

  // search func
  const fuse = new Fuse([content], options);

  const result = fuse.search(search || '');

  // convert as key value pairs
  const result2 =
    result &&
    result[0]?.matches
      ?.map((e) => {
        return { [`${e.key}`]: e.value };
      })
      .map((e) => deepen(e));

  // display the result of search
  const data = search ? result2 : { content };

  return (
    <div style={{ background: '#ddd', boxShadow: '0,0,5px,#333' }}>
      {children}
      <Grid container marginBottom={4} justifyContent="center">
        {/* <Button
          onClick={() => {
            setModal(false);
          }}
          variant="outlined"
        >
          View Page Data
        </Button> */}
      </Grid>
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          autoFocus
        />
        {/* {JSON.stringify(result2)} */}
        <ReactJson
          style={{ height: '80vh', overflowY: 'scroll' }}
          name={'data'}
          src={data}
          theme="flat"
          iconStyle="square"
          indentWidth={4}
          collapsed={false}
          displayObjectSize
          displayDataTypes={false}
          enableClipboard={true}
        />
      </div>
    </div>
  );
};

export default React.memo(ZestyExplorerBrowser);

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
export const ZestyExplorer = ({ content, onClose }) => {
  const [togglem, settoggle] = React.useState(false);
  // const handleClose = (e) => {
  //   e.stopPropagation();
  //   // onClose();
  // };

  if (!canUseDOM()) {
    return null;
  }
  return (
    <div
      style={{
        overflow: 'hidden',
        width: 'auto',
        background: 'transparent',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '9999999999999999',
        padding: '2rem',
      }}
    >
      {!togglem && (
        <Button onClick={() => settoggle(true)} variant="outlined" color="info">
          Open Zesty Explorer
        </Button>
      )}
      {togglem && (
        <div>
          <ZestyExplorerBrowser content={content}>
            <Button
              onClick={() => settoggle(false)}
              variant="outlined"
              color="error"
            >
              X
            </Button>
          </ZestyExplorerBrowser>
        </div>
      )}
    </div>
  );
};

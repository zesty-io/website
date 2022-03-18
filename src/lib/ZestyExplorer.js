import React from 'react';
import ReactJson from 'react-json-view-ssr';
import Fuse from 'fuse.js';

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
      let divStyles = {
        marginBottom: '4em',
        justifyContent: 'center'
      }
  return (
    <div style={{ background: '#ddd', boxShadow: '0,0,5px,#333' }}>
      
      <div style={divStyles} >
      {children}
      </div>
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
export const ZestyExplorer = ({ content }) => {
  const [open, setOpen] = React.useState(false);
  let searchObject = {...content};
  // unset navigations for faster search
  delete searchObject.navigationTree;
  // custom nav tree building
  delete searchObject.navigationCustom;

  let buttonStyles = {
    borderRadius: '5px',
    padding: '12px 24px 12px 16px',
    background: '#1b202c',
    color: 'white',
    border: '1px #5B667D solid',
    boxShadow: '3px 3px 8px rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
  let zestyStyles =  {
    flex: '1',
    display: 'inline-block',
    alignSelf: 'center',
    marginLeft: '12px',
    fontSize: '18px',
    color: '#C7D4EA',
    letterSpacing: '1px',
    fontFamily: "'Arial Rounded MT Bold','Helvetica Rounded',Arial,sans-serif"
  }

  console.log('open state',open)
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
      {!open && (
        <button type="button" onClick={() => setOpen(true)} style={buttonStyles} >
           <img 
            src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
            width="32px"
            height="32px"
            alt="Zesty.io Logo"
            />
            <span style={zestyStyles}>Explorer</span>
        </button>
      )}
      {open && (
        <div>
          <ZestyExplorerBrowser content={searchObject}>
            <button onClick={() => setOpen(false)}>X</button>
          </ZestyExplorerBrowser>
        </div>
      )}
    </div>
  );
};

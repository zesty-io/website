import { ZestyLiveEditor } from '@zesty-io/live-editor';

import React, { useEffect } from 'react';

const LiveEditor = ({ data }) => {
  useEffect(() => {
    ZestyLiveEditor(data);
  }, []);

  return <div></div>;
};

export default LiveEditor;

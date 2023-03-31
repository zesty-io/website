import React, { useEffect } from 'react';
// import remarkGfm from 'remark-gfm';
import MuiMarkdown from 'markdown-to-jsx';
// import ReactMarkdown from 'react-markdown';
import MainWrapper from 'layouts/Main';
import axios from 'axios';
import { useState } from 'react';
import { Container } from '@mui/material';

const muiContentOverrides = {
  h1: {
    component: 'h1',
    props: {
      style: { fontSize: '4em' },
    },
  },
  h2: {
    component: 'h2',
    props: {
      style: { fontSize: '1.5em' },
    },
  },
  p: {
    component: 'p',
    props: {
      style: { fontSize: '5px' },
    },
  },

  img: {
    component: 'img',
    props: {
      style: { width: '80%', margin: '10px 10%' },
    },
  },
};

const index = () => {
  const [mdData, setmdData] = useState('');
  const getPageData = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/zesty-io/zesty-org/master/services/web-engine/introduction-to-parsley/parsley-index.md`,
    );

    res.status === 200 && setmdData(res.data);
    console.log(res, 444444444);
  };
  useEffect(() => {
    getPageData();
  }, []);

  return (
    <MainWrapper>
      <Container>
        <MuiMarkdown
          // inlineCodeColor="dodgerblue"
          overrides={muiContentOverrides}
        >
          {mdData}
        </MuiMarkdown>
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdData}</ReactMarkdown> */}
      </Container>
    </MainWrapper>
  );
};

export default index;

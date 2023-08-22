import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { langTransformer } from './helper';
import { DocsTabs } from './DocsTabs';
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { fetchTransformer } from './helper/fetchTransformer';
import { transFormEndpoint } from 'utils';

const tabs = [
  { label: 'Request', value: 'request' },
  { label: 'Response', value: 'response' },
];

const Main = ({ title = 'no title', data = {} }) => {
  const [dropdownResponse, setdropdownResponse] = useState({});
  const token = getCookie('APP_SID');
  const { language, workingInstance } = useZestyStore((e) => e);
  const [codeBlockData, setcodeBlockData] = React.useState('');
  const [isCopied, setIsCopied] = React.useState(false);
  const [currentTab, setcurrentTab] = React.useState('request');
  const [showCopyBtn, setshowCopyBtn] = React.useState(false);
  const isLoggedIn = useIsLoggedIn();

  const { endpoint } = transFormEndpoint({
    url: dropdownResponse?.url,
    instanceZUID: workingInstance,
    isLoggedIn,
  });
  const res = fetchTransformer(dropdownResponse, endpoint);

  console.log(res, 555);
  const { request, response } = langTransformer({
    data,
    lang: language,
    instanceZUID: workingInstance,
    token,
    isLoggedIn,
    body: dropdownResponse['body'],
  });

  const copyToClipboard = (text) => {
    navigator?.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

  React.useEffect(() => {
    if (currentTab === 'response') {
      setcodeBlockData(response);
    } else {
      setcodeBlockData(res);
    }
  }, [currentTab, language]);

  return (
    <Stack
      className=""
      data-prismjs-copy-timeout="500"
      bgcolor="#1B253F"
      sx={{ borderRadius: '10px', overflow: 'clip', height: 'auto' }}
    >
      <Stack
        color={'#fff'}
        px={4}
        pt={2}
        width={1}
        direction="row"
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Typography>{title}</Typography>
      </Stack>
      <Stack direction={'row'} px={1}>
        <DocsTabs
          data={data}
          setvalue={setcurrentTab}
          value={currentTab}
          tabs={tabs}
          setDropdownResponse={setdropdownResponse}
        />
      </Stack>
      <div
        style={{
          maxHeight: '40vh',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'auto',
        }}
        onMouseOver={() => setshowCopyBtn(true)}
        onMouseLeave={() => setshowCopyBtn(false)}
      >
        <Stack
          sx={{
            display: showCopyBtn ? 'flex' : 'none',
            cursor: 'pointer',
            color: '#fff',
            position: 'absolute',
            top: '15px',
            right: '10px',
          }}
          onClick={() => {
            copyToClipboard(codeBlockData);
            setshowCopyBtn(false);
          }}
        >
          {isCopied ? (
            <Stack direction="row" alignItems={'center'} spacing={1}>
              <Typography variant="button">Copied to Clipboard!</Typography>
              <ContentCopyIcon color="inherit" fontSize="medium" />
            </Stack>
          ) : (
            <ContentCopyIcon color="inherit" fontSize="medium" />
          )}
        </Stack>
        <SyntaxHighlighter
          showLineNumbers={true}
          language="javascript"
          style={coldarkDark}
          wrapLongLines={false}
          customStyle={{
            fontSize: '13px',
            fontWeight: 400,
          }}
        >
          {codeBlockData}
        </SyntaxHighlighter>
      </div>
    </Stack>
  );
};

export const CodeBlock = React.memo(Main);

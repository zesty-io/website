import React from 'react';
import { Stack, Tab, Tabs, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getCookie } from 'cookies-next';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const tabs = [
  { label: 'Request', value: 'request' },
  { label: 'Response', value: 'response' },
];
const CodeBlockTabs = React.memo(({ setvalue = () => {}, value }) => {
  const handleChange = (_, newValue) => {
    setvalue(newValue);
  };

  return (
    <Stack sx={{ width: '100%', marginBottom: 0, bgcolor: '' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs"
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '.MuiTabs-scrollButtons.Mui-disabled': {
            opacity: 0.3,
          },
          mb: -0.5,
        }}
      >
        {tabs.map((e) => {
          return <Tab color="secondary" label={e.label} value={e.value} />;
        })}
      </Tabs>
    </Stack>
  );
});

const Main = ({ title = 'no title', lang = 'JavaScript', data = {} }) => {
  const [codeBlockData, setcodeBlockData] = React.useState('');
  const [isCopied, setIsCopied] = React.useState(false);
  const [currentTab, setcurrentTab] = React.useState('request');
  const [showCopyBtn, setshowCopyBtn] = React.useState(false);
  const copyToClipboard = (text) => {
    navigator?.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

  const hasFormData = data?.request?.body?.mode === 'formdata' ? true : false;
  const hasToken = data?.request?.auth?.type === 'bearer' ? true : false;
  console.log(data, 44444);

  const headers = [
    {
      key: 'Content-Type',
      value: 'application/json',
    },
  ];

  hasToken &&
    headers.push({
      key: 'Authorization',
      value: `Bearer ${getCookie('APP_SID') || 'Not Authenticated'}`,
    });
  const requestData = `
  ${hasFormData ? `const body = new FormData();` : ''}
  ${
    hasFormData
      ? data.request.body.formdata
          .map((e) => {
            return `body.append('${e.key}', '${e.value}')\n`;
          })
          .join('  ')
      : ''
  }
  const options = {
    method: '${data.request.method}',
    headers: {
      ${headers
        .map((e) => {
          return `${e.key} : '${e.value}',\n`;
        })
        .join('      ')}
    },
    body: JSON.stringify(body),
  };
  await fetch('${data.request.url.raw}', options)
  .then(response => response.json())
  .catch(error => console.log('error', error));
  `;

  const responseData = data.response ? `${data?.response[0]?.body}` : `{}`;
  React.useEffect(() => {
    if (currentTab === 'response') {
      setcodeBlockData(responseData);
    } else {
      setcodeBlockData(requestData);
    }
  }, [currentTab]);

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

        <Stack direction={'row'} spacing={2} title="Click to copy">
          <Typography>{lang}</Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'}>
        <CodeBlockTabs setvalue={setcurrentTab} value={currentTab} />
      </Stack>

      <div
        style={{
          maxHeight: '40vh',
          position: 'relative',
          cursor: 'pointer',
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
            fontSize: '12px',
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

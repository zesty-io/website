import React from 'react';
import { Stack, Tab, Tabs, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { langTransformer } from './helper';

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

const Main = ({ title = 'no title', data = {} }) => {
  const [codeBlockData, setcodeBlockData] = React.useState('');
  const [isCopied, setIsCopied] = React.useState(false);
  const [currentTab, setcurrentTab] = React.useState('request');
  const [showCopyBtn, setshowCopyBtn] = React.useState(false);
  const [currentLang, _setcurrentLang] = React.useState('Javascript Fetch');

  const { request, response } = langTransformer({
    data,
    lang: currentLang,
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
      setcodeBlockData(request);
    }
  }, [currentTab, currentLang]);

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
        <CodeBlockTabs setvalue={setcurrentTab} value={currentTab} />
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

import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import MainWrapper from 'layouts/Main';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ErrorMsg } from 'components/accounts';
import { DocsTabs } from 'views/Docs/DocsTabs';
import { DocsSidebar } from 'components/docs/DocsSidebar';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
const tabs = [
  { label: 'Request', value: 'request' },
  { label: 'Rendered', value: 'response' },
];

const contentTabs = [
  { label: 'Example Page', value: 'example page' },
  { label: 'Glossary', value: 'glossary' },
];

const CodeBlockComp = ({
  code = '',
  settextContent = () => {},
  title = 'Parsley Code Example (editable)',
  getRenderText,
  loading = false,
  parsleyResult = '',
  currentTab,
  setcurrentTab,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [showCopyBtn, setshowCopyBtn] = React.useState(false);

  const copyToClipboard = (text) => {
    navigator?.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

  useEffect(() => {
    getRenderText();
  }, [currentTab]);

  return (
    <Stack
      bgcolor="#1B253F"
      sx={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'auto',
        borderRadius: '10px',
        overflow: 'clip',
        height: 'auto',
        width: '40vw',
        color: '#fff',
      }}
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
        <DocsTabs setvalue={setcurrentTab} value={currentTab} tabs={tabs} />
      </Stack>

      <Stack
        contentEditable={currentTab === 'request' ? true : false}
        onInput={(e) => {
          settextContent(e.currentTarget.textContent);
        }}
      >
        {currentTab === 'request' ? (
          <SyntaxHighlighter
            showLineNumbers={false}
            language="javascript"
            style={coldarkDark}
            wrapLongLines={false}
            customStyle={{
              fontSize: '13px',
              fontWeight: 400,
              height: '40vh',
            }}
          >
            {code}
          </SyntaxHighlighter>
        ) : (
          <Stack
            sx={{
              p: 2,
              height: '40vh',
              width: '40vw',
              bgcolor: '#111b27',
              overflow: 'auto',
              borderRadius: '5px',
              fontSize: '13px',
              fontWeight: 400,
              position: 'relative',
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
                copyToClipboard(parsleyResult);
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
            {loading ? (
              <Box sx={{ display: 'flex', m: 'auto' }}>
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <Box
                dangerouslySetInnerHTML={{
                  __html: parsleyResult,
                }}
              ></Box>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

const GlossaryRender = ({ data }) => {
  return (
    <Stack p={4}>
      {data.map((e) => {
        return (
          <Stack>
            <Typography variant="h6">{e.content.name}</Typography>
            <Box
              dangerouslySetInnerHTML={{
                __html: e.content.description,
              }}
            ></Box>
          </Stack>
        );
      })}
    </Stack>
  );
};

const ExamplaPageRender = ({ data }) => {
  return (
    <Stack p={4}>
      <Typography></Typography>
    </Stack>
  );
};

const Slug = (props) => {
  const [contentData, setcontentData] = useState([]);
  const [glossaryData, setglossaryData] = useState([]);
  const [contentTab, setcontentTab] = useState('glossary');
  const [currentTab, setcurrentTab] = React.useState('request');
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  const [textContent, settextContent] = useState('');
  const [parsleyResult, setparsleyResult] = useState('');
  const router = useRouter();
  const currentUrl = router.query.slug[0];
  const pageData = props.parsley.tour.data.find(
    (e) => e.content.path_part === currentUrl,
  );

  const { lesson_number, title, explanation, code_sample } = pageData.content;
  const navData = props.parsley.tour.data
    .map((e) => {
      return {
        ...e,
        label: `${e.content.lesson_number}. ${e.content.title}`,
        value: e.content.path_full,
        url: e.content.path_full,
      };
    })
    .sort(
      (a, b) =>
        Number(a.content.lesson_number) - Number(b.content.lesson_number),
    )
    .filter((e) => e.label.toLowerCase().includes(search.toLowerCase()));

  const handleRedirect = (e) => {
    const url = `/docs/parsley/tour/${e.url}`;
    setparsleyResult('');
    settextContent('');
    setcurrentTab('request');
    router.push(url);
  };
  const getRenderText = async () => {
    setloading(true);
    const formData = new URLSearchParams();
    formData.append('zuid', '7-e8a990-8b9dvg');
    formData.append(
      'parsley',
      textContent.length !== 0 ? textContent : code_sample,
    );
    const body = formData;

    const url = `https://parsley.zesty.io/ajax/parsley-tester/`;

    const headers = {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    try {
      const res = await axios.post(url, body, { headers }).catch((e) => {
        console.log(e);
        setloading(false);
        ErrorMsg({ title: e.error || e.message });
      });
      if (res?.status === 200) {
        let data = res.data;
        if (typeof res.data == 'object') {
          data = JSON.stringify(res.data);
        }
        setparsleyResult(data);
      } else {
        setparsleyResult('');
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      ErrorMsg({ title: e.error || e.message });
    }
    setloading(false);
  };

  const getGlossary = async () => {
    try {
      await axios
        .get(
          'https://parsleydev-dev.webengine.zesty.io/-/instant/6-3998c8-rtfq3n.json',
        )
        .then((e) => {
          console.log(e.data, 4444);
          setglossaryData(e.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGlossary();
  }, [contentTab]);

  return (
    <MainWrapper>
      <Stack direction="row">
        {/* SIDEBAR */}
        <DocsSidebar
          setsearch={setsearch}
          data={navData}
          onClick={handleRedirect}
        />
        {/* MAIN PAGE */}
        <Stack p={4} sx={{ maxWidth: 1920 }}>
          <Stack
            width={1}
            display="flex"
            justifyContent={'space-between'}
            direction="row"
            alignItems={'center'}
          >
            <Stack width={'40vw'}>
              <Typography variant="h6">Lesson {lesson_number}</Typography>
              <Typography variant="h4">{title}</Typography>
              <Box
                dangerouslySetInnerHTML={{
                  __html: explanation,
                }}
              ></Box>
            </Stack>

            <Stack
              width={'40vw'}
              display="flex"
              justifyContent={'center'}
              height={1}
              alignItems="center"
              justifyItems="center"
            >
              <Stack position={'relative'} bgcolor={'#fff'}>
                <CodeBlockComp
                  currentTab={currentTab}
                  setcurrentTab={setcurrentTab}
                  code={code_sample}
                  textContent={textContent}
                  settextContent={settextContent}
                  loading={loading}
                  getRenderText={getRenderText}
                  parsleyResult={parsleyResult}
                />
              </Stack>
              {/* <Stack bgcolor={'#111b27'} p={4} borderRadius="5px">
                <img
                  width={200}
                  src={
                    'https://9skdl6.media.zestyio.com/parsley-logo-brackets.png'
                  }
                  alt="parsley"
                />
              </Stack> */}
            </Stack>
          </Stack>
          <Container>
            <Stack
              direction="column"
              justifyContent={'center'}
              width={1}
              gap={2}
              alignItems="center"
              height={'100%'}
              p={4}
              mt={8}
            >
              <Typography variant="h4">Content Collection Reference</Typography>
              <Typography variant="body1">
                The tabs below describe the Content Collections this Zesty.io
                REPL has access to. Content collections are created and edited
                in the Schema section of the Zesty.io Manager interface. You can
                configure any Content Collection with your own custom fields and
                views.
              </Typography>

              <Stack direction={'column'} px={1} width={1}>
                <DocsTabs
                  setvalue={setcontentTab}
                  value={contentTab}
                  tabs={contentTabs}
                />
                <Stack width={1} minHeight={'50vh'}>
                  <Stack p={2}>
                    {contentTab === 'glossary' && (
                      <GlossaryRender data={glossaryData} />
                    )}
                    {contentTab === 'example page' && (
                      <ExamplaPageRender data={[]} />
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default Slug;

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import CircularProgress from '@mui/material/CircularProgress';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MainWrapper from 'layouts/Main';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { ErrorMsg } from 'components/accounts';
import { DocsTabs } from 'views/Docs/DocsTabs';
import { DocsSidebar } from 'components/docs/DocsSidebar';
import { LoadingButton } from '@mui/lab';
import { githubDarkInit } from '@uiw/codemirror-theme-github';
import { useZestyStore } from 'store';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
const leftTabs = [{ label: 'Request', value: 'request' }];

const rightTabs = [
  { label: 'Code Response', value: 'response' },
  { label: 'Rendered Response', value: 'rendered' },
];
const contentTabs = [
  { label: 'Example Page', value: 'example page' },
  { label: 'Glossary', value: 'glossary' },
];

const CodeBlockCompLeft = ({
  code = '',
  settextContent = () => {},
  title = 'Parsley Code Example (editable)',
  tabs = [],
  loading = false,
  getRenderText,
}) => {
  const onChange = React.useCallback((value, _) => {
    settextContent(value);
  }, []);
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
        width: '35vw',
        color: '#fff',
      }}
    >
      <Stack
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 100,
          bgcolor: '#fff',
          borderRadius: '5px',
        }}
      >
        <LoadingButton
          loading={loading}
          color="secondary"
          size="small"
          fullWidth
          variant="contained"
          title={'Run'}
          onClick={() => {
            getRenderText();
          }}
          startIcon={<PlayCircleOutlineIcon sx={{ fontSize: '20px' }} />}
          sx={{
            whiteSpace: {
              md: 'nowrap',
            },
          }}
        >
          Run
        </LoadingButton>
      </Stack>
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
        <DocsTabs setvalue={() => {}} value={'request'} tabs={tabs} />
      </Stack>

      <Stack>
        <CodeMirror
          editable={true}
          basicSetup={{ lineNumbers: true, autocompletion: true }}
          value={code}
          height={'300px'}
          crosshairCursor={true}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          theme={githubDarkInit({
            settings: {
              caret: '#ff5c0c',
              fontFamily: 'monospace',
            },
          })}
        />
      </Stack>
    </Stack>
  );
};

const CodeBlockCompRight = ({
  settextContent = () => {},
  title = 'Parsley Code Example (editable)',
  loading = false,
  parsleyResult = '',
  currentTab,
  setcurrentTab,
  tabs = [],
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

  const onChange = React.useCallback((value, _) => {
    settextContent(value);
  }, []);

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
        width: '35vw',
        color: '#fff',
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
          top: '6.5rem',
          right: '15px',
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

      <Stack height={'300px'} p={currentTab === 'response' ? 0 : 0.5}>
        {currentTab === 'response' ? (
          <CodeMirror
            editable={false}
            value={parsleyResult}
            placeholder={'Click Run to view the response'}
            height={'300px'}
            crosshairCursor={true}
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            theme={githubDarkInit({
              settings: {
                caret: '#ff5c0c',
                fontFamily: 'monospace',
              },
            })}
          />
        ) : (
          <Stack
            sx={{
              px: 2,
              pt: 2,
              mt: 1,
              height: '40.5vh',
              width: '100%',
              bgcolor: '#fff',
              overflow: 'auto',
              borderRadius: '5px',
              fontSize: '13px',
              fontWeight: 400,
              color: '#333333',
            }}
          >
            {loading ? (
              <Box sx={{ display: 'flex', m: 'auto' }}>
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <Box
                dangerouslySetInnerHTML={{
                  __html: parsleyResult || 'Click Run to view the response',
                }}
              ></Box>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

const GlossaryRender = ({ data = [] }) => {
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

const ExamplaPageRender = () => {
  const accessParsley = [
    `{{this.title}}`,
    `{{this.description}}`,
    `{{this.html}}`,
    `{{this.image}}`,
    `{{this.multiple_images}}`,
    `{{this.date}}`,
    `{{this.dropdown}}`,
    `{{this.number}}`,
  ];
  const example_data = [
    `{{example_data.first().title}}`,
    `{{example_data.first().description}}`,
    `{{example_data.first().html}}`,
    `{{example_data.first().image}}`,
    `{{example_data.first().multiple_images}}`,
    `{{example_data.first().date}}`,
    `{{example_data.first().dropdown}}`,
    `{{example_data.first().number}}`,
  ];
  return (
    <Stack>
      <div className="object-references">
        <div className="example-data-container">
          <div id="pageExampleData" className="example-data selected">
            <Typography variant="p" className="explanation">
              <strong>Example Page</strong> is a Content Collection in the
              Zesty.io REPL that was created in the Schema section. It has a
              template file (view) and routing behavior to represent a single
              page. This content collections has 8 <strong>fields</strong> on
              it, described below with their <strong>reference name</strong> and{' '}
              <strong>field type</strong>. When you make your own content set,
              you can add as many fields as you need. They can be accessed using
              either{' '}
              <span>
                <code>{`{{page.reference_name}}`}</code>
              </span>
              (when working on its related template file), or from any other
              template or JSON file by using{' '}
              <code>{`{{example_data.first().reference_name}}`}</code>
            </Typography>

            <Grid container spacing={4} pt={6}>
              <Grid item xs={6}>
                <Typography variant="h5">Collection Schema</Typography>
                <Stack pt={2}>
                  <table>
                    <tr>
                      <th>Reference Name</th>
                      <th>Type</th>
                    </tr>
                    <tr>
                      <td>title</td>
                      <td>text</td>
                    </tr>
                    <tr>
                      <td>html</td>
                      <td>wsywig</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>image</td>
                    </tr>
                    <tr>
                      <td>multiple_images</td>
                      <td>image</td>
                    </tr>
                    <tr>
                      <td>date</td>
                      <td>date</td>
                    </tr>
                    <tr>
                      <td>dropdown</td>
                      <td>dropdown</td>
                    </tr>
                    <tr>
                      <td>number</td>
                      <td>number</td>
                    </tr>
                  </table>
                </Stack>
                <Typography variant="h5" pt={2}>
                  Example Page Details
                </Typography>
                <hr />
                <div className="clear"></div>
                <p>
                  <strong>Friendly Name:</strong> Example Page
                </p>
                <p>
                  <strong>Reference Name:</strong> example_page
                </p>
                <p>
                  <strong>Has View:</strong> True
                </p>
                <p>
                  <strong>Routing Behavior:</strong> Single Page
                </p>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">
                  Ways to Access with Parsley
                </Typography>
                <Typography variant="p">
                  There are many ways to access the content from a collection.
                  The most common way is when you are working with it's
                  associated template, when you are, content can be accessed
                  like:
                </Typography>
                <Stack>
                  <ul>
                    {accessParsley.map((e) => {
                      return (
                        <li>
                          <code>{e}</code>
                        </li>
                      );
                    })}
                  </ul>
                </Stack>
                <Typography variant="h6">
                  Another way is with global access calls, which look this:
                </Typography>
                <Stack>
                  <ul>
                    {example_data.map((e) => {
                      return (
                        <li>
                          <code>{e}</code>
                        </li>
                      );
                    })}
                  </ul>
                </Stack>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Stack>
  );
};

const Slug = (props) => {
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => ({
      setalgoliaApiKey: e.setalgoliaApiKey,
      setalgoliaAppId: e.setalgoliaAppId,
      setalgoliaIndex: e.setalgoliaIndex,
    }),
  );
  const [glossaryData, setglossaryData] = useState([]);
  // const [exampleData, setexampleData] = useState([]);
  const [contentTab, setcontentTab] = useState('glossary');
  const [currentTab, setcurrentTab] = React.useState('response');
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  const [textContent, settextContent] = useState('');
  const [parsleyResult, setparsleyResult] = useState('');
  const router = useRouter();
  const currentUrl = router.query.slug[0];
  const tourData = props.parsley.tour.data;
  const pageData = tourData.find((e) => e.content.path_part === currentUrl);

  const { lesson_number, title, explanation, code_sample } = pageData.content;
  const nextLesson = tourData.find(
    (e) => e.content.lesson_number === String(Number(lesson_number) + 1),
  );
  const previousLesson = tourData.find(
    (e) => e.content.lesson_number === String(Number(lesson_number) - 1),
  );
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
          setglossaryData(e.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const getExampleData = async () => {
  //   try {
  //     await axios
  //       .get('https://parsley.zesty.io/-/gql/example_data.json')
  //       .then((e) => {
  //         setexampleData(e.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(async () => {
    if (glossaryData.length === 0) {
      await getGlossary();
    }
    // if (exampleData.length === 0) {
    //   await getExampleData();
    // }
  }, [contentTab, glossaryData]);

  useEffect(() => {
    setcurrentTab('response');
  }, [router.asPath]);

  useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  return (
    <MainWrapper>
      <Stack direction="row">
        {/* SIDEBAR */}
        <DocsSidebar
          setsearch={setsearch}
          data={navData}
          onClick={handleRedirect}
          placeholder="Search Lessons..."
        />
        {/* MAIN PAGE */}
        <Stack pl={6} sx={{ width: 1 }}>
          <Grid container alignItems={'center'} mt={4}>
            <Grid item xs={6}>
              <Typography variant="h6">Lesson {lesson_number}</Typography>
              <Typography variant="h4">{title}</Typography>
              <Box
                dangerouslySetInnerHTML={{
                  __html: explanation,
                }}
              ></Box>
            </Grid>

            <Grid
              item
              xs={6}
              justifyContent={'center'}
              justifyItems={'center'}
              display={'flex'}
              position={'relative'}
            >
              <Stack
                position={'absolute'}
                direction={'row'}
                top={-30}
                left={10}
              >
                {previousLesson && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    title="Previous Lesson"
                    href={`/docs/parsley/tour${previousLesson.content.path_full}`}
                    startIcon={<ArrowBackIosIcon sx={{ fontSize: '20px' }} />}
                  >
                    Previous Lesson
                  </Button>
                )}
              </Stack>
              <Stack
                position={'absolute'}
                direction={'row'}
                top={-30}
                right={30}
              >
                {nextLesson && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    title="Next Lesson"
                    href={`/docs/parsley/tour${nextLesson.content.path_full}`}
                    endIcon={<NavigateNextIcon sx={{ fontSize: '20px' }} />}
                  >
                    Next Lesson
                  </Button>
                )}
              </Stack>

              <Stack>
                <Stack bgcolor={'#111b27'} p={4} borderRadius="5px">
                  <img
                    width={200}
                    src={
                      'https://9skdl6.media.zestyio.com/parsley-logo-brackets.png'
                    }
                    alt="parsley"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Grid container gap={1} wrap="nowrap" mt={8}>
            <Grid item xs={6}>
              <CodeBlockCompLeft
                setcurrentTab={setcurrentTab}
                code={code_sample}
                textContent={textContent}
                settextContent={settextContent}
                loading={loading}
                getRenderText={getRenderText}
                parsleyResult={parsleyResult}
                tabs={leftTabs}
              />
            </Grid>
            <Grid item xs={6}>
              <CodeBlockCompRight
                currentTab={currentTab}
                setcurrentTab={setcurrentTab}
                textContent={textContent}
                settextContent={settextContent}
                loading={loading}
                parsleyResult={parsleyResult}
                tabs={rightTabs}
                title="Parsely Response"
              />
            </Grid>
          </Grid>

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
                    {contentTab === 'example page' && <ExamplaPageRender />}
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

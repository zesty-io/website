import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import MainWrapper from 'layouts/Main';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LoadingButton, TreeItem, TreeView } from '@mui/lab';
import { ErrorMsg } from 'components/accounts';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const Slug = (props) => {
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
  console.log(navData, 555);

  const handleRedirect = (e) => {
    const url = `/docs/parsley/tour/${e.url}`;
    setparsleyResult('');
    settextContent('');
    router.push(url);
  };
  const getRenderText = async () => {
    setloading(true);
    const formData = new FormData();
    formData.append('zuid', '7-e8a990-8b9dvg');
    formData.append(
      'parsley',
      textContent.length !== 0 ? textContent : code_sample,
    );
    const body = formData;

    const url = `https://parsley.zesty.io/ajax/parsley-tester/`;

    try {
      const res = await axios.post(url, body).catch((e) => {
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
  return (
    <MainWrapper>
      <Stack direction="row">
        <Stack
          sx={{
            position: 'sticky',
            top: '11rem',
            height: '80vh',
            overflow: 'auto',
          }}
        >
          <Stack p={2}>
            <TextField
              color="secondary"
              placeholder="Search..."
              variant="outlined"
              name={'search'}
              fullWidth
              onChange={(e) => setsearch(e.currentTarget.value)}
            />
          </Stack>
          <Stack>
            <TreeView
              // defaultExpanded={[
              //   'mui-7-23ec4824-7f6d-4ac8-b65d-06efdb80ca34' || '',
              // ]}
              aria-label="file system navigator"
              defaultCollapseIcon={
                <FolderIcon color="secondary" fontSize="large" />
              }
              defaultExpandIcon={
                <FolderOpenIcon color="secondary" fontSize="large" />
              }
              sx={{
                flexGrow: 1,
                maxWidth: 350,
                overflowY: 'auto',
              }}
            >
              {navData.map((e) => {
                return (
                  <TreeItem
                    nodeId={e.value}
                    label={e.label}
                    onClick={() => handleRedirect(e)}
                  ></TreeItem>
                );
              })}
            </TreeView>
          </Stack>
        </Stack>
        <Stack p={4} sx={{ maxWidth: 1920 }}>
          <Stack
            width={1}
            display="flex"
            justifyContent={'space-between'}
            direction="row"
            alignItems={'center'}
          >
            <Stack>
              <Typography variant="h6">Lesson {lesson_number}</Typography>
              <Typography variant="h4">{title}</Typography>
              <Box
                dangerouslySetInnerHTML={{
                  __html: explanation,
                }}
              ></Box>
            </Stack>

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
          <Stack
            direction="row"
            justifyContent={'space-between'}
            width={1}
            gap={2}
            alignItems="center"
            // bgcolor="green"
          >
            <Stack position={'relative'} bgcolor={'yellow'}>
              <CodeBlockComp
                code={code_sample}
                textContent={textContent}
                settextContent={settextContent}
                contentEditable={true}
                loading={loading}
                getRenderText={getRenderText}
              />
            </Stack>
            <Stack
              sx={{
                p: 2,
                height: '40vh',
                width: '40vw',
                bgcolor: '#f4f4f4',
                overflow: 'auto',
              }}
            >
              <Box
                dangerouslySetInnerHTML={{
                  __html: parsleyResult,
                }}
              ></Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default Slug;

const CodeBlockComp = ({
  code = '',
  settextContent = () => {},
  contentEditable = false,
  title = 'Parsley Code Example (editable)',
  getRenderText,
  loading = false,
}) => {
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
        position={'absolute'}
        sx={{
          right: 16,
          top: 12,
          zIndex: 100,
          bgcolor: '#fff',
          borderRadius: '5px',
        }}
      >
        <LoadingButton
          onClick={getRenderText}
          loading={loading}
          color="secondary"
          target="_blank"
          size="small"
          fullWidth
          variant="contained"
          title={'Run code'}
          startIcon={<PlayArrowIcon sx={{ fontSize: '20px' }} />}
          sx={{
            whiteSpace: {
              md: 'nowrap',
            },
          }}
        >
          Run
        </LoadingButton>
      </Stack>
      <Typography variant="body1" color={'#fff'} p={2}>
        {title}
      </Typography>
      <Stack
        contentEditable={contentEditable}
        onInput={(e) => {
          settextContent(e.currentTarget.textContent);
        }}
      >
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
      </Stack>
    </Stack>
  );
};

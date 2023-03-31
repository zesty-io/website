import React from 'react';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import MainWrapper from 'layouts/Main';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const Slug = (props) => {
  const router = useRouter();
  const currentUrl = router.query.slug[0];
  const pageData = props.parsley.tour.data.find(
    (e) => e.content.path_part === currentUrl,
  );

  const { lesson_number, title, explanation, code_sample } = pageData.content;
  console.log(currentUrl, pageData, 555);
  return (
    <MainWrapper>
      <Container>
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

          <Stack>
            <img
              width={200}
              src={'https://9skdl6.media.zestyio.com/parsley-logo-brackets.png'}
              alt="parsley"
            />
          </Stack>
        </Stack>
        <Stack>
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
            {code_sample}
          </SyntaxHighlighter>
        </Stack>
      </Container>
    </MainWrapper>
  );
};

export default Slug;

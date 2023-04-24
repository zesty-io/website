import React, { useEffect } from 'react';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import MainWrapper from 'layouts/Main';
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DocsSidebar } from 'components/docs/DocsSidebar';
import { useZestyStore } from 'store';
import axios from 'axios';
import { useRouter } from 'next/router';

const TourPage = (props) => {
  const router = useRouter();
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => ({
      setalgoliaApiKey: e.setalgoliaApiKey,
      setalgoliaAppId: e.setalgoliaAppId,
      setalgoliaIndex: e.setalgoliaIndex,
    }),
  );
  const [search, setsearch] = useState('');
  const [pageData, setpageData] = useState({});

  const handleRedirect = (e) => {
    const url = `/docs/parsley/tour/${e.url}`;
    router.push(url);
  };
  const newNavData = props.parsley.tour.data
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

  const getPageData = async () => {
    await axios
      .get(
        'https://parsleydev-dev.webengine.zesty.io/-/instant/7-c005a8-zv6024.json',
      )
      .then((e) => {
        setpageData(e.data.data[0].content);
      })
      .catch((e) => {
        console.log(e);
        setpageData({});
      });
  };
  useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  useEffect(() => {
    getPageData();
  }, []);
  return (
    <MainWrapper>
      <Stack direction={'row'}>
        {/* SIDEBARR */}
        <DocsSidebar
          search={search}
          setsearch={setsearch}
          data={newNavData}
          onClick={handleRedirect}
        />
        {/* MAIN PAGE */}
        <Stack pl={4} sx={{ width: 1 }}>
          <Stack width={'70vw'}>
            <Typography variant="h2" component={'h1'}>
              {pageData.title}
            </Typography>
            <Typography textAlign={'center'} variant={'h4'} gutterBottom>
              <Box
                dangerouslySetInnerHTML={{
                  __html: pageData.content,
                }}
              ></Box>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default TourPage;

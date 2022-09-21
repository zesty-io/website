import { React } from 'react';

import { fetchPage } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';

import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { useTheme } from '@emotion/react';

export default function Slug(props) {
  const theme = useTheme();

  // for homepage navigation
  // const isDarkMode = theme.palette.mode === 'dark';
  let bgcolor = 'transparent';
  // if (props?.meta?.web?.uri === '/') {
  //   bgcolor = isDarkMode ? 'transparent' : theme.palette.common.white;
  // }

  return (
    <>
      
      <Main
        model={props.meta.model_alternate_name}
        nav={props.navigationTree}
        customRouting={props.navigationCustom}
        url={props.meta.web.uri}
        bgcolor={bgcolor}
      >
        <ZestyView content={props} />
      </Main>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  // does not display with npm run dev
  res.setHeader(
    'Cache-Control',
    'public, maxage=60, must-revalidate'
  );
  res.setHeader(
    'Surrogate-Control' , 'max-age=60'
  )

  // attempt to get page data relative to zesty
  const data = await fetchPage(req.url);

  // This section holds data settings for fetching Github Data
  if (req.url == '/roadmap/' && process.env.NEXT_PUBLIC_GITHUB_AUTH) {
    data.github_data = await githubFetch({
      organization: `"Zesty-io"`,
      projectNumber: data.project_number,
      columns: data.max_column,
      cards: data.max_card,
      discussions: data.max_discussion,
    });
  }

  // generate a status 404 page
  if (data.error) return { notFound: true };

  // Pass data to the page via props
  return { props: data };
}

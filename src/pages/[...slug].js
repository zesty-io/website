import { React, createContext } from 'react';

import { fetchPage } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';

import { ZestyView } from 'lib/ZestyView';
import Main from 'layouts/Main';
import { getIsAuthenticated } from 'utils';
//

export const GlobalContext = createContext();
export default function Slug(props) {
  // for homepage navigation
  // const isDarkMode = theme.palette.mode === 'dark';
  let bgcolor = 'transparent';
  // if (props?.meta?.web?.uri === '/') {
  //   bgcolor = isDarkMode ? 'transparent' : theme.palette.common.white;
  // }

  return (
    <>
      <GlobalContext.Provider value={props}>
        <Main
          model={props?.meta?.model_alternate_name}
          nav={props?.navigationTree}
          customRouting={props?.navigationCustom}
          url={props?.meta?.web?.uri}
          bgcolor={bgcolor}
        >
          <ZestyView content={props} />
        </Main>
      </GlobalContext.Provider>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({ req, res, resolvedUrl }) {
  const isAuthenticated = getIsAuthenticated(res);
  // does not display with npm run dev
  res.setHeader('Cache-Control', 'public, maxage=60, must-revalidate');
  res.setHeader('Surrogate-Control', 'max-age=60');

  // attempt to get page data relative to zesty

  let data = await fetchPage(resolvedUrl);

  data = {
    ...data,
    zesty: {
      isAuthenticated,
    },
  };

  // This section holds data settings for fetching Github Data
  if (req.url.includes('/roadmap/') && process.env.GITHUB_AUTH) {
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

  if (req.url === '/login/' && isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Holds the layout components object
  const layoutComponentObject =
    data.meta.layout.json['layout:root:column:0'].children;
  // Convert objects to array
  const componentsArray = Object.values(layoutComponentObject);

  // loop each object and fetch data based on the defined zuid
  for await (const component of componentsArray) {
    console.log(component);

    try {
      // Layouts Data Fetching
      const resp = await fetch(
        `https://kfg6bckb-dev.webengine.zesty.io/-/instant/${component.contentZuid}.json`,
      );

      data[component.name] = await resp.json();
    } catch (error) {}
  }

  console.log(data);

  // Pass data to the page via props
  return { props: { ...data } };
}

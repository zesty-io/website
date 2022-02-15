/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const Setup = () => {
  const theme = useTheme();
  const renderCodeBlock = (code = '', language = 'javascript') => {
    return (
      <Box
        component={SyntaxHighlighter}
        language={language}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
      >
        {code}
      </Box>
    );
  };

  return (
    <FixedLayout>
      <Container>
        <Stack spacing={{ xs: 4, sm: 8 }}>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Initial Setup
            </Typography>
            <Typography>
              Setting up a new MUI React project to use theFront sections,
              building blocks, demo pages and other landing.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Setting up the dependencies and project config options
            </Typography>
            <Typography mb={2}>
              First of all, you need to install all the npm dependecies that the
              theFront theme has, in order to be able to properly use the theme
              and all the UI components.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              <b>If you are building an application from scratch</b> you should
              create an empty folder in your local working directory.
              <br />
              Then copy <code>.eslintrc.js</code>, <code>.prettierrc</code>,{' '}
              <code>jsconfig.json/tsconfig.json</code> and{' '}
              <code>package.json</code> files into the root of your newly
              created projects folder.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
            >
              In the <code>package.json</code> you will find all the necessary
              dependencies, npm scripts and other important configuration
              options. You are free to change the <b>name</b>, <b>author</b>,{' '}
              <b>email</b>, <b>version</b> fields in the package.json file.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Setting up the necessary folders and files
            </Typography>
            <Typography
              sx={{
                '& a': {
                  color: theme.palette.primary.main,
                },
              }}
              mb={2}
            >
              In the <b>/src/components</b> folder of the theFront theme there
              are two important files/components which should be copied into
              your working directory. One is{' '}
              <a href="/docs/page" target="blank">
                <b>Page component</b> (/src/components/Page.js|ts)
              </a>
              , which is the bootstrap point of the whole app and the parent
              component of the views and pages.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              The declaration of the <code>useDarkMode</code> hook, the
              initialization of the <code>AOS plugin</code> and{' '}
              <code>MUI's ThemeProvider</code> are in the <b>"Page"</b>{' '}
              component.
            </Typography>
            <Typography
              sx={{
                '& a': {
                  color: theme.palette.primary.main,
                },
              }}
              mb={2}
            >
              The other one is{' '}
              <a href="/docs/container" target="blank">
                <b>Container component</b> (/src/components/Container.js|ts)
              </a>
              , which is the custom container decraration.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              The <b>ThemeModeToggler</b>, which is used for the dark/light mode
              togging, and the <b>TopNav</b> component are in the{' '}
              <code>/src/components</code> folder as well.
              <br />
              They also should be copied into your working copy.
            </Typography>
            <Typography mb={2}>
              In your working directory create a new folder <b>src</b> folder
              and <b>components</b> folder inside the <b>/src</b> subfolder.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              <b>2.1</b> Copy the <code>/src/components/Page.js|tsx</code>,{' '}
              <code>/src/components/Container.js|tsx</code>,{' '}
              <code>/src/components/ThemeModeToggler.js|tsx</code> and{' '}
              <code>/src/components/TopNave.js|tsx</code> into the{' '}
              <code>/your-app/src/components</code> folder.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
                '& a': {
                  color: theme.palette.primary.main,
                },
              }}
              mb={2}
            >
              <b>2.2</b> Next step copy the <code>/src/layouts</code> folder,
              where you can find the theme{' '}
              <a href="/docs/layouts" target="blank">
                main layouts
              </a>
              , into the root of your working directory.
              <br />
              In the future you are free to use any layout from the{' '}
              <a href="/blocks/page-layouts">Layout building blocks</a>, to
              modify them or create your own.
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
            >
              <b>2.3</b> Finally copy the <code>/src/theme</code> folder into
              your projects folder
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Folder setup (react-scripts)
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              If you are using the <b>react-scripts</b> version you should also
              copy the <code>/public/index.html</code> into the{' '}
              <code>your-app/public/index.html</code>
              <br />
              You are free to modify the meta tags, and other content of the
              index.html.
            </Typography>
            <Typography mb={2}>
              The folder structure should look like this:
            </Typography>
            <Box mb={2}>
              {renderCodeBlock(`your-app/
  README.md
  .eslintrc.js
  .prettierrc
  jsconfig.json // or tsconfig.json if you are using the TypeScript sources
  package.json
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    components/
      Page.js // or Page.tsx if your are using the TypeScript sources
      Container.js // or Container.tsx if your are using the TypeScript sources
      ThemeModeToggler.js // or ThemeModeToggler.tsx if your are using the TypeScript sources
      TopNav.js // or TopNav.tsx if your are using the TypeScript sources
    layouts/
    App.js
    index.js`)}
            </Box>
            <Typography mb={2}>
              For the project to build,{' '}
              <b>these files must exist with exact filenames:</b>
            </Typography>
            <Box component={'ul'}>
              <li>
                <Typography>
                  <b>public/index.html</b> is the page template;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& code': {
                      background: colors.yellow[400],
                      color: theme.palette.common.black,
                    },
                  }}
                >
                  <b>src/index.js|tsx</b> is the JavaScript entry point. You are
                  free to copy its content from theFront{' '}
                  <code>/src/index.js</code> or leave it as it was created by{' '}
                  <b>create-react-app</b>;
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>/src/App.js|tsx</b> is the app business logic starting
                  point where you should instantiate your apps router, inject
                  3th party styles and{' '}
                  <b>
                    the most importantly wrap the app root with the Page
                    component you just copied
                  </b>
                  , you can follow the same approach as done in theFront theme.
                </Typography>
              </li>
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Folder setup (nextjs)
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              If you are using the <b>nextjs</b> version you should also copy
              the <code>/src/pages/_app.js|tsx</code>,{' '}
              <code>/src/pages/_document.js|tsx</code> into the{' '}
              <code>your-app/src/pages/</code> folder
              <br />
              You are free to modify the meta tags, and other content.
            </Typography>
            <Typography mb={2}>
              The folder structure should look like this:
            </Typography>
            <Box mb={2}>
              {renderCodeBlock(`your-app/
  README.md
  .eslintrc.js
  .prettierrc
  jsconfig.json // or tsconfig.json if you are using the TypeScript sources
  package.json
  node_modules/
  src/
    components/
      Page.js // or Page.tsx if your are using the TypeScript sources
      Container.js // or Container.tsx if your are using the TypeScript sources
      ThemeModeToggler.js // or ThemeModeToggler.tsx if your are using the TypeScript sources
      TopNav.js // or TopNav.tsx if your are using the TypeScript sources
    layouts/
    pages/
      _app.js // or _app.tsx if your are using the TypeScript sources
      _document.js // or _document.tsx if your are using the TypeScript sources`)}
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Folder setup (gatsbyjs)
            </Typography>
            <Typography
              sx={{
                '& code': {
                  background: colors.yellow[400],
                  color: theme.palette.common.black,
                },
              }}
              mb={2}
            >
              If you are using the <b>gatsbyjs</b> version you should also copy
              the <code>/plugins</code>, into the <code>your-app/plugins</code>.
              <br />
              And <code>/gatsby-config.js</code> into the root of your working
              folder.
            </Typography>
            <Typography mb={2}>
              The folder structure should look like this:
            </Typography>
            <Box mb={2}>
              {renderCodeBlock(`your-app/
  gatsby-config.js
  README.md
  .eslintrc.js
  .prettierrc
  jsconfig.json // or tsconfig.json if you are using the TypeScript sources
  package.json
  node_modules/
  src/
    components/
      Page.js // or Page.tsx if your are using the TypeScript sources
      Container.js // or Container.tsx if your are using the TypeScript sources
      ThemeModeToggler.js // or ThemeModeToggler.tsx if your are using the TypeScript sources
      TopNav.js // or TopNav.tsx if your are using the TypeScript sources
    layouts/
    pages/`)}
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Routing setup
            </Typography>
            <Typography mb={2}>
              Now you have everythig ready to create your apps business logic.
            </Typography>
            <Typography mb={2}>
              You would need to setup your app routing/navigation. You can
              follow the official guides and documentation:
            </Typography>
            <Box component={'ul'}>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <b>React Router</b> -{' '}
                  <a
                    href="https://v5.reactrouter.com/web/guides/quick-start"
                    target="blank"
                  >
                    https://v5.reactrouter.com/web/guides/quick-start
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <b>NextJS Routing</b> -{' '}
                  <a
                    href="https://nextjs.org/docs/routing/introduction"
                    target="blank"
                  >
                    https://nextjs.org/docs/routing/introduction
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <b>Gatsby Routing</b> -{' '}
                  <a
                    href="https://www.gatsbyjs.com/docs/reference/routing/creating-routes/"
                    target="blank"
                  >
                    https://www.gatsbyjs.com/docs/reference/routing/creating-routes/
                  </a>
                  ;
                </Typography>
              </li>
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Development
            </Typography>
            <Typography mb={2}>
              Now when you have everything setup you can copy sections, pages,
              landings and any other components from theFront into your app.
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Building blocks
                </Typography>
                <Typography gutterBottom>
                  Over 300+ professionally designed, fully responsive, expertly
                  crafted MUI component compositions you can drop into your MUI
                  projects and customize to your heart’s content.
                </Typography>
                <Typography
                  sx={{
                    '& code': {
                      background: colors.yellow[400],
                      color: theme.palette.common.black,
                    },
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <code>/src/blocks</code>.{' '}
                  <a href="/blocks" target="blank">
                    Learn more
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Demo pages
                </Typography>
                <Typography gutterBottom>
                  Ready to use, complete demo pages for your MUI project.
                </Typography>
                <Typography
                  sx={{
                    '& code': {
                      background: colors.yellow[400],
                      color: theme.palette.common.black,
                    },
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <code>/src/demos</code>.{' '}
                  <a href="/demos" target="blank">
                    Learn more
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Landings and supporting pages
                </Typography>
                <Typography gutterBottom>
                  Professionally designed, fully responsive, expertly crafted
                  landing and supporting pages you can use in your MUI projects
                  and customize to your heart’s content.
                </Typography>
                <Typography
                  sx={{
                    '& code': {
                      background: colors.yellow[400],
                      color: theme.palette.common.black,
                    },
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <code>/src/views</code>.{' '}
                  <a href="/" target="blank">
                    Learn more
                  </a>
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography fontWeight={700} variant={'h5'} mb={2}>
              Useful links
            </Typography>
            <ul>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://reactjs.org/" target="blank">
                    ReactJS
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://create-react-app.dev/" target="blank">
                    Create React App
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://nextjs.org/" target="blank">
                    NextJS
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://www.gatsbyjs.com/" target="blank">
                    GatsbyJS
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="/docs/quick-start-react-scripts">
                    Getting started with theFront (react-scripts)
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="/docs/quick-start-nextjs">
                    Getting started with theFront (nextjs)
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="/docs/quick-start-gatsbyjs">
                    Getting started with theFront (gatsbyjs)
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://mui.com/" target="blank">
                    MUI
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a href="https://mui.com/components/box/" target="blank">
                    MUI Components
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://github.com/mui-org/material-ui/tree/master/examples/create-react-app"
                    target="blank"
                  >
                    MUI Create-React-App example
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs"
                    target="blank"
                  >
                    MUI NextJS example
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://github.com/mui-org/material-ui/tree/master/examples/gatsby"
                    target="blank"
                  >
                    MUI GatsbyJS example
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://v5.reactrouter.com/web/guides/quick-start"
                    target="blank"
                  >
                    React Router
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://nextjs.org/docs/routing/introduction"
                    target="blank"
                  >
                    NextJS Routing
                  </a>
                  ;
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    '& a': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <a
                    href="https://www.gatsbyjs.com/docs/reference/routing/creating-routes/"
                    target="blank"
                  >
                    Gatsby Routing
                  </a>
                  ;
                </Typography>
              </li>
            </ul>
          </Box>
        </Stack>
      </Container>
    </FixedLayout>
  );
};

export default Setup;

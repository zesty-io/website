/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const QuickStartGatsbyJS = () => {
  const theme = useTheme();

  const renderCodeBlock = (code = '', language = 'jsx') => {
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
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
            }}
          >
            Quick Start
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            1. Requirements
          </Typography>
          <Typography>
            Before proceeding you'll need to have the latest stable{' '}
            <Link
              component={'a'}
              href={'https://nodejs.org/en/'}
              target={'blank'}
            >
              nodejs
            </Link>
            .
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            2. Install
          </Typography>
          <Typography>
            Open the project folder and install its dependencies. You can use
            any package manager you want. We recommend{' '}
            <Link
              component={'a'}
              href={'https://yarnpkg.com/'}
              target={'blank'}
            >
              yarn
            </Link>
            . But you can use also{' '}
            <Link
              component={'a'}
              href={'https://www.npmjs.com/'}
              target={'blank'}
            >
              npm
            </Link>
            .
          </Typography>
          <Box marginTop={2}>
            {renderCodeBlock(
              `cd [project folder]/gatsbyjs
yarn install`,
              'bash',
            )}
          </Box>
        </Box>
        <Box marginBottom={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            3. Start
          </Typography>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Once the installation is done, you can now start your app by running{' '}
            <code>npm run develop</code> or <code>yarn develop</code>.
          </Typography>
          <Box marginY={2}>{renderCodeBlock('yarn develop', 'bash')}</Box>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            This starts a local webserver at <code>http://localhost:8080</code>{' '}
            and auto detect file changes:
          </Typography>
          <Box marginY={2}>
            {renderCodeBlock(
              `You can now view thefront-js--gatsby in the browser.
              http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your sites data and schema
              http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build.

success - Building development bundle`,
              'bash',
            )}
          </Box>
        </Box>
        <Box marginBottom={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            3. Build
          </Typography>
          <Box marginY={2}>{renderCodeBlock('yarn build', 'bash')}</Box>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            You can also use <code>npm run build</code>.
          </Typography>
          <Box marginTop={2}>
            <Box
              padding={1.5}
              borderLeft={`${theme.spacing(0.5)} solid ${
                theme.palette.divider
              }`}
            >
              <Typography variant={'subtitle2'}>
                This project doesn’t handle backend logic or databases; it is
                just a frontend, so you can use it with any backend you want.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default QuickStartGatsbyJS;

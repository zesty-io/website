/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const ContainerComponent = () => {
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
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Container
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Custom container decraration is inside{' '}
            <code>src/components/Container.js</code>
          </Typography>
          <Box>
            {renderCodeBlock(`import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;`)}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Example of the Container component
          </Typography>
          <Typography
            gutterBottom
            sx={{
              marginBottom: 2,
            }}
          >
            The custom container is an alternative of{' '}
            <Link
              underline="hover"
              href="https://mui.com/api/container/"
              target={'_blank'}
            >
              MUI Container Component
            </Link>
            . You are free to replace the Container which is coming with the
            theme with MUI Container
          </Typography>
          <Container bgcolor={alpha(theme.palette.primary.main, 0.1)}>
            <Box padding={2} bgcolor={theme.palette.background.paper}>
              This is custom Container with custom width and padding.
            </Box>
          </Container>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default ContainerComponent;

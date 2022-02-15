/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const Shadows = () => {
  const theme = useTheme();
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
            Shadows
          </Typography>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Custom shadows are in <code>src/theme/shadows.js</code>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Examples
          </Typography>
          <Typography gutterBottom>
            Learn more about shadows from{' '}
            <Link
              underline="hover"
              href="https://mui.com/system/shadows/"
              target={'_blank'}
            >
              MUI shadows
            </Link>
          </Typography>
          <Box
            padding={4}
            borderRadius={2}
            boxShadow={0}
            marginBottom={4}
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            No Shadow: <code>{'boxShadow={0}'}</code>
          </Box>
          <Box
            padding={4}
            borderRadius={2}
            boxShadow={1}
            marginBottom={4}
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Small Shadow: <code>{'boxShadow={1}'}</code>
          </Box>
          <Box
            padding={4}
            borderRadius={2}
            boxShadow={2}
            marginBottom={4}
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Regular shadow: <code>{'boxShadow={2}'}</code>
          </Box>
          <Box
            padding={4}
            borderRadius={2}
            boxShadow={3}
            marginBottom={4}
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Larger shadow: <code>{'boxShadow={3}'}</code>
          </Box>
          <Box
            padding={4}
            borderRadius={2}
            boxShadow={4}
            marginBottom={4}
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            Soft shadow: <code>{'boxShadow={4}'}</code>
          </Box>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default Shadows;

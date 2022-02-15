/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { colors } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';
import Chart1 from 'svg/illustrations/Chart1';
import Chart2 from 'svg/illustrations/Chart2';
import Chart3 from 'svg/illustrations/Chart3';
import Chart4 from 'svg/illustrations/Chart4';
import CreditCards from 'svg/illustrations/CreditCards';
import CreditCards2 from 'svg/illustrations/CreditCards2';

const Illustrations = () => {
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
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Illustrations
          </Typography>
          <Typography gutterBottom>
            There are two type of illustrations - static and dynamic
            illustrations
          </Typography>
          <Typography
            gutterBottom
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The dynamic illustrations in the theme are simple React components
            stored in <code>src/svg/illustrations</code>. They can be used as
            normal React components. For example:
          </Typography>
          <Box marginY={2}>
            {renderCodeBlock(`import Box from '@mui/material/Box';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';

<Box height={1} width={1} maxWidth={600}>
  <CreditCardsIllustration width={'100%'} height={'100%'} />
</Box>`)}
          </Box>
          <Typography gutterBottom>
            Illustrations are created by using{' '}
            <Link href={'https://www.manypixels.co/gallery'} target={'_blank'}>
              Many Pixels
            </Link>{' '}
            and{' '}
            <Link href={'https://www.drawkit.io/'} target={'_blank'}>
              Drawkit.io
            </Link>
          </Typography>
        </Box>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Grid container spacing={4}>
          {[
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg',
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg',
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg',
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg',
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration5.svg',
            'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg',
          ].map((item, i) => (
            <Grid
              item
              alignItems={'center'}
              justifyContent={'center'}
              key={i}
              xs={12}
              sm={6}
              md={4}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                boxShadow={3}
              >
                <Box
                  component={CardContent}
                  padding={4}
                  display={'flex'}
                  alignItems={'center'}
                  height={1}
                >
                  <Box
                    component={'img'}
                    src={item}
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {[
            <CreditCards width={'100%'} height={'100%'} />,
            <CreditCards2 width={'100%'} height={'100%'} />,
            <Chart1 width={'100%'} height={'100%'} />,
            <Chart2 width={'100%'} height={'100%'} />,
            <Chart3 width={'100%'} height={'100%'} />,
            <Chart4 width={'100%'} height={'100%'} />,
          ].map((item, i) => (
            <Grid
              item
              alignItems={'center'}
              justifyContent={'center'}
              key={i}
              xs={12}
              sm={6}
              md={4}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                boxShadow={3}
              >
                <Box
                  component={CardContent}
                  padding={4}
                  display={'flex'}
                  alignItems={'center'}
                  height={1}
                >
                  {item}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FixedLayout>
  );
};

export default Illustrations;

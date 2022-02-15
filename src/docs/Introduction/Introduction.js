import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';
import { Hero } from './components';

const Introduction = () => {
  return (
    <FixedLayout>
      <Box sx={{ overflow: 'hidden !important' }}>
        <Hero />
        <Container paddingTop={'0 !important'}>
          <Box>
            <Typography gutterBottom>
              theFront UI Kit is built with{' '}
              <Link
                underline={'hover'}
                href={'https://mui.com/'}
                target={'_blank'}
              >
                MUI v5
              </Link>{' '}
              and{' '}
              <Link
                underline={'hover'}
                href={'https://create-react-app.dev/'}
                target={'_blank'}
              >
                Create React App
              </Link>
              {', '}
              <Link
                underline={'hover'}
                href={'https://nextjs.org/'}
                target={'_blank'}
              >
                NextJS
              </Link>
              {', '}
              <Link
                underline={'hover'}
                href={'https://www.gatsbyjs.com/'}
                target={'_blank'}
              >
                GatsbyJS
              </Link>
              {', '}
              <Link
                underline={'hover'}
                href={'https://www.typescriptlang.org/'}
                target={'_blank'}
              >
                TypeScript
              </Link>
              .
            </Typography>
            <Typography gutterBottom>
              A professional React Kit that comes with plenty of ready-to-use
              MUI components that will help you to build more beautiful ontend
              pages.
            </Typography>
            <Typography gutterBottom>
              The theme is ready to change to any style you want.
            </Typography>
            <Typography gutterBottom>
              theFront landing page examples can be used out of the box, but
              since they’re built on flexible components, you can also create
              new pages all your own with ease.
            </Typography>
            <Typography gutterBottom>
              Copy-paste a section here, a component there, switch up a few
              variables, and you have an entirely new landing!
            </Typography>
            <Box marginTop={4}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Feedback
              </Typography>
              <Typography gutterBottom>
                We are always open to your feedback at{' '}
                <Link
                  component={'a'}
                  href="mailto:hi@maccarianagency.com"
                  color={'primary'}
                >
                  hi@maccarianagency.com
                </Link>
              </Typography>
              <Typography>
                If something is missing in the documentation, or if you found
                some part confusing, contact us with your suggestions for
                improvement. We love hearing from you!
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </FixedLayout>
  );
};

export default Introduction;

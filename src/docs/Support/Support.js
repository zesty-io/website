import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const Support = () => {
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
            Support
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography>
            Our support mainly covers pre-sales questions, basic template
            questions, and bug reports through our support email:{' '}
            <Link
              component={'a'}
              href="mailto:hi@maccarianagency.com"
              color={'primary'}
            >
              hi@maccarianagency.com
            </Link>
            .
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography>
            To be eligible to request technical support you must have purchased
            the template and have at least one regular or extended license.
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography>
            When you send a support request please describe your issue in
            detail. If you can provide a link to your developing site then this
            can help us to solve your issue more quickly.
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography>
            All 3rd party plugins used in the theme are provided as bonus and we
            do not give any guarantee to their functionality. Our support does
            not cover any 3rd party plugin customization or bug fixes that are
            not in our control.
          </Typography>
        </Box>
        <Box>
          <Typography>
            Customers are always welcome to ask for feature requests and give
            suggestions that can improve our premium themes. All feature
            requests will be considered, and the new features released with
            upcoming releases.
          </Typography>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default Support;

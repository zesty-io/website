import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const CtaWithRightDownloadButton = () => {
  return (
    <Container>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Everything your team could need.
        </Typography>
        <Typography variant="h6" color={'text.secondary'}>
          We make sure to include all the amenities and niceties that a growing
          startup could possibly need.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Download the package
          </Typography>
          <Typography>
            Get your dream data management system without the hassle.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                width={20}
                height={20}
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            }
          >
            Download now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaWithRightDownloadButton;

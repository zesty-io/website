/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const WithCompanyLogo = ({ header, content, logo }) => {
  const theme = useTheme();

  return (
    <Box bgcolor={'alternate.main'} sx={{ marginBottom: '2rem' }}>
      <Container>
        {header && (
          <Typography
            variant="p"
            component="h2"
            color="text.primary"
            sx={{
              fontWeight: '700',
              textAlign: 'center',
              fontSize: '32px',
              marginBottom: '2rem',
            }}
          >
            {header || FillerContent.header}
          </Typography>
        )}
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Box
            component="img"
            height={1}
            width={1}
            src={
              logo ||
              'https://assets.maccarianagency.com/svg/logos/google-original.svg'
            }
            alt="..."
            maxWidth={{ xs: 80, sm: 100, md: 120 }}
            marginBottom={2}
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'none',
            }}
          />
          <Typography
            variant="h5"
            fontWeight={400}
            alignItems={'center'}
            textAlign={'center'}
          >
            <Box dangerouslySetInnerHTML={{ __html: content }}></Box>
          </Typography>
          {/* <Typography variant={'h6'} component={'p'} align={'center'}>
            First class templates.
            <br />
            These guys know what they're doing: great code quality, clear naming
            conventions and clear code structure.
            <br />
            Plain awesome and a pleasure to work with.
          </Typography>
          <Box marginTop={{ xs: 2, sm: 4 }}>
            <Typography
              variant={'h6'}
              sx={{ fontWeight: 700 }}
              align={'center'}
            >
              Jhon Anderson
            </Typography>
            <Typography color="text.secondary" align={'center'}>
              MUI lover
            </Typography>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default WithCompanyLogo;

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FillerContent from 'components/globals/FillerContent';

const SupportBanner = ({ text_content }) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <Box
              justifyContent={'center'}
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: text_content || FillerContent.header,
              }}
            />
            <Box marginTop={2} display={'flex'} justifyContent={'center'}>
              <Button
                size={'large'}
                href="mailto:support@zesty.io"
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Contact Support
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupportBanner;

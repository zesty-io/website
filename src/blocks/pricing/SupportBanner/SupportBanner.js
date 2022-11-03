import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import { Typography } from '@mui/material';

const SupportBanner = ({ text_content }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        {/* <Box
          justifyContent={'center'}
          gutterBottom
          dangerouslySetInnerHTML={{
            __html: text_content || FillerContent.header,
          }}
        /> */}
        <MuiMarkdown
          options={{
            overrides: {
              h3: {
                component: Typography,
                props: {
                  variant: 'h5',
                  component: 'h3',
                  sx: {
                    fontWeight: 'bold',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h6',
                  component: 'h4',
                },
              },
            },
          }}
        >
          {text_content || FillerContent.header}
        </MuiMarkdown>
        <Box display={'flex'} sx={{ mt: 2 }} justifyContent={'center'}>
          <Button
            sx={{
              border: `1px solid ${theme.palette.common.white}`,
              color: theme.palette.common.white,
              '&:hover': {
                background: theme.palette.zesty.zestyOrange,
                border: `1px solid ${theme.palette.zesty.zestyOrange}`,
              },
            }}
            color="secondary"
            variant="outlined"
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
    </Box>
  );
};

export default SupportBanner;

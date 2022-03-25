/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';


/* Begin Left Side Component */

function ContactFormWithSidebarMap({title, description, image,selectedValue=0, hideSelect=false}) {
 
  const theme = useTheme();

  const LeftSide = () => {
  

    return (
      <Box>
        <Box marginBottom={4}>
          <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
              {title}
          </Typography>
          <Typography color="text.secondary">
              {description}
          </Typography>
        </Box>
        <StandardFormWithSelect selectedValue={selectedValue}  hideSelect={false} />
      </Box>
    );
  };

  /* End Left Side Component*/
  /* Begin Right Side Component */

  const RightSide = () => {
    return (
      <Box>
        <img
          src={image}
          alt="Zesty Office"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{
            minHeight: 300,
            // maxWidth: 600,
            paddingTop: 135,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
            }} />
      </Box>
    );
  };

/* End Right Side Component */
/* Begin Form Component */
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default ContactFormWithSidebarMap;
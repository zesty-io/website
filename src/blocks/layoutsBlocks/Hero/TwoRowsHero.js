/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'markdown-to-jsx';

/**
 *  Components Imports
 * */
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FillerContent from 'components/globals/FillerContent';
import ZestyImage from '../../Image/ZestyImage';

const TwoRowsHero = ({
  eyebrow = FillerContent.header,
  title_and_description = FillerContent.header,
  image,
  primary_cta_text = 'Try Free',
  primary_cta_link = FillerContent.href,
  secondary_cta_text = 'Try Free',
  secondary_cta_link = FillerContent.href,
  isMobile,
}) => {
  const theme = useTheme();

  return (
    <Stack component="section" sx={{ py: 10 }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'span'}
            variant={'h6'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {eyebrow}
          </Typography>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h3',
                    component: 'h2',
                    sx: {
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyOrange,
                      textAlign: 'center',
                    },
                  },
                },

                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: {
                      mt: 2,
                      maxWidth: 850,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                    },
                  },
                },
              },
            }}
          >
            {title_and_description}
          </MuiMarkdown>
          <Box
            sx={{
              display: isMobile ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
              mt: 2,
              gap: 1,
            }}
          >
            <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
              <Button
                fullWidth={true}
                color="secondary"
                variant="contained"
                component="a"
                href={primary_cta_link}
                target="_blank"
              >
                {primary_cta_text}
              </Button>
            </Box>
            <Button
              component="a"
              target="_blank"
              href={secondary_cta_link}
              variant="outlined"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondary_cta_text ? 'flex' : 'none',
                alignItems: 'center',
                gap: '.5rem',
              }}
            >
              {secondary_cta_text}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>

        {image && (
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <ZestyImage
              alt="agency partner"
              width={1024}
              height={513}
              src={image?.data[0]?.url}
              style={{
                maxWidth: 900,
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        )}
      </Container>
    </Stack>
  );
};

export default TwoRowsHero;

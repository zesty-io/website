/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'mui-markdown';

/**
 *  Components Imports
 * */
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FillerContent from 'components/globals/FillerContent';
import ZestyImage from '../../Image/ZestyImage';

const TwoRowsHero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  heroImage,
  primaryCta = 'Try Free',
  primaryCta_link = FillerContent.href,
  secondaryCta = 'Try Free',
  secondaryCta_link = FillerContent.href,
  isMobile,
}) => {
  const theme = useTheme();

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(header);

  if (!isRichText && header) {
    header = `<h1>${header}</h1>`;
  }

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
            overrides={{
              h1: {
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
                    lineHeight: 1.2,
                    maxWidth: 850,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: 'center',
                  },
                },
              },
            }}
          >
            {header}
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
                href={primaryCta_link}
                target="_blank"
              >
                {primaryCta}
              </Button>
            </Box>
            <Button
              component="a"
              target="_blank"
              href={secondaryCta_link}
              variant="outlined"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondaryCta ? 'flex' : 'none',
                alignItems: 'center',
                gap: '.5rem',
              }}
            >
              {secondaryCta}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>

        {heroImage && (
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
              src={heroImage}
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

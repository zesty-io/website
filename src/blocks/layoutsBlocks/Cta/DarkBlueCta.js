/**
 * MUI Imports
 */

import { Box, Typography, Button, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';
import TryFreeButton from 'components/cta/TryFreeButton';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import FillerContent from 'components/globals/FillerContent';

const DarkBlueCta = ({
  header_content,
  cta_text,
  cta_secondary_text,
  cta_secondary_link,

}) => {
  const theme = useTheme();

  return (
    <Box component="section">
      <Container
        sx={{
          py:10,
          my:15,
          background: theme.palette.zesty.zestyDarkBlueRadialGradient,
          borderRadius: 5,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 1000, margin: 'auto' }}>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.common.white,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    },
                  },
                },

                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    sx: {
                      color: theme.palette.common.white,
                      textAlign: 'center',
                      lineHeight: 1.2,
                      mt: 2,
                    },
                  },
                },
              },
            }}
          >
            {header_content || FillerContent.headerAndDescription}
          </MuiMarkdown>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <TryFreeButton
              text={cta_text || FillerContent.cta}
              variant="contained"
              color="secondary"
            />

            {cta_secondary_text && (
              <Button
                component="a"
                target={'_blank'}
                href={cta_secondary_link || FillerContent.href}
                color="secondary"
                variant="outlined"
                sx={{
                  color: theme.palette.common.white,
                  border: `1px solid ${theme.palette.common.white}`,
                }}
              >
                {cta_secondary_text || FillerContent.cta}
                <ArrowRightAlt sx={{ ml: 1 }} />
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DarkBlueCta;

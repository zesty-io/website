/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import FillerContent from 'components/globals/FillerContent';

const Content = ({ page_content }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        component="section"
        sx={{ background: theme.palette.alternate.main }}
      >
        <Container sx={{ py: 10 }}>
          <Grid container spacing={2}>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
            >
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      variant: 'h6',
                      component: 'p',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        mt: 2,
                      },
                    },
                  },
                }}
              >
                {page_content || FillerContent.description}
              </MuiMarkdown>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
            >
              <Box>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Content;

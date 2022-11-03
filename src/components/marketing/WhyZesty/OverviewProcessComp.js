import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';

const OverviewProcessComp = ({ content, image }) => {
  const theme = useTheme();

  return (
    <Container sx={{ pt: 15 }}>
      <Grid container justify="center">
        <Box justifyContent="center" alignItems="center">
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
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
                      textAlign: 'center',
                      lineHeight: 1.2,
                      mt: 2,
                    },
                  },
                },
              },
            }}
          >
            {content || FillerContent.rich_text}
          </MuiMarkdown>
          <Container>
            {image && (
              <Box
                component={'img'}
                src={image}
                alt={FillerContent.header}
                width={1}
                height={1}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  justifyContent: 'center',
                }}
              />
            )}
          </Container>
        </Box>
      </Grid>
    </Container>
  );
};

export default OverviewProcessComp;

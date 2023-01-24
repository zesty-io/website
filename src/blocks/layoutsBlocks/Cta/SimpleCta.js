/**
 * Mui Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography, Container, Card } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import FillerContent from 'components/globals/FillerContent';

// Components Import
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const SimpleCta = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container>
      <MuiMarkdown
      options={{
           overrides:{
          h2: {
            component: Typography,
            props: {
              component: 'h2',
              variant: 'h3',
              sx: {
                color: theme.palette.zesty.zestyDarkText,
                fontWeight: 'bold',
                textAlign: 'center',
              },
            },
          },
          p: {
            component: Typography,
            props: {
              component: 'p',
              variant: 'h6',
              sx: {
                mt: 2,
                color: theme.palette.zesty.zestyZambezi,
                textAlign: 'center',
              },
            },
          },
        }
      }}
      >
        {header_content || FillerContent.rich_text}
      </MuiMarkdown>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <DemoCta
          icon={false}
          href={cta_link || FillerContent.href}
          sx={{
            mt: 4,
            background: theme.palette.zesty.zestyOrange,
            color: theme.palette.common.white,
            '&:hover': {
              background: theme.palette.zesty.zestyOrange,
            },
          }}
          text={cta_text || FillerContent.cta}
        />
      </Box>
    </Container>
  );
};
export default SimpleCta;

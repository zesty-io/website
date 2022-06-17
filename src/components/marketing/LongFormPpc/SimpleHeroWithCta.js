// MUI Imports
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// Components Imports
import TryFreeButton from 'components/cta/TryFreeButton';

const SimpleHeroWithCta = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCTA,
  onClick,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      style={{ marginTop: isMobile ? '0rem' : '1rem', marginBottom: '1rem' }}
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '20%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box paddingTop={isMobile ? 0 : 1} position={'relative'} zIndex={2}>
        <Box marginBottom={4}>
          <Typography
            variant="p"
            component={'h1'}
            color="text.primary"
            align={'center'}
            sx={{
              fontSize: isMobile ? '35px' : '48px',
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="p"
            component="h2"
            color="text.secondary"
            sx={{
              fontSize: '20px',
              fontWeight: 400,
            }}
            align={'center'}
          >
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'center' }}
          justifyContent={'center'}
        >
          <TryFreeButton
            component={'a'}
            variant="contained"
            color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
            size="large"
            fullWidth={isMd ? false : true}
            text={primaryCta}
          />
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', sm: 'auto', md: 'auto' }}
          >
            <Button
              component={'a'}
              onClick={onClick}
              variant="outlined"
              color={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
              size="large"
              fullWidth={isMd ? false : true}
            >
              {secondaryCTA}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Container>
  );
};

export default SimpleHeroWithCta;

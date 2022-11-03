// MUI Imports
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'markdown-to-jsx';

import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Container,
  Stack,
} from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const TwoColumnHeroWithImage = ({
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
}) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Grid sx={{ py: 10 }} container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.zesty.zestyZambezi,
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <MuiMarkdown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        lineHeight: 1.2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                }}
              >
                {description || FillerContent.description}
              </MuiMarkdown>
            </Box>
            <Stack direction={isMedium ? 'column' : 'row'} spacing={2}>
              <TryFreeButton
                fullWidth={isMedium}
                variant={'contained'}
                text={primaryCta}
              />
              <DemoCta />
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
        >
          <ZestyImage
            width={500}
            height={350}
            style={{ width: '100%', height: 'auto' }}
            src={image}
            alt="headless cms image"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TwoColumnHeroWithImage;

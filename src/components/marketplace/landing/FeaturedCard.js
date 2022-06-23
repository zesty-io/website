/**
 * MUI Imports
 */
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

const AppCard = ({ name, image, uri, meta_description }) => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 500));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component={'a'} href={uri} sx={{ textDecoration: 'none' }}>
      <Card
        sx={{
          '&:hover': {
            border: `1px solid ${theme.palette.zesty.zestyOrange}`,
          },
          margin: 'auto',
          width: '100%',
          maxWidth: 560,
          minHeight: 160,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent sx={{ px: 4 }}>
          <Box
            sx={{
              display: isExtraSmall ? 'block' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 142,
                minHeight: isExtraSmall ? 0 : 200,
                display: 'flex',
                alignItems: 'center',
                my: isExtraSmall ? 1 : 0,
                p: isTablet ? 2 : 0,
              }}
            >
              <Box
                sx={{ width: 100 }}
                component="img"
                alt=""
                src={image || FillerContent.logos[0].url}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyZambezi,
                }}
                variant="h5"
                component="h2"
              >
                {name}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    sx={{
                      color: theme.palette.zesty.zestyLightText,
                    }}
                    variant="caption"
                    component="p"
                  >
                    By zesty.io{' '}
                  </Typography>
                  <CheckCircleIcon
                    color="primary"
                    sx={{ width: 18, height: 18 }}
                  />
                </Box>
              </Typography>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{ color: theme.palette.zesty.zestyLightText }}
                  variant="body1"
                  component="p"
                >
                  {meta_description}
                </Typography>

                <Box
                  sx={{
                    mt: 1,
                    width: '100%',
                    maxWidth: 115,
                    height: 22,
                    p: 1,
                    background: theme.palette.zesty.zestyGray99,
                    border: `1px solid ${theme.palette.common.grey}`,
                    borderRadius: 47,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 13,
                      height: 13,
                    }}
                    src="https://brand.zesty.io/zesty-io-logo.svg"
                  />
                  <Typography
                    sx={{
                      color: theme.palette.zesty.zestyLightText,
                      fontSize: 11,
                    }}
                  >
                    Recommended
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppCard;

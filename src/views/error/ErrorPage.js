import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/Main';
import Container from 'components/Container';
import InfoIcon from '@mui/icons-material/Info';
import { Stack } from '@mui/material';

export const ErrorPage = ({ errorCode = '404' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1 }}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box width={1} display={'flex'} alignItems={'center'} pl={10}>
              <Stack>
                <InfoIcon fontSize="small" color="error" />
                <Typography
                  pt={2}
                  variant="body3"
                  color={'text.secondary'}
                  align={isMd ? 'left' : 'center'}
                >
                  Error {errorCode}
                </Typography>
                <Typography
                  variant="h3"
                  color="text.primary"
                  align={isMd ? 'left' : 'center'}
                >
                  Even the things we love break sometimes
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  align={isMd ? 'left' : 'center'}
                  pt={2}
                  pb={2}
                >
                  Thank you for your patience while we put the pieces back
                  together.
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
                minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
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
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box
                        component={LazyLoadImage}
                        effect="blur"
                        src={
                          'https://kfg6bckb.media.zestyio.com/The-Architect-Zesty-io-Hero-Campaign.png'
                        }
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          visibility: 'hidden',
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

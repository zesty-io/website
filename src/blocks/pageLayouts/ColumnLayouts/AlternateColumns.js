/**
 * Mui Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography, Container, Card } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import FillerContent from 'components/globals/FillerContent';

// Components Import
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const AlternateColumns = ({
  header_content,
  cta_link,
  cta_text,
  column_data,
}) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const COLORS = [
    theme.palette.common.white,
    theme.palette.zesty.zestyWhite,
    theme.palette.zesty.zestyDarkBlue,
    theme.palette.zesty.zestyWhite,
  ];

  return (
    <Box
      sx={{
        pt: 15,
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          overrides={{
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
      <Box sx={{ mt: 10 }}>
        {column_data?.map((item, idx) => (
          <Card
            variant="outlined"
            sx={{
              py: 20,
              background: isDarkMode
                ? theme.palette.zesty.zestyDarkBlue
                : COLORS[idx],
              border: 'none',
              borderRadius: 0,
            }}
          >
            <Container>
              <Grid container spacing={5}>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 4,
                  }}
                  item
                  xs={12}
                  md={6}
                  order={{ sm: idx % 2 ? 1 : 0 }}
                >
                  <Box>
                    <Typography
                      variant={'h4'}
                      component={'h3'}
                      sx={{
                        color:
                          idx === 2
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                        textAlign: isMedium ? 'center' : 'text-left',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.header || FillerContent.header}
                    </Typography>
                    <MuiMarkdown
                      overrides={{
                        h3: {
                          component: Typography,
                          props: {
                            variant: 'h4',
                            component: 'h3',
                            color:
                              idx === 2
                                ? theme.palette.common.white
                                : theme.palette.zesty.zestyZambezi,
                            textAlign: isMedium ? 'center' : 'text-left',
                            fontWeight: 'bold',
                          },
                        },
                        p: {
                          component: Typography,
                          props: {
                            variant: 'h6',
                            mt: 1,
                            component: 'p',
                            color:
                              idx === 2
                                ? theme.palette.common.white
                                : theme.palette.zesty.zestyZambezi,
                            textAlign: isMedium ? 'center' : 'text-left',
                          },
                        },
                        
                        ul: {
                          component: Typography,
                          props: {
                            mt: 2,
                            component: 'ul',
                          },
                        },
                        li: {
                          component: Typography,
                          props: {
                            variant: 'h6',
                            component: 'li',
                            color:
                              idx === 2
                                ? theme.palette.common.white
                                : theme.palette.zesty.zestyZambezi,
                            textAlign: isMedium ? 'center' : 'text-left',
                          },
                        },
                      }}
                    >
                      {item.content || FillerContent.rich_text}
                    </MuiMarkdown>
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box>
                    <ZestyImage
                      width={599}
                      height={420}
                      alt={item?.header || ''}
                      style={{ width: '100%', maxWidth: 599, height: 'auto' }}
                      src={item?.image || FillerContent.photos[0].src}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AlternateColumns;

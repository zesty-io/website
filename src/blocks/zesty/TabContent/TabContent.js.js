/**
 * MUI Imports
 */
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ZoomMui from '@mui/material/Zoom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MuiMarkdown from 'markdown-to-jsx';

/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

import ZestyImage from 'blocks/Image/ZestyImage';

const TabContent = ({ header, data, marginTop = 0 }) => {
  const theme = useTheme();
  const [active, setactive] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imgWidth = isMobile ? 300 : 500;

  return (
    <Box paddingY={1} sx={{mt: marginTop}}>
      <Container>
        <Box paddingBottom={isMobile ? 10 : 10} sx={{}}>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      mt: 5,
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      mt: 5,
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    },
                  },
                },
              },
            }}
          >
            {header || FillerContent.description}
          </MuiMarkdown>
        </Box>

        <Box>
          <Grid container spacing={5}>
            <Grid item sm={12} md={6}>
              <Box>
                <Box>
                  {data?.map((e, i) => {
                    return (
                      <ZoomMui
                        in={active === i}
                        style={{ display: active === i ? 'block' : 'none' }}
                      >
                        <Box
                          src={
                            e.img?.data[0].url ||
                            FillerContent.logos[0].url
                          }
                          alt=""
                          component="img"
                          sx={{
                            width: '100%',
                          }}
                        />
                      </ZoomMui>
                    );
                  })}
                </Box>
              </Box>
            </Grid>

            <Grid item sm={12} md={6}>
              <Box>
                <Box>
                  {data?.map((e, i) => {
                    return i === active ? (
                      <CustomCard key={i} data={e} theme={theme} />
                    ) : (
                      <Box
                        key={i}
                        onClick={() => setactive(i)}
                        paddingY={2}
                        paddingLeft={4}
                        sx={{
                          borderBottom: `1px solid ${theme.palette.secondary.whiteSmoke}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          cursor: 'pointer',
                        }}
                      >
                        <ZestyImage
                          src={e?.icon}
                          alt=""
                          width={50}
                          height={50}
                          style={{ filter: 'grayscale(100%)' }}
                        />
                        <Typography
                          component={'p'}
                          variant={'p'}
                          sx={{
                            color: theme.palette.secondary.darkCharcoal,
                            fontWeight: 'light',
                            textAlign: 'left',
                          }}
                          dangerouslySetInnerHTML={{
                            __html: e.subText,
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const CustomCard = ({ data, theme }) => {
  return (
    <Card
      sx={{
        marginTop: '1rem',
        padding: '3rem 1rem',
        display: 'flex',
        alignItems: 'flex-start',
        borderTop: `6px solid ${theme.palette.zesty.zestyTealWhite}`,
      }}
    >
      <Box paddingX={2} paddingTop={2}>
        <img src={data.icon} alt="" width={50} />
      </Box>
      <Box>
        <MuiMarkdown
          options={{
            overrides: {
              h3: {
                component: Typography,
                props: {
                  component: 'h3',
                  variant: 'h6',
                  sx: {
                    color: theme.palette.zesty.zestyOrange,
                    fontWeight: 'bold',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'body1',
                },
              },
            },
          }}
        >
          {data.text}
        </MuiMarkdown>

        {data.href && (
          <Link
            href={data.href}
            underline="always"
            paddingTop={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontWeight: 'bold',
            }}
          >
            {data.ctaName} <ArrowRightAltIcon />
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default TabContent;

// React Imports
import { useState } from 'react';

// MUI Imports
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  Link,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';

const TopBrands = ({
  theme,
  title,
  content,
  isMobile,
  isDarkMode,
  FillerContent,
  sx,
}) => {
  console.log(sx);
  const caseStudies = [...(content.case_studies.data || [])];
  const [active, setActive] = useState(caseStudies[0]);
  /**
   * set the current active case study
   * @param idx - the index of the case study that was clicked
   */
  const caseStudyActiveHandler = (idx) => {
    setActive(caseStudies[idx]);
  };

  return (
    <Box sx={sx} component="section">
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mt: 5,
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
            fontWeight: 'bold',
            px: 4,
          }}
        >
          {title || FillerContent.header}
        </Typography>
      </Box>
      <Box
        component="section"
        sx={{ background: theme.palette.zesty.zestySeaShell, py: 5, mt: 5 }}
      >
        <Container>
          <Grid container>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              order={{ xs: 2, md: 1 }}
              sm={12}
              md={3}
            >
              <Box
                sx={{
                  flexDirection: isMobile ? 'row' : 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 4,
                  mt: 4,
                  flexWrap: 'wrap',
                }}
              >
                {caseStudies?.map((item, idx) => (
                  <Button
                    key={idx}
                    onClick={() => caseStudyActiveHandler(idx)}
                    sx={{ opacity: item.title === active.title ? 1 : 0.3 }}
                  >
                    <Box
                      sx={{
                        width: 126,
                        height: 43,
                        filter: isDarkMode ? 'invert(100%)' : 'inherit',
                      }}
                      src={item.logo.data[0].url || FillerContent.logos[0].url}
                      component="img"
                      alt="case studies logo"
                    />
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid order={{ xs: 1, md: 2 }} item sm={12} md={9}>
              <Card
                sx={{
                  p: 5,
                  mt: 5,
                  minHeight: 294,
                  background: isDarkMode
                    ? 'transparent'
                    : theme.palette.common.white,

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid container spacing={2}>
                  <Grid sx={{ width: '100%' }} item sm={12} lg={6}>
                    <Box>
                      <Box
                        sx={{
                          borderRadius: 5,
                          display: 'block',
                          width: '100%',
                          maxWidth: 341,
                          minHeight: 218,
                        }}
                        component="img"
                        alt="company image showcase"
                        src={
                          active.image.data[0].url || FillerContent.logos[0].url
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                    item
                    sm={12}
                    lg={6}
                  >
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            my: 2,
                            width: 143,
                            filter: isDarkMode ? 'invert(100%)' : 'inherit',
                          }}
                          component="img"
                          alt="logo"
                          src={
                            active.logo.data[0].url ||
                            FillerContent.logos[0].url
                          }
                        />
                      </Box>

                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: Typography,
                            props: {
                              variant: 'h6',
                              component: 'p',
                              sx: {
                                color: theme.palette.zesty.zestyZambezi,
                                letterSpacing: 0,
                                lineHeight: '25px',
                              },
                            },
                          },
                        }}
                      >
                        {active.summary || FillerContent.description}
                      </MuiMarkdown>
                      <Box sx={{ pt: 2 }}>
                        <Link
                          href={
                            active.card_link.data[0].meta.web.uri ||
                            FillerContent.href
                          }
                        >
                          Learn More
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default TopBrands;

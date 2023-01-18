/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  useMediaQuery,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from 'blocks/container/Container';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import SimpleStats from 'blocks/zesty/Growth/SimpleStats';

const CaseStudyCards = ({
  title_and_description,
  g2_badges,
  casestudiesdata = FillerContent.platformCard,
  caseStudiesBackground,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      sx={{
        background: caseStudiesBackground
          ? caseStudiesBackground
          : theme.palette.zesty.zestyWhite,
        py: isSmall ? 10 : 15,
      }}
    >
      <Container>
        <Box>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: isDarkMode
                        ? theme.palette.common.white
                        : theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                      textAlign: ' center',
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: isDarkMode
                        ? theme.palette.common.white
                        : theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                      textAlign: ' center',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    mt: 2,
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      color: isDarkMode
                        ? theme.palette.common.white
                        : theme.palette.zesty.zestyDarkText,
                      textAlign: ' center',
                    },
                  },
                },
              },
            }}
          >
            {title_and_description || FillerContent.title_and_descriptionAndDescription}
          </MuiMarkdown>
        </Box>

        {g2_badges?.data && (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', gap: 5, mt: 10 }}
          >
            {g2_badges?.data?.map((item, index) => (
              <Box key={index} sx={{ width: '100%', maxWidth: 171 }}>
                <ZestyImage
                  width={171}
                  height={192}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                  src={item.url || FillerContent.photos[0].src}
                  alt={item.type || ''}
                />
              </Box>
            ))}
          </Box>
        )}
        
        <Grid sx={{ mt: 5 }} container spacing={4}>
          {casestudiesdata?.data.map((item, index) => (
            <Grid key={index} item sm={12} md={4}>
              <Card
                component="a"
                href={item.link || FillerContent.href}
                target="_blank"
                sx={{
                  width: '100%',
                  maxWidth: 482,
                  minHeight: 484,
                  borderRadius: 5,
                  margin: 'auto',
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <ZestyImage
                  width={482}
                  height={233}
                  style={{ width: '100%', maxWidth: 482, height: 'auto' }}
                  loading="lazy"
                  src={item.image?.data[0]?.url || FillerContent.photos[0].src}
                  alt={item.title || ''}
                />
                <Box
                  sx={{
                    p: 2,
                    height: '100%',
                  }}
                >
                  <Box>
                    <Box sx={{ width: '100%', maxWidth: 150 }}>
                      <ZestyImage
                        width={194}
                        height={60}
                        style={{ width: '100%', maxWidth: 194, height: 'auto' }}
                        component="img"
                        loading="lazy"
                        src={
                          item.logo?.data[0]?.url || FillerContent.photos[0].src
                        }
                        alt={item.title || ''}
                      />
                    </Box>

                    <Box>
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: theme.palette.zesty.zestyZambezi, mt: 2 }}
                      >
                        {item.summary || FillerContent.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ position: 'absolute', bottom: 10, right: 20 }}>
                    <Button
                      sx={{
                        color: theme.palette.zesty.zestyOrange,
                        fontWeight: 'bold',
                        '&:hover': {
                          background: 'transparent',
                        },
                      }}
                      component="a"
                      href={
                        item.card_link?.data[0]?.meta?.web?.uri ||
                        FillerContent.cta
                      }
                      target="_blank"
                    >
                      {item.cta || 'Learn more'}
                      <ArrowRightAltIcon sx={{ ml: 1 }} />
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudyCards;

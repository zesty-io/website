/**
 * MUI Imports
 */

import { Box, Typography, Card } from '@mui/material';

import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';

const Growth = ({
  content,
  FillerContent,
  theme,
  isMedium,
  isLarge,
  isExtraLarge,
}) => {
  const flexOrder = ['flex-end', 'center', 'flex-start'];
  return (
    <Box component={'section'} sx={{ py: 5, position: 'relative' }}>
      <Box
        sx={{
          display: isExtraLarge && 'none',
          position: 'absolute',
          width: '100%',
          maxWidth: 1400,
        }}
        component="img"
        loading="lazy"
        src={content.growth_background?.data[0].url}
        alt="timeline guide"
      />
      <Container>
        <Box
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-offset="700"
          sx={{
            width: '100%',
            maxWidth: isExtraLarge ? '100%' : 639,
            textAlign: isExtraLarge ? 'center' : 'left',
          }}
        >
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h3',
                  component: 'h2',
                  sx: {
                    color: theme.palette.zesty.zestyOrange,
                    fontWeight: 'bold',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h4',
                  component: 'p',
                  sx: {
                    color: theme.palette.zesty.zestyZambezi,
                    lineHeight: 1.2,
                    mt: 2,
                  },
                },
              },
            }}
          >
            {content.growth_title_and_description || FillerContent.description}
          </MuiMarkdown>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: isExtraLarge ? 'flex' : 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {content.growth_cards?.data.map((item, index) => (
            <Box
              key={index}
              data-aos-delay="150"
              data-aos-offset="400"
              data-aos="fade-up"
              data-aos-duration={`${index + 1}000`}
              sx={{
                display: 'flex',
                justifyContent: isExtraLarge ? 'center' : flexOrder[index],
                py: 2,
                position: 'relative ',
              }}
            >
              <Card
                sx={{
                  p: 4,
                  width: '100%',
                  maxWidth: 664,
                  minHeight: 193,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ width: '100%', maxWidth: 153 }}>
                  <ZestyImage
                    width={157}
                    height={147}
                    options={{ width: 157, height: 147 }}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    src={item.icon_image?.data[0].url}
                    l
                    alt={item.feature_name || ''}
                  />
                </Box>
                <Box>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{
                      color: theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.feature_name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="h6"
                    sx={{
                      color: theme.palette.zesty.zestyZambezi,
                      lineHeight: 1.2,
                      mt: 1,
                    }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Growth;

import { Box, Card, CardContent, Typography } from '@mui/material';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/zesty/Image/ZestyImage';
import MuiMarkdown from 'mui-markdown';
import { useTheme } from '@mui/material/styles';

const SimpleCardLogo = ({
  FillerContent,
  isDarkMode,
  logoItems,
  heading_text = '',
}) => {
  const theme = useTheme();
  const sunsDarkLogoUrl =
    'https://kfg6bckb.media.zestyio.com/sunsdark.1fc97b3c326478bf6afcb60e52679656.png?width=241';

  return (
    <Box component="section">
      <Container>
        <Card sx={{ py: 2 }}>
          <CardContent>
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mb: 4,
                    },
                  },
                },
              }}
            >
              {heading_text}
            </MuiMarkdown>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
              {logoItems?.map((item, index) => (
                <Box key={index} sx={{ display: 'flex' }}>
                  <ZestyImage
                    width={150}
                    height={50}
                    loading="lazy"
                    style={{
                      filter: isDarkMode
                        ? `${
                            item.customer_name === 'Phoenix Suns'
                              ? ''
                              : 'brightness(0%)'
                          } invert(1)`
                        : '',
                    }}
                    alt={item.customer_name || ''}
                    src={
                      item.customer_name === 'Phoenix Suns' && isDarkMode
                        ? sunsDarkLogoUrl
                        : `${item.customer_logo.data[0].url}`
                    }
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SimpleCardLogo;

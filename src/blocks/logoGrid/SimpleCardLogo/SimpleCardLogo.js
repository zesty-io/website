import { Box, Card, CardContent } from '@mui/material';
import Container from 'blocks/container/Container';

const SimpleCardLogo = ({ FillerContent, isDarkMode, logoItems }) => {
  return (
    <Box component="section">
      <Container>
        <Card sx={{ py: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: 4,
              }}
            >
              {logoItems?.map((item, index) => (
                <Box key={index} sx={{ display: 'flex' }}>
                  <Box
                    sx={{ filter: isDarkMode ? 'invert(100%)' : '' }}
                    component="img"
                    src={
                      item.customer_logo.data[0].url ||
                      FillerContent.logos[0].url
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

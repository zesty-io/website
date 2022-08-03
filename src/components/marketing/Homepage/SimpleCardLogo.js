import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const SimpleCardLogo = ({ content, FillerContent }) => {
  console.log('Test', content.homepage_logos);
  return (
    <Box sx={{ width: ' 100%', maxWidth: 1500, margin: 'auto', px: 4 }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {content.homepage_logos.data.map((item) => (
              <Box>
                <Box
                  component="img"
                  src={
                    item.customer_logo.data[0].url || FillerContent.logos[0].url
                  }
                />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SimpleCardLogo;

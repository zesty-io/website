/**
 * MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import Container from 'blocks/container/Container';

const Resources = ({ theme, content, FillerContent, isLarge }) => {
  return (
    <Box component="section">
      <Container sx={{ py: 5 }}>
        <Box
          sx={{
            background: theme.palette.zesty.zestyDarkBlue,
            borderRadius: 5,
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: isLarge ? 'column' : 'row',
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: theme.palette.zesty.zestyOrange,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {content.resources_title || FillerContent.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
              flexWrap: 'wrap',
            }}
          >
            {content.resources_buttons?.data.map((item, index) => (
              <Box
                key={index}
                sx={{ display: 'block', width: '100%', maxWidth: 189 }}
                target="_blank"
                href={item.link}
                component="a"
              >
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={item.graphic.data[0].url}
                  alt={item.title}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Resources;

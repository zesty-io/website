// Mui Imports
import { Box, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Components Imports
import ZestyImage from 'blocks/Image/ZestyImage';

const Benefits = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            width: '100%',
            maxWidth: 928,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <MuiMarkdown>
            {content.headless_cms_benefits || FillerContent.rich_text}
          </MuiMarkdown>
          <ZestyImage
            width={928}
            height={495}
            style={{ width: '100%', height: 'auto' }}
            src={
              content.header_image.data[0].url || FillerContent.photos[0].src
            }
            alt="why zesty image"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;

import { Box, Button, Typography, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

import PopUpForm from './PopUpForm';

export default function PopUpLeadCapture({
  title,
  description,
  ctaText,
  thankYouMessage,
  pdfLink,
  cookieName,
  setShowPopup,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [downloadClick, setDownloadClick] = useState(false);
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'fixed',
        right: '0',
        bottom: '0',
        zIndex: 0,
        width: '100%',
        maxWidth: 290,
        display: 'flex',
        minHeight: isExpanded ? 110 : 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        background: theme.palette.zesty.zestyBlue,
        borderRadius: '20px 0 0 0px',
        transition: 'height 0.1s ease-in-out',
      }}
    >
      <Box
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          gap: 2,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              color: theme.palette.zesty.zestyWhite,
              fontWeight: 'bold',
              letterSpacing: 0.1,
              lineHeight: '16px',
            }}
          >
            {title}
          </Typography>
        </Box>

        {isExpanded ? (
          <KeyboardArrowDownIcon
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontSize: 18,
              position: 'absolute',
              right: 10,
              top: 4,
            }}
          />
        ) : (
          <KeyboardArrowUpIcon
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontSize: 18,
              position: 'absolute',
              right: 10,
              top: 4,
            }}
          />
        )}

        {isExpanded && (
          <Button
            size="small"
            onClick={() => setDownloadClick(!downloadClick)}
            variant="contained"
            color="secondary"
          >
            {ctaText}
          </Button>
        )}
        <PopUpForm
          pdfLink={pdfLink}
          thankYouMessage={thankYouMessage}
          description={description}
          setDownloadClick={setDownloadClick}
          height={downloadClick ? 425 : 0}
          cookieName={cookieName}
          setShowPopup={setShowPopup}
        />
      </Box>
    </Box>
  );
}

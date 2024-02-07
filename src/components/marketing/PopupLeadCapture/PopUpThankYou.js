import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PopUpThankYou({ thankYouMessage, pdfLink }) {
  const router = useRouter();

  useEffect(() => {
    // Download PDF from url on another tab
    window.open(pdfLink, '_blank');
  }, []);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontSize: 16,
        }}
      >
        {thankYouMessage}
      </Typography>

      <Button
        onClick={() => router.push('/demos')}
        size="small"
        variant="contained"
        color="secondary"
      >
        Book A Demo
      </Button>
    </Box>
  );
}

import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import Icon from '@mui/material/Icon';

export default function CodeBlock({
  text = 'npx create-next-app --example https://github.com/zesty-io/nextjs-starter',
  fontSize = '16px',
  bgcolor = 'black',
  border = 'none',
  color = '#fff',
}) {
  const [showCopy, setShowCopy] = React.useState(false);
  const [copyWords, setCopyWords] = React.useState('Click to Copy');
  const [icon, setIcon] = React.useState('content_copy');

  const theme = useTheme('dark');
  return (
    <Paper
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => {
        setShowCopy(false);
        setCopyWords('Click to Copy');
        setIcon('content_copy');
      }}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopyWords('Copied!');
        setIcon('check_circle');
      }}
      sx={{
        textAlign: 'center',
        height: 60,
        lineHeight: '60px',
        elevation: 2,
        cursor: 'pointer',
        position: 'relative',
        bgcolor,
        color,
        fontSize,
        border,
      }}
    >
      {text}
      {showCopy && (
        <Box
          sx={{
            height: '100%',
            position: 'absolute',
            left: '0px',
            top: '-10px',
            padding: '0 10px',
            borderRadius: '5px',
            top: '0px',
            zIndex: '10',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: bgcolor,
            color,
          }}
          color="info"
        >
          <Icon>{icon}</Icon>
          <span style={{ marginLeft: '5px', fontSize: '12px' }}>
            {copyWords}
          </span>
        </Box>
      )}
    </Paper>
  );
}

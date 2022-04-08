import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import Icon from '@mui/material/Icon';

export default function CodeBlock({
  text = 'npx create-next-app --example https://github.com/zesty-io/nextjs-starter',
  fontSize = '16px',
}) {
  const [showCopy, setShowCopy] = React.useState(false);
  const [copyWords, setCopyWords] = React.useState('Click to Copy');
  const [icon, setIcon] = React.useState('content_copy');

  const theme = useTheme('dark');
  return (
    <Paper
      onMouseOver={() => setShowCopy(true)}
      onMouseOut={() => {
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
        bgcolor: 'black',
        cursor: 'pointer',
        position: 'relative',
        color: theme.palette.zesty.zestyWhite,
        fontSize,
      }}
    >
      {text}
      {showCopy && (
        <Box
          sx={{
            position: 'absolute',
            left: '0px',
            padding: '0 10px',
            borderRadius: '5px',
            top: '0px',
            zIndex: '10',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0,0,0,.95)',
            overflow: 'hidden',
            color: theme.palette.zesty.zestyLightGrey,
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

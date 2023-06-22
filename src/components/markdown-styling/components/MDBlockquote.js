import { Box, Typography } from '@mui/material';

export const MDBlockquote = ({ node }) => {
  return (
    <Box
      sx={{
        mx: 5,
        background: '#e7e7e7',
        p: 2,
        borderLeft: '2px #ccc solid',
        mb: 3,
      }}
    >
      <Typography>{node.children[1].children[0].value}</Typography>
    </Box>
  );
};

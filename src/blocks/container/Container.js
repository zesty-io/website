const { Box } = require('@mui/material');

const Container = ({ children, maxWidth = 1500, sx }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { maxWidth },
        margin: 'auto',
        px: 4,
        sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;

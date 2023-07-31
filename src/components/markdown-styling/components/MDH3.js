import { Typography, Box } from '@mui/material';

export const MDH3 = ({ node }) => {
  return (
    <Box data-testid="mdh3-container">
      <Typography
        variant="h6"
        component={'h3'}
        id={node.children[0].value
          ?.replace(/[^\w\s]/gi, '')
          ?.replace(/\s+/g, '-')
          ?.toLowerCase()}
      >
        {node.children[0].value}
      </Typography>
    </Box>
  );
};

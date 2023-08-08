import { Typography, Box } from '@mui/material';
import { transformText } from 'utils/product';

export const MDH3 = ({ node }) => {
  const id = transformText(node.children[0].value);
  return (
    <Box data-testid="mdh3-container">
      <Typography variant="h6" component={'h3'} id={id}>
        {node.children[0].value}
      </Typography>
    </Box>
  );
};

import { Typography, Box } from '@mui/material';
import { transformText } from 'utils/product';

export const MDH4 = ({ node }) => {
  const id = transformText(node?.children[0]?.value);
  return (
    <Box data-testid="mdh3-container">
      <Typography variant="h4" component={'h4'} id={id}>
        {node?.children[0]?.value}
      </Typography>
    </Box>
  );
};

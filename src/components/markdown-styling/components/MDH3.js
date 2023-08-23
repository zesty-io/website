import { Typography } from '@mui/material';
import { transformText } from 'utils/product';

export const MDH3 = ({ node }) => {
  const id = transformText(node?.children[0]?.value);
  return (
    <Typography
      data-testid="mdh3-container"
      variant="h6"
      component={'h3'}
      id={id}
    >
      {node?.children[0]?.value}
    </Typography>
  );
};

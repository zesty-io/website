import { Typography } from '@mui/material';
import { transformText } from 'utils/product';

export const MDH4 = ({ node }) => {
  const id = transformText(node?.children[0]?.value);
  return (
    <Typography
      data-testid="mdh3-container"
      variant="h6"
      component={'h4'}
      id={id}
    >
      {node?.children[0]?.value}
    </Typography>
  );
};

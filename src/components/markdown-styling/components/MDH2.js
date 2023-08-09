import { transformText } from 'utils/product';
import { Link, Typography, Box } from '@mui/material';

export const MDH2 = ({ node }) => {
  const id = transformText(node?.children[0]?.value);

  return (
    <Box
      data-testid="mdh2-container"
      sx={{ display: 'flex', alignItems: 'center' }}
      gap={0.5}
    >
      <Typography variant="h5" component={'h2'} id={id}>
        {node?.children[0]?.value}
      </Typography>
      <Link
        sx={{
          fontSize: 24,
          opacity: 0,
          color: '#FF5D0A',
          '&:hover': {
            opacity: 1,
          },
        }}
        href={`#${id}`}
      >
        #
      </Link>
    </Box>
  );
};

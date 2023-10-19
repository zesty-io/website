import { transformText } from 'utils/product';
import { Link, Typography, Box } from '@mui/material';

export const MDH1 = ({ node }) => {
  const id = transformText(node?.children[0]?.value);

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center' }}
      data-testid="box-container"
      gap={0.5}
    >
      <Typography id={id} mt={2} fontWeight={800} variant="h4" component={'h1'}>
        {node?.children[0]?.value}
      </Typography>
      <Link
        sx={{
          pt: 2,
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

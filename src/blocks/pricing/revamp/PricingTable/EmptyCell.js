import { Box, TableCell, useMediaQuery, useTheme } from '@mui/material';

const EmptyCell = ({ tier, selectedTier }) => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));

  if (selectedTier !== tier && !isSmall) {
    return <></>;
  }

  return (
    <TableCell>
      <Box
        sx={{
          minHeight: '4em',
          maxHeight: '8em',
          mx: 1,
          backgroundColor:
            tier === 'Free'
              ? 'white'
              : tier === 'Growth' || tier === 'Enterprise'
              ? '#F2F4F7'
              : 'none',
          maxWidth: '260px',
        }}
      />
    </TableCell>
  );
};

export default EmptyCell;

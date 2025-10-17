import {
  useMediaQuery,
  useTheme,
  TableCell,
  Box,
  Typography,
  Button,
} from '@mui/material';

const HeaderCell = ({ data, selectedTier }) => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));

  if (selectedTier !== data.title && !isSmall) {
    return <></>;
  }

  return (
    <TableCell>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mx: '8px',
          padding: 2,
          borderRadius: '6px 6px 0 0',
          maxWidth: '260px',
          backgroundColor:
            data.title === 'Free'
              ? 'white'
              : data.title === 'Growth' || data.title === 'Enterprise'
              ? '#F2F4F7'
              : 'none',
        }}
      >
        {isSmall && (
          <Typography
            fontSize={18}
            fontWeight={700}
            textAlign={'center'}
            color={theme.palette.zesty.zestyZambezi}
            mb={1}
          >
            {data.title}
          </Typography>
        )}
        <Typography
          fontSize={18}
          fontWeight={400}
          textAlign={'center'}
          color={theme.palette.zesty.zestyZambezi}
          mt={isSmall ? 0 : 2}
          mb={2}
        >
          {data.price}
        </Typography>
        <Button
          href={data.primary_cta_link}
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            mb: 4,
          }}
        >
          {data.primary_cta_label}
        </Button>
      </Box>
    </TableCell>
  );
};

export default HeaderCell;

import { Box, Typography, Button } from '@mui/material';

const Switch = ({ theme, onClick, marketer, developer }) => {
  return (
    <Box
      sx={{
        background: theme.palette.background.grey,
        borderRadius: 10,
        width: 217,
        height: 40,
        display: 'flex',
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          fontSize: 12,
          background: marketer ? theme.palette.zesty.zestyOrange : 'inherit',
          color: marketer
            ? theme.palette.common.white
            : theme.palette.zesty.zestyLightText4,
          borderRadius: 10,
          borderRadius: 10,
          width: '100%',
          '&:hover': {
            background: marketer ? theme.palette.zesty.zestyOrange : 'inherit',
          },
        }}
      >
        Marketer
      </Button>
      <Button
        onClick={onClick}
        sx={{
          fontSize: 12,
          background: developer ? theme.palette.zesty.zestyOrange : 'inherit',
          color: developer
            ? theme.palette.common.white
            : theme.palette.zesty.zestyLightText4,
          borderRadius: 10,
          width: '100%',
          '&:hover': {
            background: developer ? theme.palette.zesty.zestyOrange : 'inherit',
          },
        }}
      >
        Developer
      </Button>
    </Box>
  );
};

export default Switch;

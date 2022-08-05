/**
 * MUI Imports
 */

const { Button, Box } = require('@mui/material');
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import { useTheme } from '@mui/material/styles';

const DemoCta = ({
  text = 'Watch Demo',

  color = 'white',
  fullWidth = false,
  icon = true,
  sx = {},
  href = 'demos/video',
  target = '_blank',
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Button
        fullWidth={fullWidth}
        variant=""
        sx={sx}
        component="a"
        color={color}
        href={href}
        target={target}
      >
        {text}
        {icon && (
          <ArrowRightAlt sx={{ ml: 1 }} />
        )}
      </Button>
    </Box>
  );
};

export default DemoCta;

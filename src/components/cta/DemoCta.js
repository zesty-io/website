/**
 * MUI Imports
 */

const { Button, Box } = require('@mui/material');
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import { useTheme } from '@mui/material/styles';

const DemoCta = ({
  text = 'Watch Demo',
  variant = 'outline',
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
        sx={sx}
        fullWidth={fullWidth}
        component="a"
        variant={variant}
        color={color}
        href={href}
        target={target}
      >
        {text}
        {icon && (
          <ArrowRightAlt sx={{ color: theme.palette.common.white, ml: 1 }} />
        )}
      </Button>
    </Box>
  );
};

export default DemoCta;

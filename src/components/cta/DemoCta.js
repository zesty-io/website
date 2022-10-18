/**
 * MUI Imports
 */

import Button from '@mui/material/Button';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

const DemoCta = ({
  text = 'Watch Demo',
  fullWidth = false,
  icon = true,
  sx = {},
  href = '/demos/video',
  target = '_blank',
  variant = '',
  color = 'primary',
}) => {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      sx={sx}
      component="a"
      href={href}
      target={target}
      color={color}
    >
      {text}
      {icon && <ArrowRightAlt sx={{ ml: 1 }} />}
    </Button>
  );
};

export default DemoCta;

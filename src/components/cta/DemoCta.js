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
  color = "primary"
}) => {
  const handleClick = () => {
    location.href = href;

    // Track Button Click by pushing item to the data layer
    window.dataLayer.push({
      event: 'btn_click',
      buttonText: text,
      currentPage: window.location.href,
      targetPage: href,
    });
    // uncomment this to bring the dropdown back
    //setAnchorEl(event.target);

    //setOpen(true);
  };

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      sx={sx}
      href={href}
      target={target}
      onClick={handleClick}
      color={color}
    >
      {text}
      {icon && <ArrowRightAlt sx={{ ml: 1 }} />}
    </Button>
  );
};

export default DemoCta;

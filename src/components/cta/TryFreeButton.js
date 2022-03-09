import React from "react";
import { Button } from "@mui/material";



export default function TryFreeButton({text="Try Free",target='blank',fullWidth=false, component='button',color="primary",size='medium', variant='contained'}) {
 return(
    <Button
      variant={variant}
      color={color}
      component={component}
      target={target}
      fullWidth={fullWidth}
      href="https://accounts.zesty.io/signup"
      size={size}
    >
    {text}
  </Button>
 )
};
import React from "react";
import { Button } from "@mui/material";



export default function TryFreeButton({text="Try Free",target='blank',component='a',color="primary",size='medium', variant='button'}) {
 return(
    <Button
    variant={variant}
    color={color}
    component={component}
    target={target}
    href="https://accounts.zesty.io/signup"
    size={size}
  >
    {text}
  </Button>
 )
};
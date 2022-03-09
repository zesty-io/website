import React from "react";
import { Button } from "@mui/material";



export default function TryFreeButton({size='medium'}) {
 return(
    <Button
    variant="contained"
    color="primary"
    component="a"
    target="blank"
    href="https://accounts.zesty.io/signup"
    size={size}
  >
    Try Free
  </Button>
 )
};
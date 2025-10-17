import { Grid } from "@mui/material";

function Column(props) {
  return (
    <Grid item xs={12} sm={props.data.columWidth}>
      {props.children}
    </Grid>
  );
}


export default Column
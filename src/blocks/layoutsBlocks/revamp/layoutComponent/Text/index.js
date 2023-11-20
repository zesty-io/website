import { Typography } from "@mui/material";

function Text(props) {
  return <Typography sx={...props?.data?.styles}>{props.data.content}</Typography>;
}
export default Text
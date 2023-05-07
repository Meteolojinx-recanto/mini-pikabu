import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";

interface Props {
  add: MouseEventHandler<HTMLElement>;
}
const AddNewPostButton = ({ add }: Props) => {
  return (
    <Button
      sx={{ position: "fixed", top: "10%", right: "10%" }}
      variant="contained"
      disableElevation
      onClick={add}
    >
      Add new post
    </Button>
  );
};

export default AddNewPostButton;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, Toolbar, AppBar } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const useStyles = makeStyles<Theme>((theme) => ({
  mainLink: {
    color: orange["A100"],
    textDecoration: "none",
    "&:hover": {
      color: orange["A100"],
    },
  },
  staticToolbar: {
    marginBottom: theme.spacing(4),
  },
}));

const AppToolBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#22272b" }}>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.mainLink}>
              pikabu
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppToolBar;

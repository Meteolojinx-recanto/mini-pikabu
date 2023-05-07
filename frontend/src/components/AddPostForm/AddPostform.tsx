import React, { FormEventHandler, ChangeEventHandler } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, TextField } from "@mui/material";
import { Theme } from "@mui/material/styles";
import FileUpload from "../UI/Form/FileUpload";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
}));

interface Form {
  post: string;
  author: string;
  submitFormHandler: FormEventHandler<HTMLFormElement>;
  inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  fileChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const AddPostForm = ({
  post,
  author,
  submitFormHandler,
  inputChangeHandler,
  fileChangeHandler,
}: Form) => {
  const classes = useStyles();
  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            id="author"
            label="Author"
            value={author}
            onChange={inputChangeHandler}
            name="author"
          />
        </Grid>

        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            id="post"
            label="Post"
            value={post}
            onChange={inputChangeHandler}
            name="post"
          />
        </Grid>
        <Grid item xs>
          <FileUpload label="image" name="image" onChange={fileChangeHandler} />
        </Grid>

        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPostForm;

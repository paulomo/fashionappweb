import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Shipping = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
      <Grid container>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue="Hello World"
          variant="outlined"
          fullWidth
        />
        </Grid>

        <TextField
          required
          id="outlined-disabled"
          label="Description"
          type="text"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
      </div>
    </React.Fragment>
  );
};

export default Shipping;

import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const AddLocation = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container className={classes.mutiple}>
            <TextField
              required
              id="first_name"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="last_name"
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="phone"
              label="Phone Number"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              required
              id="position"
              label="Position"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="roles"
              label="Add roles"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              required
              id="city"
              label="City"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="country"
              label="Country"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <Button color="primary" variant="contained">
              ADD LOCATION
            </Button>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AddLocation;
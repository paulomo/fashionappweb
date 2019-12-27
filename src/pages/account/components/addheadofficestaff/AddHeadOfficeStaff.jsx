import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const AddHeadOfficeStaff = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              required
              id="product-name"
              label="Product Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              required
              id="description"
              label="Description"
              type="text"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid container>
            <TextField
              required
              id="material-type"
              label="Material Type"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              required
              id="care"
              label="Care Description"
              type="text"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="color"
              label="Color(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <Button color="primary" variant="contained">
              ADD HEADOFFICE STAFF
            </Button>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AddHeadOfficeStaff;

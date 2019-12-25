import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Shipping = props => {
  const classes = useStyles();
  const { basicInfo, category, handleCategorySelection } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container className={classes.mutiple}>
            <TextField
              required
              id="weight"
              label="Product Weight"
              type="number"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="shipping-price"
              label="Shipping Price"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="refund"
              label="Refund Details"
              type="number"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="shipping-location"
              label="Ships To"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Shipping;

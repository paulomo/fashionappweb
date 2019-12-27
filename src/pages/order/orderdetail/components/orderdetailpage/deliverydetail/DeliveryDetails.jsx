import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const shippingAddress = {
  number: 704,
  street: "6th Ave",
  city: "New York",
  postalCode: "NY 10010",
  country: "USA"
}

const DeliveryDetiails = props => {
  const classes = useStyles();
  const {} = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              id="shipping_number"
              label="Shipping Number"
              variant="outlined"
              value={shippingAddress.number}
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="shipping_street"
              label="Street"
              type="text"
              value={shippingAddress.street}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="city"
              label="City"
              variant="outlined"
              value={shippingAddress.city}
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="code"
              label="Zip Code / Shipping Code"
              type="text"
              value={shippingAddress.postalCode}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="country"
              label="Country"
              type="text"
              value={shippingAddress.country}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default DeliveryDetiails;

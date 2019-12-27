import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const data = {
  name: '**** Ik*****',
  card_number: "12** **** **** **13",
  payment_method: "Debit Card",
  payment_date: "12/25/2019"
}

const PaymentDetiails = props => {
  const classes = useStyles();
  const {} = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              id="name_card"
              label="Name on card"
              variant="outlined"
              value={data.name}
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="card_number"
              label="Card Number"
              type="text"
              value={data.card_number}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="payment_method"
              label="Payment Method"
              variant="outlined"
              value={data.payment_method}
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="payment_date"
              label="Payment Date"
              type="text"
              value={data.payment_date}
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

export default PaymentDetiails;

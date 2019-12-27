import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const OrderDetiails = props => {
  const classes = useStyles();
  const {} = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container className={classes.mutiple}>
            {/* Order Number */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    Order Number
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} 234sdf467r
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* Order Date */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>Order Date</Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} Dec 25th 2019
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* Order Price */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>Price</Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    $19.99
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* Order Discount */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    Discount
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} 15%
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* Order Status */}
          <Grid container>
            <TextField
              id="order_status"
              label="Order Status"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default OrderDetiails;

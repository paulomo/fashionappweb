import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const ProductDetiails = props => {
  const classes = useStyles();
  const {} = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container className={classes.mutiple}>
            {/* PRODUCT SKU */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>PRODUCT SKU</Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} 326274dgdyd
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* PRODUCT NAME */}
            <Grid item xs={6} className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PRODUCT NAME
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} Canvas Print
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* PRODUCT PRICE */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PRODUCT PRICE
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} $1.99
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* Order Status */}
          <Grid container className={classes.mutiple}>
            {/* PRODUCT QUANTITY */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PURCHASE QUANTITY
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} 1
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* PRODUCT TYPE */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PRODUCT TYPE
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} Unisex
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* PRODUCT DEMOGRAPHY */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PRODUCT DEMOGRAPHY
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} 18 - 25 Years
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* PRODUCT YEAR */}
            <Grid className={classes.paper}>
              <Paper elevation={1}>
                <Grid>
                  <Typography className={classes.title}>
                    PRODUCT YEAR
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="h5" className={classes.topography}>
                    {/* {message} */} Fall 2019
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* Order Status */}
          <Grid container>
            <TextField
              id="product_color"
              label="Product Color"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetiails;

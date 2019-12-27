import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Pricing = props => {
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
              id="price"
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="discount"
              label="Discount in %"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              id="tax"
              label="Tax in %"
              type="number"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="final-price"
              label="Final Price"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;

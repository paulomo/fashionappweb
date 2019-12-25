import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Inventory = (props) => {
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
              id="stock-qunatity"
              label="Stock"
              type="number"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="stock-value"
              label="Estimated Total Stock Price"
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

export default Inventory;

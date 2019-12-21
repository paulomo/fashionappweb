import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const DeliveryDetiail = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <TextField id="standard-basic" label="outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Grid>
  );
}

export default DeliveryDetiail;

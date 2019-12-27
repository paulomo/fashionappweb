import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import { Password } from "./components";

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={7} xs={12}>
          <Password />
        </Grid>
        <Grid item md={5} xs={12}>
          {/* <Password /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;

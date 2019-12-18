import React from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { AccountProfile, AccountDetails } from "./components";

import useStyles from "./style";

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Typography
        component="h1"
        variant="h3"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Account
      </Typography> */}
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountDetails />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} my="6rem">{/* <Orders /> */}</Paper>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Account;

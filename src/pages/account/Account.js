import React from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {
  AccountProfile,
  AccountDetails,
  AddLocation,
  AddHeadOfficeStaff,
  TabPanel
} from "./components";

import useStyles from "./style";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const Account = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Grid className={classes.container} item xs={12}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                // variant="scrollable"
                // scrollButtons="auto"
                // aria-label="scrollable auto tabs example"
                centered
              >
                <Tab label="Add Office Staff" {...a11yProps(0)} />
                <Tab label="Add LOcation" {...a11yProps(1)} />
                {/* <Tab label="Measurement" {...a11yProps(2)} />
                  <Tab label="Pricing" {...a11yProps(3)} />
                  <Tab label="Product Image" {...a11yProps(4)} />
                  <Tab label="Shipping" {...a11yProps(5)} /> */}
              </Tabs>
            </AppBar>
            <Paper className={classes.paper}>
              <TabPanel value={value} index={0}>
                <AddHeadOfficeStaff />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <AddLocation />
              </TabPanel>
              {/* <TabPanel value={value} index={2}>
                <Measurement
                  handleMeasurementOption={handleMeasurementOption}
                  measurementOption={measurementOption}
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Pricing />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <ProductImage />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Shipping />
              </TabPanel> */}
              
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Account;

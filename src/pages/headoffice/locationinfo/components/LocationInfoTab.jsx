import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./styles";
import { TabPanel } from "./tabpanel";
// Tabs
import { Dashboard, Analytics, OrderList, ProductList, Account } from "../../../index";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function LocationInfoTab({ productData }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Analytic" {...a11yProps(1)} />
            <Tab label="Order" {...a11yProps(2)} />
            <Tab label="Product" {...a11yProps(3)} />
            <Tab label="Staff" {...a11yProps(4)} />
            <Tab label="Wallet" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Analytics />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OrderList />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProductList />
        </TabPanel>
        <TabPanel value={value} index={4}>
          {/* <ProductImage /> */}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {/* <Shipping /> */}
        </TabPanel>
      </div>
    </React.Fragment>
  );
}

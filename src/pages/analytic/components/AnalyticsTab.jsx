import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./styles";
import { TabPanel } from "./tabpanel";
// Tabs

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function TabPage({ productData }) {
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
            <Tab label="Customer" {...a11yProps(0)} />
            <Tab label="Order" {...a11yProps(1)} />
            <Tab label="Product" {...a11yProps(2)} />
            {/* <Tab label="Product" {...a11yProps(3)} />
            <Tab label="Staff" {...a11yProps(4)} /> */}
            {/* <Tab label="Shipping" {...a11yProps(5)} /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {/* <BasicInfo
            basicInfo={productData.basicinfo}
            category={category}
            handleCategorySelection={handleCategorySelection}
          /> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <Inventory /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Measurement
            handleMeasurementOption={handleMeasurementOption}
            measurementOption={measurementOption}
          /> */}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {/* <Pricing /> */}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {/* <ProductImage /> */}
        </TabPanel>
        {/* <TabPanel value={value} index={5}>
          <Shipping />
        </TabPanel> */}
      </div>
    </React.Fragment>
  );
}

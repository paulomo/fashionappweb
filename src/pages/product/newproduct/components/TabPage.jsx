import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./Styles";
import { TabPanel } from "./tabpanel";
// Tabs
import BasicInfo from "./basicinfo";
import Inventory from "./inventory";
import Measurement from "./measurement";
import Pricing from "./pricing";
import ProductImage from "./productimage";
import Shipping from "./shipping";
import { useState } from "react";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function TabPage({ productData }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [measurementOption, setMeasurementOption] = useState({ option: null });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategorySelection = event => {
    setCategory(event.target.value);
  };

  const handleMeasurementOption = (measurementOption) => {
    setMeasurementOption(measurementOption);
  }

  return (
    <React.Fragment>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          className={classes.importButton}
        >
          Save Product
        </Button>
        <Button color="primary" variant="contained">
          Publish Product
        </Button>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            centered
          >
            <Tab label="Basic Info" {...a11yProps(0)} />
            <Tab label="Inventory" {...a11yProps(1)} />
            <Tab label="Measurement" {...a11yProps(2)} />
            <Tab label="Pricing" {...a11yProps(3)} />
            <Tab label="Product Image" {...a11yProps(4)} />
            <Tab label="Shipping" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BasicInfo
            basicInfo={productData.basicinfo}
            category={category}
            handleCategorySelection={handleCategorySelection}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Inventory />
        </TabPanel>
        <TabPanel value={value} index={2}>
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
        </TabPanel>
      </div>
    </React.Fragment>
  );
}

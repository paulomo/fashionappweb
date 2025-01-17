import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useTheme } from "@material-ui/core/styles";
import { OrderDetailTabPanel } from "../index";
import useStyles from "./styles";

// Pages
import { DeliveryDetails } from "./deliverydetail";
import { OrderDetails } from "./orderdetail";
import { ProductDetails } from "./productdetail";
import PaymentDetiails from "./paymentdetails/PaymentDetails";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Order Details" {...a11yProps(0)} />
          <Tab label="Product Details" {...a11yProps(1)} />
          <Tab label="Payment Details" {...a11yProps(2)} />
          <Tab label="Delivery Details" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <OrderDetailTabPanel value={value} index={0} dir={theme.direction}>
        <OrderDetails />
      </OrderDetailTabPanel>
      <OrderDetailTabPanel value={value} index={1} dir={theme.direction}>
        <ProductDetails />
      </OrderDetailTabPanel>
      <OrderDetailTabPanel value={value} index={2} dir={theme.direction}>
        <PaymentDetiails />
      </OrderDetailTabPanel>
      <OrderDetailTabPanel value={value} index={3} dir={theme.direction}>
        <DeliveryDetails />
      </OrderDetailTabPanel>
    </div>
  );
}

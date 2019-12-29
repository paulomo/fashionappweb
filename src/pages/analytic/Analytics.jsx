import React, { useState } from "react";
import {  AnalyticsTab } from "./components";
import useStyles from "./styles";

const Analytics = () => {
  const classes = useStyles();

  const [productData, setProduct] = useState({
    basicInfo: {},
    inventory: {},
    measurement: {},
    pricing: {},
    productImage: {},
    shipping: {}
  });

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <AnalyticsTab
          productData={productData}
        />
      </div>
    </div>
  );
};

export default Analytics;

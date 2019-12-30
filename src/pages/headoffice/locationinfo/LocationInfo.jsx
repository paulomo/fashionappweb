import React, { useState } from "react";
import {  LocationInfoTab } from "./components";
import useStyles from "./styles";

const LocationInfo = () => {
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
        <LocationInfoTab
        />
      </div>
    </div>
  );
};

export default LocationInfo;

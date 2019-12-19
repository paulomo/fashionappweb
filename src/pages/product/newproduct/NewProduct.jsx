import React, { useState } from "react";
import { TabPage } from "./components";
import useStyles from './styles';

const NewProduct = () => {
  const classes = useStyles();

  const [productData, setProduct] = useState({
    basicInfo:{},
    inventory: {},
    measurement: {},
    pricing: {},
    productImage: {},
    shipping: {}
  });

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TabPage productData={productData}/>
      </div>
    </div>
  );
};

export default NewProduct;

import React, { useState } from "react";
import { ProductsToolbar, ProductsTable } from "./components";
import mockData from "./data";
import productData from './product';
import useStyles from './styles';

const ProductList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <ProductsTable users={users} productData={productData}/>
      </div>
    </div>
  );
};

export default ProductList;

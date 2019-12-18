import React, { useState } from "react";
// import { ProductsToolbar, ProductsTable } from "./components";
// import mockData from "./data";
import useStyles from './styles';

const NewProduct = () => {
  const classes = useStyles();

//   const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      {/* <ProductsToolbar /> */}
      <div className={classes.content}>
        {/* <ProductsTable users={users} /> */}
      </div>
    </div>
  );
};

export default NewProduct;

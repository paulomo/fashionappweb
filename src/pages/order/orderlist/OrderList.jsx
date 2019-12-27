import React, { useState } from "react";
import { OrdersToolbar, OrdersTable } from "./components";
// import mockData from "./data";
import orderData from './order';
import useStyles from './styles';

const OrderList = () => {
  const classes = useStyles();

  // const [users] = useState(mockData);
  const [orderInfo] = useState(orderData);

  return (
    <div className={classes.root}>
      <OrdersToolbar />
      <div className={classes.content}>
        <OrdersTable orderInfo={orderInfo}/>
      </div>
    </div>
  );
};

export default OrderList;
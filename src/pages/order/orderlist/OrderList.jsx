import React, { useState } from "react";
import { OrdersToolbar, OrdersTable } from "./components";
import mockData from "./data";
import useStyles from './styles';

const OrderList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <OrdersToolbar />
      <div className={classes.content}>
        <OrdersTable users={users} />
      </div>
    </div>
  );
};

export default OrderList;
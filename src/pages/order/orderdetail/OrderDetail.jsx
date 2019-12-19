import React, { useState } from "react";
import { OrderDetailPage } from "./components";
// import mockData from "./data";
import useStyles from './styles';

const OrderDetail = () => {
  const classes = useStyles();

//   const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <OrderDetailPage />
      <div className={classes.content}>
        {/* <OrdersTable users={users} /> */}
      </div>
    </div>
  );
};

export default OrderDetail;
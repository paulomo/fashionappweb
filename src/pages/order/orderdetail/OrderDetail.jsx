import React, { useEffect, useState } from "react";
import { OrderDetailPage } from "./components";
import {useDispatch, useSelector} from 'react-redux';
// import mockData from "./data";
import useStyles from './styles';

const OrderDetail = (props) => {
  const classes = useStyles();

//   const [users] = useState(mockData);
// const orders = useSelector(({orders}) => data.OrderDetail);

  return (
    <div className={classes.root}>
      {/* <OrderDetailPage /> */}
      <div className={classes.content}>
      <OrderDetailPage />
      </div>
    </div>
  );
};

export default OrderDetail;
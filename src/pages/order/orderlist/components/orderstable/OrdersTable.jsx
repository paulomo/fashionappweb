import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@material-ui/core";

import { getInitials } from "../../../../../common/helpers";
import useStyles from "./Styles";

const OrdersTable = props => {
  const { className, orderInfo, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [currency] = useState('$');

  const handleSelectAll = event => {
    const { orderInfo } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = orderInfo.map(order => order.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  function handleClick(item) {
    // props.history.push(
    //   "/orders/order/" + item.id + "/" + item.handle
    // );
    console.log(item.id);
    console.log(item);
    console.log(orderInfo);
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === orderInfo.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < orderInfo.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell> */}
                  <TableCell>Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Order Date</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderInfo.slice(0, rowsPerPage).map(order => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={order.id}
                    selected={selectedUsers.indexOf(order.id) !== -1}
                    onClick={event => handleClick(order)}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(order.id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, order.id)}
                        value="true"
                      />
                    </TableCell> */}
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={order.products.image}
                        >
                          D
                        </Avatar>
                      </div>
                    </TableCell>
                    {order.products.map(product => (
                      <TableCell>{product.name}</TableCell>
                    ))}
                    <TableCell>
                      {moment(order.date).format("DD/MM/YYYY")}
                    </TableCell>
                    {order.products.map(product => (
                      <React.Fragment>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.size}</TableCell>
                        <TableCell>{currency}{product.price}</TableCell>
                      </React.Fragment>
                    ))}
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={orderInfo.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </CardActions>
    </Card>
  );
};

OrdersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default OrdersTable;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { SearchInput } from '../../../../../components';
import useStyles from './Styles';

const OrdersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add user
        </Button>
      </div> */}
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search orders"
        />
      </div>
    </div>
  );
};

OrdersToolbar.propTypes = {
  className: PropTypes.string
};

export default OrdersToolbar;
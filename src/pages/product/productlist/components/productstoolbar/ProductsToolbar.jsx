import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { SearchInput } from "../../../../../components";
import useStyles from "./Styles";

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button color="primary" variant="contained" className={classes.importButton}>
          New Product
        </Button>
        <Button variant="outlined" >
          Import Product CSV
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search Product"
        />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;

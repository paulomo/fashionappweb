import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import BarChartIcon from "@material-ui/icons/BarChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
      borderRightColor: 'rgb(219, 220, 223)',
      borderRightWidth: 1
      // borderTopColor:'rgb(189, 189, 189)'
    }
  },
  root: {
    backgroundColor: "rgb(244, 246, 248)",//theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChartIcon />
    },
    {
      title: "Locations",
      href: "/locations",
      icon: <BarChartIcon />
    },
    // {
    //   title: 'Customers',
    //   href: '/customers',
    //   icon: <PeopleIcon />
    // },
    {
      title: "Orders",
      href: "/orders",
      icon: <ShoppingCartIcon />
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBasketIcon />
    },
    {
      title: "Wallet",
      href: "/wallet",
      icon: <AccountBalanceWalletIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <AccountBoxIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        {/* <Profile /> */}
        {/* <Divider className={classes.divider} /> */}
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;

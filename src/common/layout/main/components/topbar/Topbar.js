import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    backgroundColor: 'white',//"rgb(243, 244, 246)"
    borderBottomColor: 'rgb(189, 189, 189)',
    
  },
  barColor: {
    color: "black",
    borderBottomColor: 'rgb(219, 220, 223)',
    borderBottomWidth: 6
    // borderBottom: "rgb(47, 47, 48)",
    // border: "1px solid #dadde9"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
        borderBottom={1}
      >
        <Toolbar className={clsx(classes.barColor)}>
          <div className={clsx(classes.flexGrow)} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton className={classes.signOutButton} color="inherit">
              <Avatar alt="R" src="" />
            </IconButton>
            {/* <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src="" />
            </IconButton>
            <p>Profile</p>
          </MenuItem> */}
          </Hidden>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;

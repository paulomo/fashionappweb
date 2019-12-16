import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button
} from "@material-ui/core";

import { useStyles } from './style';

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: "Shen Zhi",
    city: "Los Angeles",
    brand: "Eddie Bouer",
    country: "USA",
    timezone: "GTM-7",
    avatar: "/images/avatars/avatar_11.png"
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Card {...rest} className={clsx(classes.card, className)}>
        <CardContent>
          <div className={classes.details}>
            <Avatar className={classes.avatar} src={user.avatar} />
          </div>
          <div className={classes.title}>
            <Typography className={classes.title} gutterBottom variant="h3">
              John Doe
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              Sales Executive
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.brand}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format("hh:mm A")} ({user.timezone})
            </Typography>
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.uploadButton}
            color="secondary"
            variant="text"
          >
            Upload picture
          </Button>
          <Button variant="text">Remove picture</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;

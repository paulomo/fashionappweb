import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';  
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';

import useStyles from './styles';

const Favourites = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              STOCK
            </Typography>
            <Typography variant="h3">2,000</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={75}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

Favourites.propTypes = {
  className: PropTypes.string
};

export default Favourites;
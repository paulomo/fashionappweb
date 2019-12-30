import React, { useState } from "react";
import LocationHead from './locationhead';
import LocationList from './locationlist';
import useStyles from './styles';

import location from './location';

const Locations = () => {
  const classes = useStyles();

  // const [users] = useState(mockData);
  const [orderInfo] = useState(location);

  return (
    <div className={classes.root}>
      <LocationHead />
      <div className={classes.content}>
        <LocationList orderInfo={orderInfo}/>
      </div>
    </div>
  );
};

export default Locations;
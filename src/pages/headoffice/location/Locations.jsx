import React, { useState } from "react";
import LocationHead from './locationhead';
import LocationList from './locationlist';
import useStyles from './styles';

import locations from './locations';

const Locations = () => {
  const classes = useStyles();

  // const [users] = useState(mockData);
  const [orderInfo] = useState(locations);

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
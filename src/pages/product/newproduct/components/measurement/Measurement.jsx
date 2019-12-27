import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

// Measurement
import { TopMeasurement, BottomMeasurement, FeetMeasurement, FullBodyMeasurement } from './components';

// measurement options
const measurementOptions = [
  { value: "top", label: "Top Measurement" },
  { value: "bottom", label: "Bottom Measurement" },
  { value: "fullbody", label: "Full Body Measurement" },
  { value: "feet", label: "Feet Measurment" }
];

const Measurement = props => {
  const classes = useStyles();
  const { measurementOption, category, handleMeasurementOption } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              id="product-measurement"
              select
              label="Product Measurement"
              value={measurementOption.option}
              onChange={handleMeasurementOption}
              variant="outlined"
              fullWidth
              required
            >
              {measurementOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {measurementOption.value === "bottom" && (
              <BottomMeasurement />
            )}
            {measurementOption.value === "top" && (
              <TopMeasurement />
            )}
            {measurementOption.value === "feet" && (
              <FeetMeasurement />
            )}
            {measurementOption.value === "fullbody" && (
              <FullBodyMeasurement />
            )}
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Measurement;

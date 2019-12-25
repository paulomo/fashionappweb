import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import useStyles from "./styles";

const categories = [
  {
    value: "clothes",
    label: "Clothes"
  },
  {
    value: "shoes",
    label: "Shoes"
  },
  {
    value: "jewery",
    label: "Jeweries"
  },
  {
    value: "accessory",
    label: "Accessories"
  }
];

const productType = [
  {
    value: "female",
    label: "Female"
  },
  {
    value: "male",
    label: "Male"
  },
  {
    value: "unisex",
    label: "Unisex"
  }
];

const demography = [
  {
    value: "0-12",
    label: "0 - 12months"
  },
  {
    value: "12-24",
    label: "12 - 24months"
  },
  {
    value: "2-4",
    label: "2 - 4years"
  }
];

const BasicInfo = props => {
  const classes = useStyles();
  const { basicInfo, category, handleCategorySelection } = props;
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              required
              id="product-name"
              label="Product Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              required
              id="description"
              label="Description"
              type="text"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              id="product-catergory"
              select
              label="Product Catergory"
              value={category}
              onChange={handleCategorySelection}
              variant="outlined"
              fullWidth
              required
            >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="product-type"
              select
              label="Product Type"
              variant="outlined"
              fullWidth
              required
            >
              {productType.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container>
            <TextField
              required
              id="material-type"
              label="Material Type"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              required
              id="care"
              label="Care Description"
              type="text"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="color"
              label="Color(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.mutiple}>
            <TextField
              id="demography"
              select
              label="Demography"
              variant="outlined"
              fullWidth
              required
            >
              {demography.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="year" label="Year" type="date" format="MM/dd/yyyy" variant="outlined" />
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                disableFuture
                openTo="year"
                format="dd/MM/yyyy"
                label="Date of birth"
                views={["year", "month", "date"]}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider> */}
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BasicInfo;

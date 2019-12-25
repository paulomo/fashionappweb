import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
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

const genderType = [
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

const BasicInfo = props => {
  const classes = useStyles();
  const { basicInfo, category, handleCategorySelection } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container>
            <TextField
              required
              id="Product-Name"
              label="Product Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              required
              id="Description"
              label="Description"
              type="text"
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container>
            <TextField
              id="Product-Catergory"
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
          </Grid>
          <Grid container>
            <TextField
              id="gender"
              select
              label="Gender Type"
              variant="outlined"
            >
              {genderType.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BasicInfo;

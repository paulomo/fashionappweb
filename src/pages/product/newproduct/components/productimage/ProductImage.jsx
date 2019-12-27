import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Image from "material-ui-image";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const ProductImage = props => {
  const classes = useStyles();
  const { basicInfo, category, handleCategorySelection } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container className={classes.mutiple}>
            <Image src="http://loremflickr.com/300/200" aspectRatio="float"/>
            <Image src="http://loremflickr.com/300/200" aspectRatio="float"/>
            <Image src="http://loremflickr.com/300/200" aspectRatio="float"/>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ProductImage;

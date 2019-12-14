import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { useStyles } from "../style";
import Copyright from "../../../../components/copyright/Copyright";

const VerifyForm = React.memo(props => {
  const classes = useStyles();
  const {
    fields,
    handleFieldChange,
    handleSubmit,
    isLoading,
    validateForm
  } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          PLEASE VERIFY YOU ARE APPROVED BY ZARA
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstname"
                variant="outlined"
                size="small"
                required
                id="firstname"
                label="First Name"
                autoFocus
                value={fields.companyReference.firstname}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                value={fields.companyReference.lastname}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={fields.companyReference.email}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
                autoComplete="phonenumber"
                value={fields.companyReference.phoneNumber}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
              >
                <input type="file" />
                Upload A Copy of ID Card
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
              >
                Upload A Copy of Company Letter
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Verify Your Account
          </Button>
        </form>
      </div>
      <Box mt={20}>
        <Copyright />
      </Box>
    </Container>
  );
});

export default VerifyForm;
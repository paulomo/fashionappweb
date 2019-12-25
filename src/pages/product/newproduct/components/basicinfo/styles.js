import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      // width: flex,
      alignContent: "center"
    }
  }
}));

export default useStyles;

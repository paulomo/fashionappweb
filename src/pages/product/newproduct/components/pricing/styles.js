import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 1),
      // width: flex,
      alignContent: "center"
    }
  },
  mutiple: {
    '& > *': {
      margin: theme.spacing(0),
      width: 430,
    },
  }
}));

export default useStyles;

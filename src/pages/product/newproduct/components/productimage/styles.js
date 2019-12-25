import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 2),
      // width: flex,
      alignContent: "center"
    }
  },
  mutiple: {
    '& > *': {
      margin: theme.spacing(1),
      width: 280,
      height: 170
    },
  }
}));

export default useStyles;

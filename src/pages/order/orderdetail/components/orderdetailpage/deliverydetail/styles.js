import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flex: 1,
      flexDirection: "start",
      alignContent: 'center',
      width: 200
    }
  }
}));

export default useStyles;

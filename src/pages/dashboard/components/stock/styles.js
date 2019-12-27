import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
}));

export default useStyles;

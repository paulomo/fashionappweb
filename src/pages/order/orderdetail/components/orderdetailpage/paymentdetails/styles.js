import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 1),
      alignContent: "center"
    }
  },
  mutiple: {
    '& > *': {
      margin: theme.spacing(0),
      width: 200,
    },
  },
  title: {
    padding: theme.spacing(1, 2),
    fontSize: theme.typography.pxToRem(12),
    color: 'rgba(255,127,80)'
  },
  paper: {
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(1, 0),
  },
  topography: {
    paddingTop: 10,
    paddingBottom: 32,
    margin: "auto",
  },
}));

export default useStyles;

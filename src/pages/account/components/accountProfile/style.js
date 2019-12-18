import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {},
    details: {
      display: "flex"
    },
    card: {
      maxWidth: 345,
      paddingTop: 30,
      paddingBottom: 30
    },
    avatar: {
      margin: "auto",
      height: 110,
      width: 110,
      flexShrink: 0,
      flexGrow: 0
    },
    title: {
      marginTop: 30,
      textAlign: "center"
    },
    uploadButton: {
      marginRight: theme.spacing(2)
    }
  }));
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  main: {
    display: "flex",
    justifyContent: "center",
    fontFamily: `"Alegreya", serif`
  },
  root: {
    margin: theme.spacing(0, 2, 2, 2),
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    width: "500px",
    minWidth: "250px",
    textAlign: "center"
  },
  flex: {
    display: "flex"
  },
  noMessage: {
    margin: "auto"
  },
  chatWindow: {
    width: "85%",
    height: "55vh",
    display: "flex",
    flexDirection: "column",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "3px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },

  chat: {
    marginLeft: "auto",
    minWidth: "20%",
    padding: ".3rem"
  },
  otherchat: {
    marginRight: "auto",
    minWidth: "20%",
    padding: ".3rem"
  },
  user: {
    fontSize: "9px",
    opacity: ".7"
  },
  text: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "visible",
    padding: ".2rem"
  },
  chatButton: {
    width: "20%",
    marginLeft: "auto"
  },
  chatBox: {
    width: "75%",
    background: "#fff"
  },
  dark: { color: "#fff", background: "#000" },
  light: { color: "#000", background: "#c4e0e5" }
}));

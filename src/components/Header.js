import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    margin: theme.spacing(2, 2, 0, 2),
    padding: theme.spacing(3, 2),
    width: "500px",
    minWidth: "250px",
    display: "flex",
    justifyContent: "space-around"
  },
  link: {
    textDecoration: "none",
    padding: "4px"
  },
  active: {
    borderBottom: "2px solid"
  },
  light: {
    backgroundImage: "linear-gradient(#36d1dc,#5b86e5)",
    color: "#000",
    borderColor: "#fff"
  },
  dark: {
    borderColor: "#fff",
    color: "#fff",
    backgroundImage: "linear-gradient(#cc2b5e,#753a88)"
  }
}));

const Header = props => {
  let settingsActive = "";
  let chatActive = "";
  let { main, root, link, dark, light, active } = useStyles();
  if (props.location.pathname === "/settings") {
    settingsActive = active;
  }
  if (props.location.pathname === "/chat") {
    chatActive = active;
  }
  let themeColor =
    props.user.settings.interfaceColor === "light" ? light : dark;

  return (
    <div className={main}>
      <nav className={`${root} ${themeColor}`}>
        <Link className={`${link} ${themeColor} ${chatActive}`} to="/chat">
          Chat
        </Link>
        <Link
          className={`${link} ${themeColor} ${settingsActive}`}
          to="/settings">
          Settings
        </Link>
      </nav>
    </div>
  );
};

const mapState = ({ user }) => ({ user });

export default connect(mapState)(withRouter(Header));

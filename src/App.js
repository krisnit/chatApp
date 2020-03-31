import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    width: "500px",
    minWidth: "250px"
  }
}));

function App(props) {
  let { main, root } = useStyles();
  return (
    <Router>
      <div className={main}>
        <Paper elevation={5} className={root}>
          <Switch>
            <Route path="/chat" exact>
              {props.user.name ? <Dashboard /> : <Redirect to="/" />}
            </Route>
            <Route path="/settings" exact>
              {props.user.name ? <Settings /> : <Redirect to="/" />}
            </Route>
            <Route path="/" exact component={Home} />
          </Switch>
        </Paper>
      </div>
    </Router>
  );
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, undefined)(App);

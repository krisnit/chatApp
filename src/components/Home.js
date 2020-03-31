import React from "react";
import { Paper, Typography, Chip, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { adduser } from "../redux/actionTypes";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "3rem auto",
    padding: theme.spacing(6),
    maxWidth: "500px",
    textAlign: "center"
  },
  input: { margin: theme.spacing(2) }
}));

const Home = ({ adduser, history }) => {
  let [name, setName] = React.useState("");
  let { root, input } = useStyles();
  return (
    <div className={root}>
      <Typography variant="h5">Welcome to ChatApp</Typography>
      <TextField
        className={input}
        required
        onChange={e => {
          setName(e.target.value);
        }}
        id="outlined-basic"
        label="Enter your Name"
        value={name}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            adduser(name);
            history.push("/chat");
          }
        }}
      />
    </div>
  );
};

const mapDispatch = dispatch => ({ adduser: user => dispatch(adduser(user)) });
export default connect(undefined, mapDispatch)(Home);

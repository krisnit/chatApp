import React from "react";
import { connect } from "react-redux";
import { modifySettings, resetSettings } from "../redux/actionTypes.js";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(0, 2, 2, 2),
    padding: theme.spacing(3, 2),
    width: "500px",
    minWidth: "250px",
    textAlign: "left"
  },
  label: {
    marginRight: "auto",
    color: "rgba(0, 0, 0, .8)",
    padding: theme.spacing(1),
    fontFamily: `"Alegreya", serif`
  },
  form: {
    margin: theme.spacing(2.5)
  },
  formControl: {
    fontFamily: `"Alegreya", serif`
  },
  radioButton: {
    color: "#fff"
  },
  button: {
    minWidth: "220px",
    maxWidth: "480px"
  },
  dark: { color: "#fff", background: "#000" },
  light: { color: "#000", background: "#c4e0e5" }
}));

const Settings = ({ user, modifySettings, resetSettings }) => {
  let {
    name,
    settings: { clockDisplay, interfaceColor, sendOnCtrlEnt }
  } = user;

  let {
    main,
    root,
    label,
    form,
    button,
    formControl,
    dark,
    light,
    radioButton
  } = useStyles();
  let themeColor = user.settings.interfaceColor === "light" ? light : dark;
  let radioColor = user.settings.interfaceColor === "light" ? "" : radioButton;

  return (
    <>
      <Header />
      <div className={main}>
        <Paper className={`${root} ${themeColor}`}>
          <FormControl className={form}>
            <FormLabel className={`${label} ${themeColor}`} component="legend">
              Clock Display
            </FormLabel>
            <RadioGroup
              onChange={e => modifySettings(e.target.name, e.target.value)}
              row
              aria-label="clock-display"
              name="clockDisplay"
              value={clockDisplay}>
              <FormControlLabel
                className={formControl}
                value="12hr"
                control={<Radio className={radioColor} color="primary" />}
                label="12hr"
                labelPlacement="start"
              />
              <FormControlLabel
                value="24hr"
                color="secondary"
                control={<Radio className={radioColor} color="primary" />}
                label="24hr"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <FormControl className={form}>
            <FormLabel className={`${label} ${themeColor}`} component="legend">
              Interface Color
            </FormLabel>
            <RadioGroup
              onChange={e => modifySettings(e.target.name, e.target.value)}
              row
              aria-label="interfaceColor"
              name="interfaceColor"
              value={interfaceColor}>
              <FormControlLabel
                value="light"
                control={<Radio className={radioColor} color="primary" />}
                label="Light"
                labelPlacement="start"
              />
              <FormControlLabel
                value="dark"
                control={<Radio className={radioColor} color="primary" />}
                label="Dark"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <FormControl className={form}>
            <FormLabel className={`${label} ${themeColor}`} component="legend">
              Send Messages on CTRL + ENTER
            </FormLabel>
            <RadioGroup
              onChange={e => modifySettings(e.target.name, e.target.value)}
              row
              aria-label="sendOnCtrlEnt"
              name="sendOnCtrlEnt"
              value={sendOnCtrlEnt}>
              <FormControlLabel
                value="no"
                control={<Radio className={radioColor} color="primary" />}
                label="No"
                labelPlacement="start"
              />
              <FormControlLabel
                value="yes"
                control={<Radio className={radioColor} color="primary" />}
                label="Yes"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <Button
            className={button}
            onClick={resetSettings}
            variant="contained"
            color="primary">
            Reset To Defaults
          </Button>
        </Paper>
      </div>
    </>
  );
};
const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => ({
  modifySettings: (name, value) => dispatch(modifySettings(name, value)),
  resetSettings: () => dispatch(resetSettings())
});

export default connect(mapState, mapDispatch)(Settings);

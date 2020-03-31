import React from "react";
import { Typography, Chip } from "@material-ui/core";

const Message = ({ chat, classes, user, themeColor }) => {
  const timeSettings = () => {
    let clock = user.settings.clockDisplay;
    return new Date(chat.time).toLocaleString(
      `${clock === "12hr" ? "en-US" : "en-GB"}`
    );
  };
  return (
    <div className={chat.from === user.name ? classes.chat : classes.otherchat}>
      <Typography
        className={`${classes.user} ${themeColor}`}
        variant="body2"
        component="p">
        {chat.from === user.name
          ? timeSettings()
          : chat.from + " " + timeSettings()}
      </Typography>
      <Chip
        className={`${classes.text} ${themeColor}`}
        color="primary"
        label={chat.msg}
        variant="outlined"></Chip>
    </div>
  );
};

export default Message;

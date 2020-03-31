import React from "react";
import { Button, TextField } from "@material-ui/core";

const ChatBox = ({ classes, chat, user, setChat, handleSubmit }) => {
  return (
    <>
      <TextField
        className={classes.chatBox}
        // id="outlined-basic"
        label="Type here"
        variant="outlined"
        value={chat}
        onChange={e => setChat(e.target.value)}
        onKeyUp={e => {
          if (
            user.settings.sendOnCtrlEnt === "yes" &&
            e.keyCode === 13 &&
            e.ctrlKey
          ) {
            handleSubmit();
          }
        }}
      />
      <Button
        className={classes.chatButton}
        variant="contained"
        color="primary"
        onClick={handleSubmit}>
        Send
      </Button>
    </>
  );
};

export default ChatBox;

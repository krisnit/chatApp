import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { addChat } from "../../redux/actionTypes";
import Header from "../Header";
import useStyles from "./style";
import Message from "./Message";
import useSocket from "use-socket.io-client";
import ChatBox from "./ChatBox";

let title = document.title;
let counter = 0;

const Dashboard = ({ user, messages, addChat, history }) => {
  let classes = useStyles();
  let themeColor =
    user.settings.interfaceColor === "light" ? classes.light : classes.dark;
  let ref = React.useRef();
  const [socket] = useSocket("https://chat-app-r.herokuapp.com/");
  let [chat, setChat] = React.useState("");

  const handleSubmit = () => {
    chat &&
      socket.emit(
        "chat message",
        JSON.stringify({ from: user.name, msg: chat })
      );
    setChat("");
  };

  React.useEffect(() => {
    if (!user.name) {
      history.push("/");
      return;
    }
    socket.on("chat message", msg => {
      counter++;
      addChat(JSON.parse(msg));
    });
  }, []);

  let timer;
  let scrollOnVisibile = () => {
    if (ref.current) {
      let shouldScroll =
        ref.current.scrollTop + ref.current.clientHeight + 80 >=
        ref.current.scrollHeight;

      if (shouldScroll && document.visibilityState === "visible") {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }
  };

  let blinkOnMessage = () => {
    if (document.visibilityState === "visible") {
      clearInterval(timer);
      document.title = title;
      counter = 0;
    }
    if (document.visibilityState === "hidden" && counter > 0) {
      clearInterval(timer);
      let i = 0;
      timer = setInterval(() => {
        if (i % 2 === 0) {
          document.title = title;
        } else {
          document.title = `New ${
            counter > 1 ? "Messages " : "Message "
          } - ${counter}`;
        }
        i++;
      }, 200);
    }
  };

  React.useEffect(() => {
    scrollOnVisibile();
    blinkOnMessage();
    window.addEventListener("focus", blinkOnMessage);
    return () => {
      clearInterval(timer);
      window.removeEventListener("focus", blinkOnMessage);
    };
  }, [messages]);
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Paper className={`${classes.root} ${themeColor}`} elevation={5}>
          <Typography variant="h7" component="h5">
            Welcome {user.name}
          </Typography>
          <div className={classes.flex}>
            <div className={classes.chatWindow} ref={ref}>
              {messages.length < 1 ? (
                <div className={classes.noMessage}>Start Chatting...</div>
              ) : (
                messages.map((chat, i) => (
                  <Message
                    key={chat.time}
                    chat={chat}
                    classes={classes}
                    themeColor={themeColor}
                    user={user}
                  />
                ))
              )}
            </div>
          </div>
          <div className={classes.flex}>
            <ChatBox
              classes={classes}
              chat={chat}
              user={user}
              setChat={setChat}
              handleSubmit={handleSubmit}
            />
          </div>
        </Paper>
      </div>
    </>
  );
};

const mapStateToProps = ({ user, messages }) => ({ user, messages });
const mapDispatchToProps = dispatch => {
  return {
    addChat: value => dispatch(addChat(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

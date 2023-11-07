import React, {useContext, useEffect} from 'react'
import {MyContext} from '../../App.js';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export default function ChatScreen(props) {
  const { text } = useContext(MyContext);

  useEffect(() => {
    document.querySelector(".cs-message-input").style.display = "none";
  }, [])

  useEffect(() => {
    console.log(text);
  })

  return (
<div style={{ position: "relative", height: "500px" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
        {props.text != undefined && props.text.map((txt) => {
          return <Message
          model={text}
        />
        })}
           <Message
          model={{
            message: "From sender",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
           <Message
          model={{
            message: "From dialer",
            sentTime: "just now",
            sender: "Annie",
            direction: "outgoing",
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>
</div>
  )
}

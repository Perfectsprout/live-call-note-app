import { createContext, useEffect, useState } from 'react';
import {WebsocketService} from './services/websocket/websocket.js'
import ChatScreen from './lib/chatUI/ChatScreen';

export const MyContext = createContext("");
let sender = "Joe";

function App() {
  const [text, setText] = useState([]);

  useEffect(() => {
    new WebsocketService(onOpen, onMessage, onError);

    setInterval(() => {
      setText((prev) => {
        let previous = prev;
        
        previous.push({
          message: "Text Changed",
          sentTime: Date.now(),
          sender: sender,
        });
        return previous;
      })

      if(sender === "Joe") {
        sender = "Annie";
      } else {
        sender = "Joe";
      }
    }, 400);
  }, []);

  function onOpen() {
    console.log("socket open success");
  }
  function onMessage(message) {

  }
  function onError(error) {
    // TODO
    // Send error report to slack or sentry.
  }

  return (
    <MyContext.Provider value={{ text, setText }}>
      <ChatScreen text = {text}/>
    </MyContext.Provider>
  );
}

export default App;
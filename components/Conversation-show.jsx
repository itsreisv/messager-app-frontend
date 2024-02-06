import { useEffect, useState, useRef } from "react";
import '../styles/Conversations.css'
import axios from "axios";
import Messages from "./Messages";

const ConversationShow = ({userTwo, conversations, username, conversationId}) => {

  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  // Make function that gets conversationId and uses it to
  // determine which set of messages should be shown

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/home/conversations/send', {
        conversationId,
        sender: username,
        text: message,
      });
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="conv-window">
      <div className="conversation">
        <div className="conversation-header">Conversation with {userTwo} </div>
        <div className="conversation-info">
          {conversations.map((item) => (
            <Messages key={item.id} data={item} userTwo={userTwo} username={username} />
          ))}
        </div>
      </div>
      <div className="message-send">
        <form>
          <input type="text" ref={inputRef} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Send your message..." className="message-box" />
        </form>
        <button type="button" className="message-button-box" onClick={() => {sendMessage(); clearInput() }}><img src="../src/assets/send-outline.svg" className="message-button"/></button>
      </div>
    </div>
  )
}

export default ConversationShow;
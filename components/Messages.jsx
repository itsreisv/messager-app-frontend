import { useState } from "react";
import '../styles/Messages.css'

const Messages = ({data}) => {


  const conditionalMessages = () => {
    if (data.messages.sender === data.usernameOne) {
      return <div className="userOne">hello</div>
    } else if (data.messages.sender === data.usernameTwo) {
      return <div className="userTwo">hello</div>
    }
  }


  return (
    <div>
      {conditionalMessages()}
    </div>
  )
}

export default Messages;
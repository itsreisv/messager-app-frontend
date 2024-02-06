import { useState } from "react";
import axios from "axios";

const ConversationBox = ({findId, data, setUserTwo, setShowConversation}) => {

  return (
    <div onClick={() => {setUserTwo(data.usernameTwo); setShowConversation(true); findId()}}>
      <p>{data.usernameTwo}</p>
    </div>
  )
}

export default ConversationBox
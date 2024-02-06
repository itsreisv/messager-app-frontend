import { useState } from "react";
import '../styles/Profile.css'
import Conversations from "./Conversations";
import ConversationShow from "./Conversation-show";
import Users from "./Users";

function Profile({username}) {

  const [showUserList, setShowUserList] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [userTwo, setUserTwo] = useState('');
  const [conversations, setConversations] = useState('');
  const [conversationId, setConversationId] = useState('');

  const findId = () => {
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].usernameOne === username && conversations[i].usernameTwo == userTwo) {
        setConversationId(conversations[i]._id)
        console.log(conversationId)
      }
    }
  }


  const userList = () => {
    if (showUserList === true) {
      return <Users username={username} setShowUserList={setShowUserList} />
    } else if (showConversation === true) {
      return <ConversationShow conversationId={conversationId} userTwo={userTwo} username={username} conversations={conversations} />
    }
  }

  return (
    <div className="container">
      <Conversations findId={findId} username={username} setShowConversation={setShowConversation} setShowUserList={setShowUserList} setUserTwo={setUserTwo} conversations={conversations} setConversations={setConversations}/>
      {userList()}
    </div>
  )
}

export default Profile;
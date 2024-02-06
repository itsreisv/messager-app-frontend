import { useEffect, useState } from "react"
import '../styles/Conversations.css'
import Users from "./Users"
import axios from "axios"
import ConversationBox from "./Conversation-box"
import '../styles/Conversations.css'

const Conversations = ({findId, username, setShowUserList, setShowConversation, setUserTwo, conversations, setConversations}) => {

  //Create GET for all conversations, store in variable, make them show in sidebar
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fetch conversations
    if (username) {
      getConversations();
    }
  }, [username]);

  const getConversations = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/home/conversations/${username}`)
      setConversations(response.data.conversations)
      setLoading(false)
      console.log(conversations)
    } catch (error) {
      console.error('Error fetching conversations', error)
    }
  }

  return (
    <div className="sidebar">
      <div className="user-info">
        <img src="../src/assets/eye.svg" className="default-logo"/>
        <p>{username}</p>
      </div>
      <div className="conversations">
        {loading ? (
          <p>Loading...</p>
        ) : (


        <div className="conversation-list" >
          {conversations.map((item) => (
            <ConversationBox key={item.id} data={item} setUserTwo={setUserTwo} setShowConversation={setShowConversation} findId={findId} />
          ))}
        </div>
        )}
        <button type="button" className="conv-button" onClick={() => setShowUserList(true)}>New Conversation</button>
          </div>
        </div>
  )
}

export default Conversations
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Users.css'
import UserBox from "./User-box";


function Users({username, setShowUserList}) {

  const [userList, setUserList] = useState('')
  const [loading, setLoading] = useState(true);
  const [usernameTwo, setUsernameTwo] = useState('');
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/home/users');
        setUserList(response.data.all_users)
        setLoading(false);
      } catch (err) {
        console.error(err)
      }
    }
    fetchData();
  }, []);

  const createConversation = async () => {
    if (!usernameTwo) {
      console.error('usernameTwo is not set')
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/home/conversation', {
        username,
        usernameTwo
      });
    } catch(err) {
      console.log(err)
    }
  }



  return (
    <div className="user-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        {userList.map((item) => (
          <UserBox key={item.id} data={item} setUsernameTwo={setUsernameTwo} setConfirm={setConfirm} confirm={confirm} createConversation={createConversation} setShowUserList={setShowUserList} />
        ))}
        </div>
      )}
    </div>
    )}

export default Users;
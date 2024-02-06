import { useState } from "react";
import '../styles/Users.css'

const UserBox = ({data, setUsernameTwo, setConfirm, confirm, createConversation, setShowUserList}) => {

return (
 <div className="user-box">
  {confirm ? (
      <div type="button" className="user-button">
       <p>{data.username}</p>
       <p>{data.email}</p>
       <button type="button" className="conf-button" onClick={() =>{ createConversation(); setConfirm(false); setShowUserList(false) }} >Confirm</button>
       </div>
  ) : (
    <div>
    <div type="button" className="user-button" onClick={() => { setUsernameTwo(data.username); setConfirm(true); }}>
    <p>{data.username}</p>
     <p>{data.email}</p>
     </div>
    </div>
  )}
 </div> 
)}

export default UserBox;
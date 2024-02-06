import { useState } from "react";
import '../styles/log-in.css'
import axios from "axios";

function LogIn({username, password, loginUser, setPassword, setUsername}) {
  return (
    <div className="log-in-container">
    <h1>Login or Register</h1>
    <form className="log-in-form">
    <label htmlFor="username">Username:</label>
    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <br />
    <button type="button" onClick={loginUser} className="log-in-button">Login</button>
    </form>
  </div>
  )
}

export default LogIn;
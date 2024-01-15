import { useState } from "react";
import '../styles/log-in.css'
import axios from "axios";

function LogIn() {
  return (
    <div className="log-in-container">
      <form className="log-in-form">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <button type="submit" className="log-in-button">Log-In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;
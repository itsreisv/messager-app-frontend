import { useState } from "react"
import '../styles/Header.css'

function Header({setCurrentPage}) {
  return (
    <div className="header">
      <div className="logo-div">
        <img src="../src/assets/eye.svg" className="logo"/>
        <h3>BlinkChat</h3>
      </div>
      <div className="links">
        <button type="button" onClick={() => setCurrentPage('log-in')} className="header-button">Log-In</button>
        <button type="button" onClick={() => setCurrentPage('sign-up')} className="header-button">Sign-Up</button>
      </div>
    </div>
  )
}

export default Header;
import { useState } from "react"
import '../styles/Header.css'


function Header({setCurrentPage, isLoggedIn, logoutUser}) {
  return (
    <div>
      {isLoggedIn ? (
        <div className="header">
          <div className="logo-div">
            <img src="../src/assets/eye.svg" className="logo" />
            <h3>BlinkChat</h3>
          </div>
          <div className="links">
            <button type="button" className="header-button" onClick={() => setCurrentPage('profile')}>Profile</button>
            <button type="button" className="header-button" onClick={logoutUser}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="logo-div" onClick={() => setCurrentPage('log-in')}>
            <img src="../src/assets/eye.svg" className="logo"/>
            <h3>BlinkChat</h3>
        </div>
        <div className="links">
         <button type="button" onClick={() => setCurrentPage('log-in')} className="header-button">Log-In</button>
         <button type="button" onClick={() => setCurrentPage('sign-up')} className="header-button">Sign-Up</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default Header;
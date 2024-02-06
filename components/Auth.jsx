import React, {useState, useEffect} from "react";
import axios from "axios";
import Profile from '../components/Profile'
import '../styles/log-in.css'
import Header from "./Header";
import LogIn from "./log-in";
import Users from "./Users";
import SignUp from "./sign-up";
import { render } from "react-dom";

const AuthComponent = () => {
  const [currentPage, setCurrentPage] = useState('log-in');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/user', {
        withCredentials: true,
      });

      setIsLoggedIn(response.data.user !== null);
    }  catch (error) {
      console.error('Error checking authentication', error)
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      }, {
        withCredentials: true,
      })
      console.log(response.data.message);
      setIsLoggedIn(true)
      setCurrentPage('profile')
      setUsername(username)
    } catch (error) {
      console.error('Error logging in:', error.response.data.error)
    }
  }  
  

  const logoutUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/logout', {
        withCredentials: true,
      });

      console.log(response.data.message);
      setIsLoggedIn(false);
      setCurrentPage('log-in')
      setUsername('')
    } catch (error) {
      console.error('Error logging out:', error.response.data.error);
    }
  };

  const renderPage = () => {
    if (currentPage === 'sign-up') {
      return <SignUp />
    } else if (currentPage === 'log-in') {
      return <LogIn username={username} password={password} loginUser={loginUser} setPassword={setPassword} setUsername={setUsername} />
    } else if (currentPage === 'profile') {
      return <Profile logoutUser={logoutUser} username={username} />
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <div className="some-container">
          <Header setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} logoutUser={logoutUser}/>
          {renderPage()}
        </div>
      ): (
        <div className="some-container">
          <Header setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />
          {renderPage()}
        </div>
      )}
      </div>
  )
}

export default AuthComponent;
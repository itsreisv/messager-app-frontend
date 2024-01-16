import React, {useState, useEffect} from "react";
import axios from "axios";

const AuthComponent = () => {
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
    } catch (error) {
      console.error('Error logging out:', error.response.data.error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ): (
        <div>
          <h1>Login or Register</h1>
          <form>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="button" onClick={loginUser}>Login</button>
          </form>
        </div>
      )}
      </div>
  )
}

export default AuthComponent;
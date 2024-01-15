import { useState } from "react";
import '../styles/sign-up.css'
import axios from "axios";

function SignUp() {

    const [confirm, setConfirm] = useState({
      confirm: ''
    });

    const [user, setUser] = useState({
      username: '',
      password: '',
      email: '',
    });

    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleChangeTwo = (e) => {
      setConfirm({ ...confirm, [e.target.name]: e.target.value });

    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      //Check if username or email exists
      const userExists = await checkUserExists(user.username, user.email);

      if (userExists) {
        console.error('Username or email already in use')
        alert('Username or email already in use, please try again')
      } else if (user.password !== confirm.confirm ) {
        console.error('Passwords do not match, please try again')
      } else {
        try {
          const response = await axios.post('http://localhost:3000/home/sign-up', user);
          console.log(response.data);
        } catch (error) {
          console.error('Error posting user data', error)
        }
      }
    };

    const checkUserExists = async (username, email) => {
      try {
        const response = await axios.post('http://localhost:3000/home/sign-up', { username, email });
        return response.data.exists;
      } catch (error) {
        console.error('Error checking user existence', error);
        return false;
      }
    };
  

  return (
    <div className="sign-up-container">
      <h1>Create an Account!</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="username-div">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="email-div">
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="confirm-div">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm" onChange={handleChangeTwo} />
        </div>
        <div className="button-div">
          <button type="submit" className="submit-button login-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
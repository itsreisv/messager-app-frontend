import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/App.css'
import SignUp from './sign-up'
import Header from './Header'
import LogIn from './log-in'

function App() {

  const [currentPage, setCurrentPage] = useState('sign-up');

  const renderPage = () => {
    if (currentPage === 'sign-up') {
      return <SignUp />
    } else if (currentPage === 'log-in') {
      return <LogIn />
    }
  }


  return (
    <div className='page-container'>
      <Header setCurrentPage={setCurrentPage}/>
      {renderPage()}
    </div>



  )
}

export default App

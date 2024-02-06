import { useState } from 'react'
import '../styles/App.css'
import SignUp from './sign-up'
import Header from './Header'
import LogIn from './log-in'
import AuthComponent from './Auth'
import Users from './Users'

function App() {

  const [currentPage, setCurrentPage] = useState('sign-up');

  const renderPage = () => {
    if (currentPage === 'sign-up') {
      return <SignUp />
    } else if (currentPage === 'log-in') {
      return <AuthComponent />
    } else if (currentPage === 'user-list') {
      return <Users />
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

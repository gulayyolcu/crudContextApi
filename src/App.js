import React from 'react'
import UserContextProvider from './contexts/UserContext'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

const App = () => {
  return (
      <UserContextProvider>
            <Navbar/>
            <UserList/>
            <UserForm/>
      </UserContextProvider>
  )
}

export default App;
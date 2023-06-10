import { useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SharedLayout from './pages/SharedLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from './pages/ProtectedRoute'
import Error from './pages/Error'
import { userContext } from './context/userContext'
import './index.css'
import Taskpage from './pages/Taskspage'
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer } from 'react-toastify';


 
function App() {

  const [username, setUsername] =  useState('')
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) || false)
  const [loading, setLoading] = useState(false)
  
 
  return (
    <>
    <userContext.Provider value={{username, setUsername, password, setPassword, email, setEmail, login, setLogin, loading, setLoading}}>
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<SharedLayout />} >
            <Route index element={<Home />}/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='*' element={<Error />} />
          </Route>
          <Route path='tasks' element={
              <ProtectedRoute>
                <Taskpage />
              </ProtectedRoute>
            }/>
        </Routes>
    </BrowserRouter>
  </userContext.Provider>
  <ToastContainer />
  
  </>
  )
}

export default App

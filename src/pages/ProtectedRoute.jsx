import {Navigate} from 'react-router-dom'
import {useContext} from 'react'
import { userContext } from '../context/userContext'
const ProtectedRoute = ({children}) => {
  const {login } = useContext(userContext)
    if (!login) {
      return <Navigate to='/login' />
    }
    return children;
  
}
export default ProtectedRoute


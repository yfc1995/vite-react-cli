
import { useState, createContext, useContext } from 'react'
import { Navigate } from 'react-router-dom'

export let AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null)
  let signIn = (newUser, callback) => {
    setUser(newUser)
    callback()
  }

  let signOut = (callback) => {
    setUser(null)
    callback()
  }
  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export const RequireAuth = ({ children }) => {
  let { user } = useContext(AuthContext)
  return user ? children : <Navigate to="/login" replace />
}

export default AuthProvider
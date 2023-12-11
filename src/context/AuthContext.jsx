import { createContext, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  
  return (
    <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
  const { auth, user } = useContext(AuthContext);  

  return (
    <div className='greeting'>
      <p>Página inicial da aplicação</p>
    </div>
  )
}

export default Home
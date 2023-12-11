import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavigationBar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar a autenticação e fazer qualquer outra ação necessária
    setAuth(false);

    // Redirecionar para a página de login
    navigate('/');
  };

  return (
    <nav className='navigationbar'>
      <ul className='navigationList'>
        <li>
          <Link to="/home">Business Inteligence</Link>
        </li>
        <li>
          <Link to="/users">Cadastro Usuários</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li id='logoutItem'>
          {/* Adicionando o botão de logout */}
          <button className='logoutButton' onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
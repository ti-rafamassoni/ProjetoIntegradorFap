// Profile.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { auth, user } = useContext(AuthContext);

  return (
    <div className="profileComponent">
      <h1>Perfil do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Idade: {user.age}</p>
      <p>Cargo: {user.job}</p>
      <p>Setor: {user.sector}</p>
    </div>
  );
};

export default Profile;

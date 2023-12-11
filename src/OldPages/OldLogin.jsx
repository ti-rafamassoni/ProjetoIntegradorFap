import React from "react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { useState } from "react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Business Inteligence
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {

    const navigate = useNavigate();
    
    const users = JSON.parse(localStorage.getItem('users'));

    const { setAuth, setUser } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.password.value;
      
        const user = users.find((user) => user.email === email);
      
        if (!user) {
          alert('Usuário não encontrado.');
          return;
        }
      
        if (user.password !== password) {
          alert('Senha incorreta.');
          return;
        
        }
        
        setAuth(true);
        setUser(user);
        navigate(`home`);
          
      }
    

      return (  
        
        <div className="formComponent">
            <h1>Business Inteligence</h1>
            <h2 className="subtitle">Login</h2>
            <form className="initialForm" action="post" onSubmit={handleLogin}>
                <div className="inputsContainer">
                  <div className="labels">
                      <label htmlFor="emailLogin">E-mail:</label>
                      <label htmlFor="passwordLogin">Senha:</label>
                  </div>
                  <div className="inputFields">
                      <input id="emailLogin" type="email" name="email"/>
                      <input id="passwordLogin" type="password" name="password"/>
                  </div>
                </div>
                  <button className="submitButton" type="submit">Entrar</button>              
            </form>
            <p>Ainda não está cadastrado? Entre em contato com o administrador do sistema </p>
        </div>
    )
};

export default Login
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
  const navigate = useNavigate()
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const age = event.target.age.value;
    const job = event.target.job.value;
    const sector = event.target.sector.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if(password !== confirmPassword) {
      alert("As senhas não são iguais");
      return;
    }

    const user = {
      id: uuidv4(),
      name: name,
      email: email,
      age: age,
      job: job,
      sector: sector,
      password: password
    };
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    event.target.name.value = '';
    event.target.email.value = '';
    event.target.age.value = '';
    event.target.job.value = '';
    event.target.sector.value = '';
    event.target.password.value = '';
    event.target.confirmPassword.value = '';

    alert("Cadastro realizado com sucesso!")
    navigate('/usertable')
   
  };

  return (
    <div className="formComponent">
       <h1>Business Inteligence</h1>
      <h2 className='subtitle'>Cadastro</h2>
      <form className="initialForm" onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <div className="labels">
            <label htmlFor="nameInput">Nome:</label>
            <label htmlFor="emailInput">E-mail:</label>
            <label htmlFor="ageInput">Idade:</label>
            <label htmlFor="jobInput">Cargo:</label>
            <label htmlFor="sectorInput">Setor:</label>
            <label htmlFor="passwordInput">Senha:</label>
            <label htmlFor="confirmPasswordInput">Confirmar senha:</label>
          </div>
          <div className="inputFields">
            <input type="text" name='name' id='nameInput'/>           
            <input type="email" name='email' id='emailInput'/>
            <input type="text" name='age' id='ageInput'/>
            <input type="text" name='job' id='jobInput'/>
            <input type="text" name='sector' id='sectorInput'/>
            <input type="password" name="password" id="passwordInput" />
            <input type="password" name="confirmPassword" id="confirmPasswordInput" />
          </div>
        </div>
        <button className='submitButton' type="submit" >Cadastrar</button>
      </form>
    </div>
    
  )
}

export default Register
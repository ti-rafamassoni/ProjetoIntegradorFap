import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserTable = () => {
    const [users, setUsers] = useState([])

    useEffect (() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      setUsers(storedUsers);
    },[]);


    const handleDelete = (userId) =>  {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers)
      localStorage.setItem('users', JSON.stringify(updatedUsers));
     }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Cargo</th>
            <th>Setor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.job}</td>
              <td>{user.sector}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Excluir</button>
                <button onClick={() => handleEdit(user.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="registerLink" to={'/register'}>Cadastrar Novo Usuário</Link>
    </>
    
  );
};

export default UserTable

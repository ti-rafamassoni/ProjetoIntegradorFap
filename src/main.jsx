import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Root from './routes/root';
import Login from './routes/Login';
import ErrorPage from './ErrorPage';
import Home from './routes/Home';
import Register from './routes/register';
import { AuthContext, AuthProvider } from './context/AuthContext';
import NavigationBar from './component/NavigationBar';
import UserTable from './routes/userTable';
import Profile from './routes/Profile';


const PrivateRoute = ({ element }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    // Redirecionar para a página de login se não estiver autenticado
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavigationBar />
      {element}
    </>
  );

}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'home',
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: 'profile',
        element: <PrivateRoute element={<Profile />} />,
      },
      {
        path: 'usertable',
        element: <PrivateRoute element={<UserTable />} />,
      },
      {
        path: 'register',
        element: <PrivateRoute element={<Register />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

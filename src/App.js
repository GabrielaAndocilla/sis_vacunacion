import React from 'react'
import { createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";
import { ReadUser } from "./context/userauth";

import AdminLanding from './components/pages/AdminLanding';
import EmployerProfile from './components/pages/EmployerProfile';
import Login from './components/pages/Login';
import NewEmployee from './components/pages/NewEmployee';

const App = () => {
    const { user } = ReadUser();

    const validateRoute = (element, roleAssign) => {
        if(!user) return <Navigate to="/" replace={true} /> 
        if(user.role !== roleAssign) return <Navigate to="/" replace={true} /> 
        return element

    }
    const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path:'/admin',
        element: validateRoute(<AdminLanding/>,1),
    },
    {      
        path:'/nuevo/empleado',
        element: validateRoute(<NewEmployee/>,1)
    },
    {      
        path:'/empleado/:id',
        element: validateRoute(<EmployerProfile/>,1)
    },
    {
        path:'/myProfile/:id',
        element: validateRoute(<EmployerProfile/>,2)
    }
    ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
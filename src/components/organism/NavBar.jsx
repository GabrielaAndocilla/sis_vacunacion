import React from 'react'
import { Link } from 'react-router-dom'
import { ReadUser } from '../../context/userauth'
import AppIcon from '../atoms/AppIcon'

import { useNavigate } from "react-router-dom"


const NavBar = () => {
    const { user , logout } = ReadUser();
    const navigate = useNavigate()

  return (
    <nav className="bg-gray-100 text-white flex border-b-8 border-gray-900 " >
        <Link to="/"><AppIcon/></Link>
        <ul className=" px-4 w-full flex items-center justify-between ">
            <li className="text-gray-900 hover:bg-gray-700 hover:text-white p-2 rounded-md">
                  <Link to="/">Inicio</Link>
            </li>
            {
            user?.role === 1 && 
            <li className="text-gray-900 hover:bg-gray-700 hover:text-white p-2 rounded-md">
                  <Link to="/nuevo/empleado">Nuevo Empleados</Link>
            </li>
            }
            <li>
                <button className="bg-gray-900 text:white py-2 px-4 rounded-md" 
                onClick={()=>{
                    logout() 
                    navigate('/'
                )}}>{!user ? "Login": "Logout"}</button>
            </li>
        </ul>
    </nav>

    )
}
export default NavBar
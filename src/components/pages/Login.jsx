import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { ReadUser } from "../../context/userauth";

import { validateUser } from '../../helpers/user.helpers';
import AppIcon from '../atoms/AppIcon';
import PopUp from '../atoms/PopUp';
import SubmitBtn from '../atoms/SubmitBtn'
import FormField from '../molecules/FormField';

export default function Login() {
  const { login } = ReadUser();

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const redirectUserPage = (users) => {
    if (users.length === 0) return setMessage('Lo sentimos ese usuario no Existe') 
    const user = users[0]
    login(user)
    if(user.role === 1) return navigate('/admin');
    return navigate(`/myProfile/${user.id}`);
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    const userIsValid = async () =>{
        const users = await validateUser(userName,password)
        redirectUserPage(users)
    }
    userIsValid()
  }

  return (
    <>
     { message && <PopUp error={true} close={()=>setMessage('')}>{message}</PopUp>}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <AppIcon/>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900' >Ingresa a tu cuenta</h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={onSubmit} >
              <input type='hidden' name='remember' defaultValue='true' />
              <FormField htmlFor='userName' label='User Name' placeholder='User Name' value={userName} setValue={setUserName}/>
              <FormField htmlFor='password' label='Password' placeholder='Password' value={password} setValue={setPassword} type='password'/>
              <SubmitBtn>Login</SubmitBtn>
          </form>
        </div>
      </div>
    </>
  )
}
import React, { useState } from 'react'
import { validateNum_ID, generateUserName, saveEmployee } from '../../helpers/user.helpers'
import SubmitBtn from '../atoms/SubmitBtn'

import FormField from '../molecules/FormField'
import FormSectionDescription from '../organism/FormSectionDescription'
import FormSectionTitle from '../organism/FormSectionTitle'
import FormSection from '../templates/FormSection'
import Form from '../templates/Form'
import {GridTwoColums} from '../templates/Grids'
import { validateJustLetters, randomString } from '../../helpers/helpers'
import NavBar from '../organism/NavBar'
import PopUp from '../atoms/PopUp'

const NewEmployee = () => {
    const [employee, setEmployee] = useState({
        num_ID: '',
        names: '',
        familyNames: '',
        email: ''
    })
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const updateEmployee = (value,name) =>{
        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validateForm = async () => {
        const errors = {}
        if(!validateJustLetters(employee.names)) errors['names']='Valido solo letras'
        if(!validateJustLetters(employee.familyNames)) errors['familyNames']='Valido solo letras' 
        if(await validateNum_ID(employee.num_ID)) errors['num_ID']='Incluir un valor numérico y único de 10 dígitos'
        return errors
    }

    const saveEmployeeFun = async() => {
        const userNameGen = await generateUserName(employee.names,employee.familyNames)
        const password = randomString(8)
        const newEmployee = await saveEmployee({
            ...employee,
            dateOfBirth: null,
            address: null,
            user:userNameGen,
            phone: null,
            password: password,
            role:2,
            vaccine: {
                vaccineStatus:false
            }
        })
        if(newEmployee) setMessage(`Gracias por crear un empleado el USERNAME: ${userNameGen} PASSWORD:${password}`)
    }

    const submit = async (event) => {
        event.preventDefault()
        const errors = await validateForm()
        setErrors(errors)
        if(Object.keys(errors).length === 0) {
            saveEmployeeFun()
        setEmployee({email: "", familyNames: "", names: "", num_ID: ""})
        }
        return setMessage('Lo sentimos valide los datos')
    }

  return (
    <>
        <NavBar/>
        {message && 
        <PopUp error={Object.keys(errors).length} close={()=>setMessage('')}>{message}</PopUp>}
        <div className='p-8'>
            <Form submit={submit}>
                <FormSection>
                    <FormSectionTitle
                    title='Inforación del Empleado'
                    description='Se necesita ingresar la información primordial del usuario'
                    />
                    <FormSectionDescription>
                        <GridTwoColums>
                            <FormField htmlFor='names' label='Nombres' value={employee.names} setValue={updateEmployee} error={errors.names}/>
                            <FormField htmlFor='familyNames' label='Apellidos' value={employee.familyNames} setValue={updateEmployee}  error={errors.familyNames}/>
                            <FormField htmlFor='num_ID' label='Cédula de Identidad' value={employee.num_ID} setValue={updateEmployee} error={errors.num_ID}/>
                            <FormField htmlFor='email' label='Email de Empleado' value={employee.email} setValue={updateEmployee} type='email'/>
                        </GridTwoColums>
                        <SubmitBtn>Guardar</SubmitBtn>
                    </FormSectionDescription>
                </FormSection>
            </Form>
        </div>
    </>

  )
}
export default NewEmployee
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import LineDivider from '../atoms/LineDivider'
import ChecckBox from '../atoms/ChecckBox'
import SubmitBtn from '../atoms/SubmitBtn'
import FormField from '../molecules/FormField'
import FormSelect from '../molecules/FormSelect'
import FormSectionTitle from '../organism/FormSectionTitle'
import FormSectionDescription from '../organism/FormSectionDescription'
import {GridTwoColums} from '../templates/Grids'
import FormSection from '../templates/FormSection'
import Form from '../templates/Form'

import { getVaccines } from '../../helpers/vaccines.helpers'
import { getEmployeeById, updateEmployeeData } from '../../helpers/user.helpers'


const EmployerProfile = () => {

  const { id } = useParams()
  const [employee, setEmployee] = useState(null)
  const [vaccines, setVaccines] = useState([])

  useEffect(()=>{
    const getUser = async () => {
      const vaccinesRes = await getVaccines()
      const employee = await getEmployeeById(id)
      setVaccines(vaccinesRes)
      if(employee.vaccine)  return setEmployee({
        ...employee, 
        vaccineStatus: employee.vaccine.vaccineStatus,
        vaccineType : vaccinesRes.find(vaccine => vaccine.label === employee.vaccine.vaccineType), 
        vaccineDate : employee.vaccine.vaccineDate, 
        vaccineDoses: employee.vaccine.vaccineDoses 
      })
      return setEmployee({...employee, vaccineStatus: false, vaccineType : null , vaccineDate : null , vaccineDoses: null })
    }
    getUser()
  },[id])

  const updateEmployee = (value,name) =>{
    setEmployee((prev) => ({
        ...prev,
        [name]: value
    }))
  }
  const submit = async (event) => {
    event.preventDefault()
    await updateEmployeeData({
      id:id,
      dateOfBirth: employee.dateOfBirth,
      phone: employee.phone,
      address: employee.address,
      vaccine:{
        vaccineStatus: employee.vaccineStatus,
        vaccineType : employee.vaccineType.value, 
        vaccineDate : employee.vaccineDate, 
        vaccineDoses: employee.vaccineDoses
      }
    },id)
  }

  
  return (
    <div className='p-8'>
      <Form submit={submit}>
        <FormSection>
          <FormSectionTitle
            title='Información del Empleado'
            description='Se necesita ingresar la información primordial del usuario'
          />
          <FormSectionDescription>
              <GridTwoColums>
                  <FormField htmlFor='names' label='Nombres' value={employee?.names} setValue={updateEmployee} />
                  <FormField htmlFor='familyNames' label='Apellidos' value={employee?.familyNames} setValue={updateEmployee} />
                  <FormField htmlFor='num_ID' label='Cédula de Identidad' value={employee?.num_ID} setValue={updateEmployee} />
                  <FormField htmlFor='email' label='Email de Empleado' placeholder='Email ...' value={employee?.email} setValue={updateEmployee} />
              </GridTwoColums>
          </FormSectionDescription>
        </FormSection>
        <LineDivider />
        <FormSection>
          <FormSectionTitle
            title='Complete su Informacion'
            description='Se necesita ingresar la información para completar sus datos'
          />
          <FormSectionDescription>
          <GridTwoColums>
              <FormField htmlFor='dateOfBirth' label='Fecha de Nacimiento' value={employee?.dateOfBirth} setValue={updateEmployee} type='date'/>
              <FormField htmlFor='phone' label='Teléfono' value={employee?.phone} setValue={updateEmployee}/>
              <FormField htmlFor='address' label='Dirección' value={employee?.address} setValue={updateEmployee}/>
            </GridTwoColums>
            <h3 className="text-lg font-medium leading-6 text-gray-900 my-8">Vacunación</h3>
            <ChecckBox name="vaccineStatus" checked={employee?.vaccineStatus} label='Ya estoy Vacunado' setValue={updateEmployee}/>
              {
                employee?.vaccineStatus
                  &&
                <GridTwoColums>
                  <FormSelect options={vaccines} value={employee?.vaccineType} name='vaccineType' label='Tipo de Vacuna' setValue={updateEmployee}/>
                  <FormField htmlFor='vaccineDate' label='Fecha de Vacunación' value={employee?.vaccineDate} setValue={updateEmployee} type='date'/>
                  <FormField htmlFor='vaccineDoses' label='Dosis' value={employee?.vaccineDoses} setValue={updateEmployee}/>
                </GridTwoColums>
              }
          </FormSectionDescription>
        </FormSection>
        <SubmitBtn>Guardar</SubmitBtn>
      </Form>
      </div>
  )
}

export default EmployerProfile
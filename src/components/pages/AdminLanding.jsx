import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Table from '../organism/Table'
import NavBar from '../organism/NavBar'

import { getEmployees, getFilterEmployees, deleteEmployee } from '../../helpers/user.helpers'
import { formatDate } from '../../helpers/helpers'
import FormFilters from '../templates/FormFilters'

const AdminLanding = () => {

  const [employees,setEmployees] = useState([])

  const getData = async () => {
    const emplo = await getEmployees()
    setEmployees(emplo)
  }

  useEffect(()=>{
    getData()
  },[])

  const eraseEmployee = async (id) => {
    await deleteEmployee(id)
    getData()
  }

  const formatData = () =>  employees.map(({id,num_ID,names,familyNames,email,vaccine}) => {
    return {
      id,
      num_ID,
      names,
      familyNames,
      email,
      vaccineStatus: vaccine?.vaccineStatus ? 'Vacunado' :'No Vacunado',
      vaccineDate: vaccine?.vaccineDate,
      vaccineType: vaccine?.vaccineType,
      vaccineDosisNumber: vaccine?.vaccineDoses,
      acctions: <>
        <button onClick={()=>eraseEmployee(id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
        <Link to={`/empleado/${id}`}><FontAwesomeIcon icon={faEdit} /></Link>
      </> 
    }
  })
  
  const filterData = async (filterType,filterValue,startDate='',endDate='') => {
    const filterData = await getFilterEmployees(filterType !== 'vaccine.vaccineDate' ? `${filterType}=${encodeURIComponent(filterValue)}` : `${filterType}_gte=${formatDate(startDate)}&${filterType}_lte=${formatDate(endDate)}`)
    setEmployees(filterData)
  }

  return (
    <>
      <NavBar/>
      <FormFilters filterData={filterData}/>
      <Table
      titles={['Cedula','Nombre','Apellidos','Email','Vacunado','Fecha de Vacunación','Tipo de Vacuna','Numero de Dosis', '']}
      values={formatData()}/>
    </>
  )
}

export default AdminLanding
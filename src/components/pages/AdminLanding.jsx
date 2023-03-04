import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Table from '../organism/Table'
import NavBar from '../organism/NavBar'

import { getEmployees, getFilterEmployees } from '../../helpers/user.helpers'
import { formatDate } from '../../helpers/helpers'
import FormFilters from '../templates/FormFilters'

const AdminLanding = () => {

  const [employees,setEmployees] = useState([])

  useEffect(()=>{
    const getData = async () => {
      const employees = await getEmployees()
      setEmployees(employees)
    }
    getData()
  },[])

  const erraseEmploye = (id) => {
    console.log(id)
  }

  const formatData = (employees) =>  employees.map(({id,num_ID,names,familyNames,email,vaccine}) => {
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
        <Link to={`/empleado/${id}`}><FontAwesomeIcon icon={faEdit} /></Link>
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => erraseEmploye(id)} />
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
      values={formatData(employees)}/>
    </>
  )
}

export default AdminLanding
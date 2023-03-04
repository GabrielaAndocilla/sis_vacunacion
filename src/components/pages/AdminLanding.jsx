import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import SubmitBtn from '../atoms/SubmitBtn'
import Table from '../organism/Table'
import NavBar from '../organism/NavBar'
import FormSelect from '../molecules/FormSelect'
import {GridThreeColums} from '../templates/Grids'
import Form from '../templates/Form'

import { FILTER_OPTIONS, FILTER_OPTIONS_VACCINE_STATE } from '../../constance'
import { getEmployees, getFilterEmployees } from '../../helpers/user.helpers'
import { getVaccines } from '../../helpers/vaccines.helpers'
import { formatDate } from '../../helpers/helpers'

const AdminLanding = () => {

  const [employees,setEmployees] = useState([])
  const [filterType,setFilterType] = useState(FILTER_OPTIONS[0])
  const [filterValue,setFilterValue] = useState(null)
  const [vaccines,setVaccines] = useState({})
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(()=>{
    const getData = async () => {
      const vaccinesRes = await getVaccines()
      setVaccines(vaccinesRes)
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

  const onChangeDate = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  
  const filterData = async (event) => {
    event.preventDefault()
    const filterData = await getFilterEmployees(filterType.value !== 'vaccine.vaccineDate' ? `${filterType.value}=${encodeURIComponent(filterValue.value)}` : `${filterType.value}_gte=${formatDate(startDate)}&${filterType.value}_lte=${formatDate(endDate)}`)
    setEmployees(filterData)
  }

  return (
    <>
      <NavBar/>
      <Form className='w-1/2 my-4 m-auto' submit={filterData}>
        <GridThreeColums>
          <FormSelect options={FILTER_OPTIONS} value={filterType} name='filterOption' label='Filtrar Por' setValue={setFilterType}/>
          {filterType.value === 'vaccine.vaccineStatus' && <FormSelect options={FILTER_OPTIONS_VACCINE_STATE} value={filterValue} name='filterValue' label='Opción' setValue={setFilterValue}/> }
          {filterType.value === 'vaccine.vaccineType' && <FormSelect options={vaccines} value={filterValue} name='filterValue' label='Opción' setValue={setFilterValue}/> }
          {filterType.value === 'vaccine.vaccineDate' && <div> <DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={onChangeDate} className='border-4 rounded-md py-1 px-3' placeholderText='Rango de Fechas'/></div>}
          <SubmitBtn>Filtar</SubmitBtn>
        </GridThreeColums>
      </Form>
      <Table
      titles={[
      'Cedula',
      'Nombre',
      'Apellidos',
      'Email',
      'Vacunado',    
      'Fecha de Vacunación',
      'Tipo de Vacuna',
      'Numero de Dosis', 
      ''
    ]}
    values={formatData(employees)}/>
    </>
  )
}

export default AdminLanding
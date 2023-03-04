import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FILTER_OPTIONS, FILTER_OPTIONS_VACCINE_STATE } from '../../constance'
import { getVaccines } from '../../helpers/vaccines.helpers'
import SubmitBtn from '../atoms/SubmitBtn'
import FormSelect from '../molecules/FormSelect'
import Form from './Form'
import { GridThreeColums } from './Grids'

const FormFilters = ({filterData}) => {
    const [filterType,setFilterType] = useState(FILTER_OPTIONS[0])
    const [filterValue,setFilterValue] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [vaccines,setVaccines] = useState({})
    
  useEffect(()=>{
    const getData = async () => {
      const vaccinesRes = await getVaccines()
      setVaccines(vaccinesRes)
    }
    getData()
  },[])

    const onChangeDate = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        filterData(filterType.value,filterValue.value,startDate,endDate)
    }

    return (
        <Form className='w-1/2 my-4 m-auto' submit={onSubmit}>
            <GridThreeColums>
                <FormSelect options={FILTER_OPTIONS} value={filterType} name='filterOption' label='Filtrar Por' setValue={setFilterType}/>
                {filterType.value === 'vaccine.vaccineStatus' && <FormSelect options={FILTER_OPTIONS_VACCINE_STATE} value={filterValue} name='filterValue' label='Opción' setValue={setFilterValue}/> }
                {filterType.value === 'vaccine.vaccineType' && <FormSelect options={vaccines} value={filterValue} name='filterValue' label='Opción' setValue={setFilterValue}/> }
                {filterType.value === 'vaccine.vaccineDate' && <div> <ReactDatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={onChangeDate} className='border-4 rounded-md py-1 px-3' placeholderText='Rango de Fechas'/></div>}
                <SubmitBtn>Filtar</SubmitBtn>
            </GridThreeColums>
        </Form>
    )
}

export default FormFilters
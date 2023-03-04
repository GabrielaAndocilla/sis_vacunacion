export const REGEXLETTER = /^[A-Za-z]+$/
export const REGEXNUMBER = /^[0-9]+$/
export const FILTER_OPTIONS = [
    { value: 'vaccine.vaccineStatus', label: 'Estado de vacunación' }, 
    { value: 'vaccine.vaccineType', label: 'Tipo de Vacuna' }, 
    { value: 'vaccine.vaccineDate', label: 'Fechas de vacunación' }
]

export const FILTER_OPTIONS_VACCINE_STATE = [
    { value: 'true', label: 'Vacunado' }, 
    { value: 'false', label: 'No Vacunado' }, 
]

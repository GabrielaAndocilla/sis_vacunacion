import { render, screen, waitFor } from "@testing-library/react"
import EmployerProfile from "../EmployerProfile"

import {getEmployeeById , updateEmployeeData} from "../../../helpers/user.helpers";
import { getVaccines } from "../../../helpers/vaccines.helpers";
import userEvent from "@testing-library/user-event";

jest.mock('../../../helpers/user.helpers')
jest.mock('../../../helpers/vaccines.helpers')

const employee = {
    id: 2,
    num_ID: "1711221944",
    names: "Juan",
    familyNames: "Carlos",
    email: "juanCaros@gmailcom",
    dateOfBirth: "2010-12-28",
    address: "ccc",
    user: "JuanCarlos",
    phone: "11212121",
    password: "22222",
    role: 2,
    vaccine: {
        vaccineStatus: true,
        vaccineType: "Sputnik",
        vaccineDate: "2023-03-01",
        vaccineDoses: "1"
    }
}
const vaccine = [{
    "id": 1,
    "value": "Sputnik",
    "label": "Sputnik"
}]

describe('Employee Profile', ()=>{

    const renderComponent = () => render(<EmployerProfile/>)
    it('should render Component with Employee with vaccine',async () => {
        getEmployeeById.mockResolvedValue(employee)
        getVaccines.mockResolvedValue(vaccine)
        renderComponent()
        await waitFor( () =>expect(screen.getByRole('textbox',{name:'Nombres'})).toHaveValue('Juan') )
        expect(screen.getByRole('textbox',{name:'Apellidos'})).toHaveValue('Carlos')
        expect(screen.getByRole('textbox',{name:'Dosis'})).toHaveValue('1')
    })

    it('should render Component with Employee without vaccine',async () => {
        getEmployeeById.mockResolvedValue({
            ...employee,
            vaccine:{
                vaccineStatus: false,
            }
        })
        getVaccines.mockResolvedValue(vaccine)
        renderComponent()
        await waitFor( () =>expect(screen.getByRole('textbox',{name:'Nombres'})).toHaveValue('Juan') )
        expect(screen.getByRole('textbox',{name:'Apellidos'})).toHaveValue('Carlos')
        expect(screen.queryByRole('textbox',{name:'Dosis'})).not.toBeInTheDocument()
    })

    it('should submit',async () => {
        getEmployeeById.mockResolvedValue(employee)
        getVaccines.mockResolvedValue(vaccine)
        updateEmployeeData.mockResolvedValue({})
        renderComponent()
        await waitFor( () =>expect(screen.getByRole('textbox',{name:'Nombres'})).toHaveValue('Juan') )
        userEvent.click(screen.getByRole('button',{type:'submit'}))
        expect(updateEmployeeData).toBeCalledTimes(1)
    })
})
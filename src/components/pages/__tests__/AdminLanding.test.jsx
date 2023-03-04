import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";

import AdminLanding from "../AdminLanding"
import { getEmployees } from "../../../helpers/user.helpers";

import { Userprovider } from "../../../context/userauth";


jest.mock('../../../helpers/user.helpers')

describe('Admin Page',()=>{
    const renderComponent = () => render(<Userprovider><MemoryRouter><AdminLanding/></MemoryRouter></Userprovider>)
    it('should render correctly the employee', async ()=>{
        getEmployees.mockResolvedValue([
            {
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
        ])
         renderComponent()
         const employeeList = await screen.findAllByRole('cell');
         expect(employeeList.length).toBe(9);
         expect(employeeList[0]).toHaveTextContent('1711221944')

    })

})
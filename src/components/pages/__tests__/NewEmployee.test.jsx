import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NewEmployee from "../NewEmployee"
import {validateNum_ID , saveEmployee} from "../../../helpers/user.helpers";
import { Userprovider } from "../../../context/userauth";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../helpers/user.helpers')

describe('New Employee Page',() => {
    const renderComponent = () => render(
        <Userprovider>
            <MemoryRouter><NewEmployee/></MemoryRouter>          
        </Userprovider>
    )
    test('should render all fields',async () => {
        renderComponent()
        validateNum_ID.mockResolvedValue(false)
        saveEmployee.mockResolvedValue({})
        userEvent.type(screen.getByRole('textbox',{name:"Cédula de Identidad"}),'1234567890')
        userEvent.type(screen.getByRole('textbox',{name:"Nombres"}),'Nombre221')
        userEvent.type(screen.getByRole('textbox',{name:"Apellidos"}),'Apellido')
        userEvent.type(screen.getByRole('textbox',{name:"Email de Empleado"}),'test@test.com')
        userEvent.click(screen.getByText('Guardar'))

       await waitFor(() => expect(saveEmployee).not.toBeCalled())
    })
})
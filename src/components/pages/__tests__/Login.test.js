import { render, screen,waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"
import Login from "../Login"
import {validateUser} from "../../../helpers/user.helpers";
import { Userprovider } from "../../../context/userauth";

jest.mock('../../../helpers/user.helpers')

describe('Login',() => {
    it('should render Correct', ()=>{
        render(
            <Userprovider>
                <MemoryRouter><Login/></MemoryRouter>          
            </Userprovider>
        )
        expect(screen.getByLabelText('User Name')).toBeInTheDocument()

        expect(screen.getByLabelText('Password')).toBeInTheDocument()
    })

    it('should validate User',async  ()=>{
        render(
            <Userprovider>
                <MemoryRouter><Login/></MemoryRouter>          
            </Userprovider>
        )
        validateUser.mockResolvedValue([{role:2,id:3}])
        userEvent.type(screen.getByLabelText('User Name'),'test')
        userEvent.type(screen.getByLabelText('Password'),'test')
        userEvent.click(screen.getByRole('button'))
        await waitFor(() => expect(validateUser).toHaveBeenCalledWith('test','test') )
    })
})
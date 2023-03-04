import { render, screen,waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"
import Login from "../Login"
import {validateUser} from "../../../helpers/user.helpers";

jest.mock('../../../helpers/user.helpers')

describe('Login',() => {
    it('should render Correct', ()=>{
        render(<MemoryRouter><Login/></MemoryRouter>)
        expect(screen.getAllByRole('textbox').length).toBe(2)
        expect(screen.getByRole('img').alt).toEqual('App icon')
    })

    it('should validate User',async  ()=>{
        render(<MemoryRouter><Login/></MemoryRouter>)
        validateUser.mockResolvedValue([{role:2,id:3}])
        userEvent.type(screen.getByRole('textbox',{name:'User Name'}),'test')
        userEvent.type(screen.getByRole('textbox',{name:'Password'}),'test')
        userEvent.click(screen.getByRole('button'))
        await waitFor(() => expect(validateUser).toHaveBeenCalledWith('test','test') )
    })
})
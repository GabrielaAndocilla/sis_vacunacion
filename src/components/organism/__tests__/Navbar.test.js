import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Userprovider } from "../../../context/userauth";
import NavBar from '../NavBar'

describe('Navbar', () =>{
    it('is rendering correct',()=>{
        render(
            <Userprovider>
                <MemoryRouter>
                    <NavBar/>
                </MemoryRouter>
            </Userprovider>
        )
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
})
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import NavBar from '../NavBar'

describe('Navbar', () =>{
    it('is rendering correct',()=>{
        render(
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        )
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
})
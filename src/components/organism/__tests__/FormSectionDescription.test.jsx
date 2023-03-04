import { render, screen } from "@testing-library/react"
import FormSectionDescription from "../FormSectionDescription"

describe('Form Section Description', () =>{
    it('the description should have the correct style',()=>{
        render(<FormSectionDescription>Test Description</FormSectionDescription>)
        expect(screen.getByText('Test Description')).toBeInTheDocument()
    })
})
import { render, screen } from "@testing-library/react"
import FormSectionTitle from "../FormSectionTitle"

describe('Form Section Title', () =>{
    it('the description should have the correct info',()=>{
        render(<FormSectionTitle
            title={'title'}
            description={'description'}
        />)
        expect(screen.getByRole('heading')).toHaveTextContent('title')
    })
})
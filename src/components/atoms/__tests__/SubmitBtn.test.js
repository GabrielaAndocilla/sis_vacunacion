import { render, screen} from '@testing-library/react'
import SubmitBtn from '../SubmitBtn'

describe('Submit Button', () =>{
    const renderComponent = () => render(<SubmitBtn>test</SubmitBtn>);

    it('should display a custom button with the correct style',()=>{
        renderComponent()
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('test')
        expect(button).toHaveClass('bg-indigo-600')
    })

})
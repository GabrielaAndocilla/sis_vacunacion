import {render, screen} from '@testing-library/react'
import  ErrorrSpan from '../ErrorrSpan'

describe('Error Soan', () =>{
    it('should the show an error text',()=>{
        render(<ErrorrSpan>Error</ErrorrSpan>)
        const span = screen.getByText('Error')
        expect(span).toBeInTheDocument()
    })
})
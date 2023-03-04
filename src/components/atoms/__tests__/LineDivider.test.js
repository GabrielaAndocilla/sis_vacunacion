import {render, screen} from '@testing-library/react'
import LineDivider from '../LineDivider'

describe('Test line divider', () =>{
    it('should the divider be gray color',()=>{
        render(<LineDivider/>)
        const lineDivide = screen.getByTestId('line-divider')
        expect(lineDivide).toBeInTheDocument()
        expect(lineDivide).toHaveClass('border-gray-200')
    })
})
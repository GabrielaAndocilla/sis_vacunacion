import {render, screen} from '@testing-library/react'
import Input from '../Input'

describe('Error Soan', () =>{
    it('should the input show the correct info without red border',()=>{
        render(<Input
            name='testName'
            label='testLabel'
            value='test'
        />)
        const input = screen.getByRole('textbox')

        expect(input).toBeInTheDocument()
        expect(input.name).toBe('testName')
        expect(input.placeholder).toBe('testLabel ...')
        expect(input).toHaveValue('test')
        expect(input).toHaveClass('border-gray-300')
    })

    it('should the input be red border with error true',()=>{
        render(<Input
            name='testName'
            label='testLabel'
            value='test'
            error='error'
        />)
        const input = screen.getByRole('textbox')

        expect(input).toBeInTheDocument()
        expect(input.name).toBe('testName')
        expect(input.placeholder).toBe('testLabel ...')
        expect(input).toHaveValue('test')
        expect(input).toHaveClass('border-red-300')
    })
})
import {render, screen} from '@testing-library/react'
import FormField from '../FormField'

describe('Form Field', () =>{
    it('should show a form field with a value',()=>{
        render(<FormField
            htmlFor='test'
            label='test'
            value='testValue'
        />)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('testValue')
    })

    it('should show a form field without span Error',()=>{
        render(<FormField
            htmlFor='test'
            label='test'
        />)
        const label = screen.getByLabelText('test')
        expect(label).toBeInTheDocument()
        expect(screen.queryByText('error')).not.toBeInTheDocument()
    })

    it('should show a form field with a span Error',()=>{
        render(<FormField
            htmlFor='test'
            label='test'
            error='error'
        />)
        const label = screen.getByLabelText('test')
        const spanError = screen.getByText('error')
        expect(label).toBeInTheDocument()
        expect(spanError).toBeInTheDocument()
    })
})
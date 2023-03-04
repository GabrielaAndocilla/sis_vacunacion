import {render, screen} from '@testing-library/react'
import SubTitle from '../SubTitle'

describe('Sub title', () =>{
    it('should display text',()=>{
        render(<SubTitle>test</SubTitle>)
        const subTitle = screen.getByText('test')
        expect(subTitle).toBeInTheDocument()
        expect(subTitle).toHaveClass('font-medium text-gray-900')

    })
})
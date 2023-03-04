import {render, screen} from '@testing-library/react'
import Paragraph from '../Paragraph'

describe('Paragraph', () =>{
    it('should display text',()=>{
        render(<Paragraph>test</Paragraph>)
        const paragraph = screen.getByText('test')
        expect(paragraph).toBeInTheDocument()
    })
})
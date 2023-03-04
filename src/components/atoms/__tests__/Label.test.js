import {render, screen} from '@testing-library/react'
import Label from '../Label'

describe('Test Label', () =>{
    it('should render the correct for and label',()=>{
        render(<Label htmlFor='test' label='test' />)
        const label = screen.getByText('test')
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent('test');
        expect(label).toHaveAttribute("for", "id_test");
    })
})
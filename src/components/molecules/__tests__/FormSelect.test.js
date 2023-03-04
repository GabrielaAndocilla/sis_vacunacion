import { render, screen, fireEvent} from '@testing-library/react'
import FormSelect from '../FormSelect'


describe('Form Select', () =>{

    const mockedOnChange = jest.fn()
    
    it('should select the value',async ()=>{
        render(<FormSelect
            options={[{value:1, label:'test 1'},{value:2, label:'test 2'}]}
            value={{}}  
            name='test'
            label='test' 
            setValue={mockedOnChange}
        />)
        const select = screen.getByRole('combobox')

        fireEvent.keyDown(select, { key: 'ArrowDown', code: 'ArrowDown' })
        fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' })
      
        expect(select).toBeDefined()
        expect(mockedOnChange).toHaveBeenCalledTimes(1)
        expect(mockedOnChange).toHaveBeenCalledWith({value:1, label:'test 1'},'test')

    })
})
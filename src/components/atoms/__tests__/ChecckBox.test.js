import {render, screen} from '@testing-library/react'
import ChecckBox from '../ChecckBox'

describe('ChecckBox Input', () =>{
    it('should the checkbox be checked',()=>{
        render(<ChecckBox checked={true} label='testValue' />)
        expect(screen.getByRole('checkbox',{
            name:'testValue',
            checked: true
        })).toBeDefined()
    })

    it('shouldn\'t the checkbox be checked',()=>{
        render(<ChecckBox checked={false} label='testValue' />)
        expect(screen.getByRole('checkbox',{
            name:'testValue',
            checked: false
        })).toBeDefined()
    })
})
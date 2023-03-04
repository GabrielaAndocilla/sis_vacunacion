import {render, screen} from '@testing-library/react'
import TableBody from '../TableBody'
const valuesTable = [
    {id:1,name:'test1'},
    {id:2,name:'test2'}
]

describe('Table Detail', () =>{
    it('should display body content',()=>{
        render(
            <table>
                <TableBody tableValues={valuesTable}/>
            </table>
        )
        const cells = screen.getAllByRole('cell')
        const rows = screen.getAllByRole('row')
        expect(cells.length).toBe(2)
        expect(rows.length).toBe(2)

    })
})
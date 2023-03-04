import { render, screen } from "@testing-library/react"
import Table from "../Table"

const valuesTable = [{id:1,name:'test1'},{id:2,name:'test2'}]
const valuesTiles = ['title 1']

describe('Table',()=>{
    
    it('should render correctly',()=>{
        render(<Table
            titles={valuesTiles}
            values={valuesTable}
        />)
        const cells = screen.getAllByRole('cell')
        const rows = screen.getAllByRole('row')
        const header = screen.getAllByRole('columnheader')
        expect(header.length).toBe(1)
        expect(cells.length).toBe(2)
        expect(rows.length).toBe(3)
    })
})
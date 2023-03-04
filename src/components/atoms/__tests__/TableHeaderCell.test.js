import {render, screen} from '@testing-library/react'
import TableHeaderCell from '../tableHeaderCell'

describe('Table Detail', () =>{
    it('should display text',()=>{
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell>test</TableHeaderCell>
                    </tr>
                </thead>
            </table>
        )

        const tblDetail = screen.getByRole('columnheader')
        expect(tblDetail).toBeInTheDocument()
        expect(tblDetail).toHaveTextContent('test')
        expect(tblDetail).toHaveClass('border-slate-300')

    })
})
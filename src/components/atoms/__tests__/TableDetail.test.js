import {render, screen} from '@testing-library/react'
import TableDetail from '../tableDetail'

describe('Table Detail', () =>{
    it('should display text',()=>{
        render(
            <table>
                <tbody>
                    <tr>
                        <TableDetail>test</TableDetail>
                    </tr>
                </tbody>
            </table>
        )

        const tblDetail = screen.getByRole('cell')
        expect(tblDetail).toBeInTheDocument()
        expect(tblDetail).toHaveTextContent('test')
        expect(tblDetail).toHaveClass('border-slate-300')

    })
})
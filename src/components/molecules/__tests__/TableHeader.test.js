import {render, screen} from '@testing-library/react'
import TableHeader from '../tableHeader'

const valuesTiles = ['title 1', 'title 2']

describe('Table Header', () =>{
    it('should display Header',()=>{
        render(
            <table>
                <TableHeader titles={valuesTiles}/>
            </table>
        )
        const header = screen.getAllByRole('columnheader')
        expect(header.length).toBe(2)
        expect(header[0]).toHaveTextContent('title 1')

    })
})
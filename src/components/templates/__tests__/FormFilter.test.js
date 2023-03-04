import { render,screen, fireEvent, waitFor } from "@testing-library/react"

import userEvent from "@testing-library/user-event";
import { formatDate } from "../../../helpers/helpers";
import FormFilters from "../FormFilters";
import { getVaccines } from "../../../helpers/vaccines.helpers";


jest.mock('../../../helpers/vaccines.helpers')

describe('Admin Page',()=>{

    it('change Date',async ()=>{
        getVaccines.mockResolvedValue([    {
            "id": 2,
            "value": "AstraZeneca",
            "label": "AstraZeneca"
        }])
        render(<FormFilters/>)
        const filterType = screen.getAllByRole('combobox')[0]
        fireEvent.keyDown(filterType,{key:'ArrowDown',code:'ArrowDown'})
        fireEvent.keyDown(filterType,{key:'ArrowDown',code:'ArrowDown'})
        fireEvent.keyDown(filterType,{key:'ArrowDown',code:'ArrowDown'})
        fireEvent.keyDown(filterType,{key:'Enter',code:'Enter'})

        const datePicker = screen.getByRole('textbox')
        fireEvent.keyDown(datePicker,{key:'ArrowDown',code:'ArrowDown'})
        fireEvent.keyDown(datePicker,{key:'Enter',code:'Enter'})
        fireEvent.keyDown(datePicker,{key:'ArrowDown',code:'ArrowDown'})
        userEvent.click(screen.getByText(15))
        fireEvent.keyDown(datePicker,{key:'Enter',code:'Enter'})
        const today = formatDate(new Date())
        await waitFor(() =>  expect(datePicker.value).toBe(`${today} - ${today.split('/')[0]}/15/${today.split('/')[2]}`))
       
    })
})
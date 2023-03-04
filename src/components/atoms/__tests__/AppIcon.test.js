import {render, screen} from '@testing-library/react'
import AppIcon from '../AppIcon'

describe('App Icon', () =>{
    it('should the App show an image',()=>{
        render(<AppIcon/>)
        expect(screen.getByRole('img')).toBeDefined()
    })
})
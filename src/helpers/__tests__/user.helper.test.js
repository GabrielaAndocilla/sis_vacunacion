import {validateNum_ID,num_IDIsUnique, userNameIsUnique, validateUser}  from "../user.helpers"


const mockFetch = (data) => {
    return global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => data
      })
    )
}
const mockFetchFail = () => {
    return global.fetch = jest.fn().mockImplementation(() => 
        Promise.reject('error')
    )
}

  
describe('Test user helpers',()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
    })
    test('validateNum_ID is not correct length',async ()=>{
        mockFetch([])
        const isValid = await validateNum_ID('123')
        expect(isValid).toBeFalsy()
    })
    
    test('num_IDIsUnique', async ()=>{
        mockFetch([])
        const id = await num_IDIsUnique('1111111111')
        expect(id.length).toBe(0)

    })

    test('userNameIsUnique', async ()=>{
        mockFetch([{id:2, user: 'test'}])
        const id = await userNameIsUnique('test')
        expect(id.length).toBeGreaterThan(0)
    })

    test('validateUser', async ()=>{
        mockFetch([{id:2, user: 'test'}])
        const id = await validateUser('test','test')
        expect(id.length).toBeGreaterThan(0)
    })



}) 
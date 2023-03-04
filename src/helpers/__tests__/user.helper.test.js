import {validateNum_ID,num_IDIsUnique, userNameIsUnique, validateUser, generateUserName, getEmployees, getEmployeeById, getFilterEmployees, updateEmployeeData, saveEmployee}  from "../user.helpers"


global.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
    json: () => []
    })
)

  
describe('Test user helpers',()=>{
    beforeEach(()=>{
        fetch.mockRestore()
    })
    
    test('num_IDIsUnique', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => []
        }))
        const id = await num_IDIsUnique('1111111111')
        expect(id.length).toBe(0)

    })

    test('num_IDIsUnique Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await num_IDIsUnique('1111111111')
        expect(error).toBe('Error')

    })

    test('userNameIsUnique', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => []
        }))
        const id = await userNameIsUnique('userNew')
        expect(id.length).toBe(0)

    })

    test('userNameIsUnique Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await userNameIsUnique('1111111111')
        expect(error).toBe('Error')

    })


    test('validateUser', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{userName:'userName', password:'password' }]
        }))
        const user = await validateUser('userName','password')
        expect(user[0]).not.toBeNull()

    })

    test('validateUser Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await validateUser('error','error')
        expect(error).toBe('Error')

    })

    test('validateNum_ID is not correct length',async ()=>{
        const isValid = await validateNum_ID('123')
        expect(isValid).toBe("123")
    })

    test('generateUserName is not correct length',async ()=>{
        const userName = await generateUserName('name','lastName')
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{userName:'userName', password:'password' }]
        }))
        expect(userName).not.toBe('namelastName')
    })

    test('getEmployees', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{userName:'userName', password:'password' },{userName:'userName', password:'password' }]
        }))
        const users = await getEmployees()
        expect(users.length).toBe(2)

    })

    test('getEmployees Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await getEmployees()
        expect(error).toBe('Error')

    })

    test('getEmployeeById', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{userName:'userName', password:'password' }]
        }))
        const user = await getEmployeeById(1)
        expect(user[0]).not.toBeNull()

    })

    test('getEmployeeById Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await getEmployeeById(123)
        expect(error).toBe('Error')

    })

    test('getFilterEmployees', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => []
        }))
        const employees = await getFilterEmployees('')
        expect(employees).toStrictEqual([])

    })

    test('getFilterEmployees Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await getFilterEmployees()
        expect(error).toBe('Error')

    })

    test('updateEmployeeData', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{}]
        }))
        const employee = await updateEmployeeData({},1)
        expect(employee[0]).toStrictEqual({})

    })

    test('updateEmployeeData Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await updateEmployeeData({},123)
        expect(error).toBe('Error')

    })

    test('saveEmployee', async ()=>{
        fetch.mockImplementation(()=>  Promise.resolve({
            json: () => [{name:'test'}]
        }))
        const employee = await saveEmployee({name:'test'})
        expect(employee[0]).toStrictEqual({name:'test'})

    })

    test('saveEmployee Fail', async ()=>{
        fetch.mockImplementation(()=> Promise.reject('Error'))
        const error = await saveEmployee({},123)
        expect(error).toBe('Error')

    })

}) 
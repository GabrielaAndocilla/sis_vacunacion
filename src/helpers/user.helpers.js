import { REGEXNUMBER } from "../constance"
import { randomString } from "./helpers"

export const num_IDIsUnique = async (num_ID) =>{
    const exitingnum_ID = await fetch(`http://localhost:3000/users?num_ID=${num_ID}`)
    const response = await exitingnum_ID.json()
    const result = await response
    return result

}

export const userNameIsUnique = async (user) =>{
    const exitingUser = await fetch(`http://localhost:3000/users?user=${user}`)
    const response = await exitingUser.json()
    const result = await response
    return result
}

export const validateUser = async (userName,password) =>{
    const fetchUser = await fetch(`http://localhost:3000/users?user=${userName}&password=${password}`)
    const response = await fetchUser.json()
    const user = await response
    return user
}

export const validateNum_ID = async (num_ID) => {
    if(num_ID.length > 10) return false
    if(!REGEXNUMBER.test(num_ID)) return false
    const exitingnum_ID = await num_IDIsUnique(num_ID)
    if(exitingnum_ID.length === 0 ) return false
    return true   
}

export const generateUserName = async (names, familyNames) => {
    const userName = (names+familyNames).trim()
    const exitingUser = await userNameIsUnique(userName)
    if(exitingUser.length === 0 ) return userName
    return userName + randomString(4)
}

export const getEmployees = async () =>{
    const fetchUser = await fetch(`http://localhost:3000/users?role=2`)
    const response = await fetchUser.json()
    const result = await response
    return result
}
export const getEmployeeById = async (id) =>{
    const userFetch = await fetch(`http://localhost:3000/users?id=${id}`)
    const response = await userFetch.json()
    const result = await response
    return result[0]
}

export const getFilterEmployees = async (url) => {
    const fetchUser = await fetch(`http://localhost:3000/users?role=2&${url}`)
    const response = await fetchUser.json()
    const result = await response
    return result
}

export const updateEmployeeData = async (body,id) => {
    const fetchUser = await fetch(`http://localhost:3000/users/${id}`,{
        method:'PATCH',
        body:JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await fetchUser.json()
    const result = await response
    return result
}

export const saveEmployee = async (body) => {
    const fetchUser = await fetch(`http://localhost:3000/users`,{
        method:'POST',
        body:JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await fetchUser.json()
    const result = await response
    return result
}
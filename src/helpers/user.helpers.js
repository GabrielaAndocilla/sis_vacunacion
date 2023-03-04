import { REGEXNUMBER } from "../constance"
import { randomString } from "./helpers"

export const num_IDIsUnique = async (num_ID) =>{
    try {        
        const exitingnum_ID = await fetch(`http://localhost:3002/users?num_ID=${num_ID}`)
        const response = await exitingnum_ID.json()
        const result = await response
        return result
    } catch (error) {
        return error
    }

}

export const userNameIsUnique = async (user) =>{
    try {        
        const exitingUser = await fetch(`http://localhost:3002/users?user=${user}`)
        const response = await exitingUser.json()
        const result = await response
        return result
    } catch (error) {
        return error
    }
}

export const validateUser = async (userName,password) =>{
    try {        
        try{
            const fetchUser = await fetch(`http://localhost:3002/users?user=${userName}&password=${password}`)
            const response = await fetchUser.json()
            const user = await response
            return user
        }catch(error){
            return error
        }
    } catch (error) {
        return error
    }
}

export const validateNum_ID = async (num_ID) => {
        if(num_ID.length > 10) return null
        if(!REGEXNUMBER.test(num_ID)) return null
        const exitingnum_ID = await num_IDIsUnique(num_ID)
        if(exitingnum_ID.length === 0 ) return null
        return num_ID   
}

export const generateUserName = async (names, familyNames) => {
    const userName = (names+familyNames).trim()
    const exitingUser = await userNameIsUnique(userName)
    if(exitingUser.length === 0 ) return userName
    return userName + randomString(4)
}

export const getEmployees = async () =>{
    try{
        const fetchUser = await fetch(`http://localhost:3002/users?role=2`)
        const response = await fetchUser.json()
        const result = await response
        return result
    }catch(error){
        return error
    }
}
export const getEmployeeById = async (id) =>{
    try {
        const userFetch = await fetch(`http://localhost:3002/users?id=${id}`)
        const response = await userFetch.json()
        const result = await response
        return result[0]
    } catch (error) {
        return error
    }
}

export const getFilterEmployees = async (url) => {
    try{
        const fetchUser = await fetch(`http://localhost:3002/users?role=2&${url}`)
        const response = await fetchUser.json()
        const result = await response
        return result
    }catch(error){
        return error
    }
}
export const deleteEmployee = async (id) => {
    try{
        const fetchUser = await fetch(`http://localhost:3002/users/${id}`,{
                method:'DELETE'
        })
        const response = await fetchUser.json()
        const result = await response
        return result
    }catch(error){
        return error
    }
}

export const updateEmployeeData = async (body,id) => {
    try{
        const fetchUser = await fetch(`http://localhost:3002/users/${id}`,{
                method:'PATCH',
                body:JSON.stringify(body),
                headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await fetchUser.json()
        const result = await response
        return result
    }catch(error){
        return error
    }
}

export const saveEmployee = async (body) => {
    try{
        const fetchUser = await fetch(`http://localhost:3002/users`,{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await fetchUser.json()
        const result = await response
        return result
    }catch(error){
        return null
    }
}
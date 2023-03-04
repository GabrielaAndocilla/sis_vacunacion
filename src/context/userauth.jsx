import React,{useState,useMemo} from 'react'

const UserContext = React.createContext();

export function Userprovider(props){

    const [user, setUser] = useState(()=>{
        try {
            console.log('useState',window.localStorage.getItem('user'))
            const item = window.localStorage.getItem('user')
            console.log(JSON.parse(item))
            return item ? JSON.parse(item) : null
        } catch (error) {
            return null
        }
    });


    function logout(){
        setUser(null)
        window.localStorage.removeItem('user')
    }

    const login = (user)=>{
        window.localStorage.setItem('user',JSON.stringify(user))
        setUser(user)
    }

    const value = useMemo(() => {
        return({
            user,
            login,
            logout

        })
    }, [user]);

    return <UserContext.Provider value={value} {...props} />
}

export function ReadUser(){
    const context = React.useContext(UserContext);
    if(!context){
        throw "ERRRO CONTEXT"
    }
    return context;
}

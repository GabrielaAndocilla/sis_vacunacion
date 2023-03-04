import React,{useState,useMemo} from 'react'

const UserContext = React.createContext();

export function Userprovider(props){

    const [user, setUser] = useState(null);


    function logout(){
        setUser(null)
    }

    function login(user){
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

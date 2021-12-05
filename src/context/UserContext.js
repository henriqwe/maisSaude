import React,{useState, createContext, useEffect} from "react";

export const UserContext = createContext();

export function UserProvider(props){

    const [user,setUser] = useState(null)

    useEffect(() => {
        const localUser = localStorage.getItem('User')
        if(localUser){
            setUser(JSON.parse(localUser))
        }
    }, [])
    return(
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
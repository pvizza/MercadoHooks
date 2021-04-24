import React,{useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [logged,setLogged] = useState(null)

    return (

    <Context.Provider value={{logged,setLogged}}>

        {children}

    </Context.Provider>
    )}

export default Context
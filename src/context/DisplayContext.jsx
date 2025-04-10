import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayProvider({children}){
    const [display, setDisplay] = useState("home");
    const [loggedUser, setLoggedUser] = useState(null)

    return(
        <DisplayContext.Provider value={{display, setDisplay, loggedUser, setLoggedUser}}>
            {children}
        </DisplayContext.Provider>
    )
}
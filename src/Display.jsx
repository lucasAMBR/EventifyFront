import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "login" && loggedUser == null && <Entry />}</>
        <>{display == "login" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display
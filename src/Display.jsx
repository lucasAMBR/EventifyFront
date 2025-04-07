import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "home" && "HOME PAGE"}</>
        <>{display == "entry" && loggedUser == null && <Entry />}</>
        <>{display == "entry" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display
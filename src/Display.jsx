import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"
import Home from "./pages/home/Home"

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "home" && <Home />}</>
        <>{display == "entry" && loggedUser == null && <Entry />}</>
        <>{display == "entry" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display
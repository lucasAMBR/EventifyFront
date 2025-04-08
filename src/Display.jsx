import { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import Entry from "./pages/entry/Entry"
import Header from "./pages/home/home"

function Display(){

    const {display, setDisplay, loggedUser, setLoggedUser} = useContext(DisplayContext)

    return(
        <>
        <>{display == "home" && <Header />}</>
        <>{display == "entry" && loggedUser == null && <Entry />}</>
        <>{display == "entry" && loggedUser != null && "principal"}</>
        </>
    )
}

export default Display